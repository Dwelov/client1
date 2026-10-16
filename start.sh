#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/app"
# Fallback: if start.sh is placed inside app/ directly
if [ -f "$SCRIPT_DIR/package.json" ] && [ -f "$SCRIPT_DIR/vite.config.ts" ]; then
  APP_DIR="$SCRIPT_DIR"
fi

PORT="${PORT:-3000}"

usage() {
  cat <<EOF
Usage: ./start.sh [OPTIONS]

Start Dr. M Hashaam Physiotherapy Clinic app (Vite + React).

Options:
  --docker    Start with Docker Compose (requires Dockerfile, runs in APP_DIR)
  --prod      Build for production and serve via 'vite preview' on port $PORT
  --build     Build for production only ('npm run build'), then exit
  -h, --help  Show this help

Env:
  PORT        Dev/preview port (default: 3000)

Examples:
  ./start.sh
  PORT=3001 ./start.sh
  ./start.sh --prod
  ./start.sh --docker
EOF
}

MODE="dev"
for arg in "$@"; do
  case "$arg" in
    --docker) MODE="docker" ;;
    --prod) MODE="prod" ;;
    --build) MODE="build" ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $arg" >&2; usage; exit 1 ;;
  esac
done

if [ ! -d "$APP_DIR" ]; then
  echo "Error: app directory not found: $APP_DIR" >&2
  exit 1
fi
cd "$APP_DIR"

command -v npm >/dev/null 2>&1 || { echo "Error: npm not found. Install Node.js 22+ first." >&2; exit 1; }
command -v node >/dev/null 2>&1 || { echo "Error: node not found. Install Node.js 22+ first." >&2; exit 1; }

# Docker mode
if [ "$MODE" = "docker" ]; then
  command -v docker >/dev/null 2>&1 || { echo "Error: docker not found." >&2; exit 1; }
  if [ ! -f "Dockerfile" ]; then
    echo "Error: Dockerfile not found in $APP_DIR but docker-compose.yml references it." >&2
    echo "Run without --docker for local Node start: ./start.sh" >&2
    exit 1
  fi
  if docker compose version >/dev/null 2>&1; then
    exec docker compose up --build
  else
    exec docker-compose up --build
  fi
fi

# Local .env bootstrap (optional, from .env.example)
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
  echo "Creating .env from .env.example (edit it to add real keys)..."
  cp .env.example .env
fi

# Install deps if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (npm install)..."
  npm install
else
  echo "Dependencies already installed (node_modules exists, skipping npm install)."
fi

case "$MODE" in
  dev)
    echo "Starting dev server on http://localhost:$PORT ..."
    exec npm run dev
    ;;
  build)
    echo "Building for production..."
    exec npm run build
    ;;
  prod)
    echo "Building for production..."
    npm run build
    echo "Serving production build on http://localhost:$PORT ..."
    exec npm run preview -- --port="$PORT" --host=0.0.0.0
    ;;
esac
