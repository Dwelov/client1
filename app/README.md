# Dr. M Hashaam - Consultant Physiotherapist Clinic App

**Shabbir Hospital, Bank Road, Daska**  
*“Move Better • Feel Better • Live Better”*

A high-performance modern web application for Dr. M Hashaam’s Physiotherapy & Rehabilitation practice at Shabbir Hospital, Daska.

---

## 🐳 How to Run with Docker on Your Local Machine

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your computer.

### Step 1: Clone or Open the Project Directory
```bash
cd /path/to/project
```

### Step 2: Build & Start the Container
Run the following command in your terminal:
```bash
docker compose up --build
```
*(Or in background/detached mode: `docker compose up -d --build`)*

### Step 3: Open in Browser
Visit your app at:
👉 **[http://localhost:3000](http://localhost:3000)**

### To Stop the Container
```bash
docker compose down
```

---

## 💻 Alternative: Run Directly with Node.js

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 📱 Responsive Layout Features
- **Desktop (Laptops & Monitors):** A full-featured pill navigation bar with direct links to Home, Services, Consultant Profile, Clinical Care Standards, and Hospital Location, alongside direct WhatsApp and Consultation booking CTAs.
- **Mobile & Tablet:** Responsive touch-friendly layout with a streamlined hamburger menu and animated drawer.
- **Direct WhatsApp Integration:** Pre-fills appointment requests and connects directly to `+92 316 5891778` (`0316 5891778`).
