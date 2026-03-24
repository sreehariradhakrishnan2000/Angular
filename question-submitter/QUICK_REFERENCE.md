# 🎯 QUICK REFERENCE - Files to Edit

## ⚡ Essential File to Update (ONLY THIS ONE!)

### `src/environments/environment.ts`

**Current content:**
```typescript
/**
 * Environment configuration for development.
 */
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID'
  }
};
```

**What to change:**
Replace the three placeholder values with your EmailJS credentials:

```typescript
/**
 * Environment configuration for development.
 */
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'REPLACE_WITH_YOUR_PUBLIC_KEY_FROM_EMAILJS',
    serviceId: 'REPLACE_WITH_YOUR_SERVICE_ID_FROM_EMAILJS',
    templateId: 'REPLACE_WITH_YOUR_TEMPLATE_ID_FROM_EMAILJS'
  }
};
```

**Example (with fake values):**
```typescript
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'abc123XYZ_abcDEF456-ghiJKL789-opqRSTU0',
    serviceId: 'service_abc1234567890def',
    templateId: 'template_xyz9870654321abc'
  }
};
```

✅ **SAVE THE FILE!**

---

## 📝 Optional: For Production Deployment

### `src/environments/environment.production.ts`

Add the same credentials here (if you deploy):

```typescript
/**
 * Environment configuration for production.
 */
export const environment = {
  production: true,
  emailjs: {
    publicKey: 'PASTE_YOUR_PUBLIC_KEY_HERE',
    serviceId: 'PASTE_YOUR_SERVICE_ID_HERE',
    templateId: 'PASTE_YOUR_TEMPLATE_ID_HERE'
  }
};
```

---

## 📂 Project Files Summary

### **SOURCE CODE (Ready to Use):**

```
src/app/
├── app.ts              ✅ Component logic (EmailJS integration ready)
├── app.html            ✅ Beautiful form template
├── app.scss            ✅ Component styles
├── app.config.ts       ✅ Angular configuration
└── app.routes.ts       ✅ Routing setup

src/
├── styles.scss         ✅ Global styles (background, animations)
├── main.ts             ✅ Bootstrap application
└── index.html          ✅ HTML entry
```

### **CONFIGURATION FILES:**

```
src/environments/
├── environment.ts              ⏳ UPDATE THIS (development)
└── environment.production.ts   ⏳ UPDATE THIS (production - optional)
```

### **DOCUMENTATION FILES (Already Created):**

```
├── README.md                   📖 Full documentation
├── GETTING_STARTED.md          📖 Step-by-step guide
├── EMAILJS_SETUP.md            📖 EmailJS checklist
└── VISUAL_GUIDE.md             📖 Architecture & flow diagrams
```

---

## 🔍 Files You DON'T Need to Edit

These are already configured and working:

| File | Status | Reason |
|------|--------|--------|
| `angular.json` | ✓ | Project configuration complete |
| `tsconfig.json` | ✓ | TypeScript configured |
| `package.json` | ✓ | All dependencies installed |
| `src/index.html` | ✓ | Already has Material fonts |
| `src/app/app.html` | ✓ | Form template ready |
| `src/app/app.ts` | ✓ | Component logic complete |
| `src/styles.scss` | ✓ | Global styles applied |

---

## 🚀 Before & After

### BEFORE (What had errors):
```typescript
// ❌ ERROR: Import path wrong
import { environment } from '../../environments/environment';

// ❌ ERROR: Material theme functions
$primary: mat.define-palette(mat.$indigo-palette);

// ❌ ERROR: Template projection warning
@else {
  <mat-icon>send</mat-icon>
  <span>Send Question</span>
}
```

### AFTER (All fixed):
```typescript
// ✅ FIXED: Correct import path
import { environment } from '../environments/environment';

// ✅ FIXED: Removed Material theme functions
// (Not needed for this project)

// ✅ FIXED: Wrapped in ng-container
@else {
  <ng-container>
    <mat-icon>send</mat-icon>
    <span>Send Question</span>
  </ng-container>
}
```

---

## 📋 Configuration Checklist

- [ ] Got Public Key from EmailJS
- [ ] Got Service ID from EmailJS
- [ ] Got Template ID from EmailJS
- [ ] Updated `src/environments/environment.ts`
- [ ] Saved the file (Ctrl+S or Cmd+S)
- [ ] Run `npm start`
- [ ] Tested form locally
- [ ] Successfully received test email
- [ ] Optionally updated `environment.production.ts`
- [ ] Ready to deploy!

---

## 🎯 The 3 Values You Need

You'll need these from EmailJS Dashboard:

```
1️⃣  PUBLIC KEY
    Dashboard → Account → API tab
    Example: abc123XYZ_abcDEF456-ghiJKL789-opqRSTU0

2️⃣  SERVICE ID
    Dashboard → Email Services
    Example: service_abc1234567890def

3️⃣  TEMPLATE ID
    Dashboard → Email Templates
    Example: template_xyz9870654321abc
```

---

## 🧪 Testing After Update

```bash
# Start dev server
npm start

# In browser
http://localhost:4200

# Test form
1. Type: "Can you help me with Angular?"
2. Click: "Send Question"
3. Wait for: "Question sent successfully!"
4. Check: sreehariradhakrishnan200@gmail.com inbox
5. You should see the email!
```

---

## 📞 If Something Goes Wrong

1. **Open browser console** (F12 key)
2. **Check Console tab** for error messages
3. **Common errors:**
   - "Cannot read property 'send' of undefined" → Check Public Key
   - "Invalid service ID" → Check Service ID
   - "Invalid template ID" → Check Template ID
   - CORS error → Verify Public Key is correct

---

## ✨ Final Result

After these steps, your portfolio will have:

✅ Beautiful question submission form
✅ Form validation with error messages
✅ Loading spinner while sending
✅ Success confirmation message
✅ Emails delivered to your Gmail inbox
✅ Professional Material Design UI
✅ Mobile responsive layout
✅ Ready to impress employers!

---

**That's it! You're all set.** 🚀

Next step: Get your EmailJS credentials and update the environment file!
