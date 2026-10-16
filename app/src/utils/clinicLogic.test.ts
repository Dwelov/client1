import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePakistanPhone,
  normalizePakistanPhone,
  validateAppointmentForm,
  triageSymptom,
  generateWhatsAppBookingUrl,
} from './clinicLogic.ts';

test('validates Dr. Hashaam flyer phone format and variations', () => {
  assert.equal(validatePakistanPhone('0316 5891778'), true);
  assert.equal(validatePakistanPhone('+92 316 5891778'), true);
  assert.equal(validatePakistanPhone('03165891778'), true);
  assert.equal(validatePakistanPhone('+923165891778'), true);
  assert.equal(validatePakistanPhone('12345'), false);
  assert.equal(validatePakistanPhone(''), false);
});

test('normalizes flyer phone number to +923165891778 format', () => {
  assert.equal(normalizePakistanPhone('0316 5891778'), '+923165891778');
  assert.equal(normalizePakistanPhone('+92 316 5891778'), '+923165891778');
});

test('validates consultation appointment form inputs', () => {
  const invalidResult = validateAppointmentForm({
    fullName: '',
    phone: 'invalid',
    location: '',
    primarySymptom: '',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.location);
  assert.ok(invalidResult.errors.primarySymptom);

  const validResult = validateAppointmentForm({
    fullName: 'Muhammad Usman',
    phone: '0316 5891778',
    location: 'Shabbir Hospital (Bank Road, Daska)',
    primarySymptom: 'Neck stiffness and headache',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('triages flyer symptoms to appropriate services', () => {
  const neck = triageSymptom('Severe neck stiffness and headache');
  assert.equal(neck.id, 'neck-pain');
  assert.equal(neck.titleUrdu, 'گردن کا درد اور سر درد');

  const shoulder = triageSymptom('Rotator cuff injury and shoulder pain');
  assert.equal(shoulder.id, 'shoulder-pain');

  const stroke = triageSymptom('Rehabilitation after stroke and balance loss');
  assert.equal(stroke.id, 'stroke-rehab');

  const knee = triageSymptom('Knee stiffness and difficulty bending joint');
  assert.equal(knee.id, 'knee-pain');
});

test('generates valid WhatsApp consultation link for Dr. Hashaam (+92 316 5891778)', () => {
  const url = generateWhatsAppBookingUrl({
    fullName: 'Ali Raza',
    phone: '0316 5891778',
    location: 'Shabbir Hospital (Bank Road, Daska)',
    primarySymptom: 'Back pain vertebral issue',
  });
  assert.ok(url.startsWith('https://wa.me/923165891778?text='));
  assert.ok(url.includes('Shabbir%20Hospital'));
  assert.ok(url.includes('Ali%20Raza'));
});
