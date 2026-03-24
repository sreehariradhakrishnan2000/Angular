# 📋 EmailJS Setup Checklist

Complete these steps to get emails working on your portfolio project.

## ✅ Step 1: Create EmailJS Account (1 min)

- [ ] Go to [emailjs.com](https://www.emailjs.com)
- [ ] Click "Sign Up"
- [ ] Create account with your email
- [ ] Log in to dashboard

## ✅ Step 2: Connect Gmail Service (2 min)

- [ ] In EmailJS dashboard, go to **Email Services**
- [ ] Click **Add New Service**
- [ ] Select **Gmail**
- [ ] Click **Connect Gmail Account**
- [ ] Choose: **sreehariradhakrishnan200@gmail.com**
- [ ] Click Authorize
- [ ] Click **Create Service**
- [ ] **COPY & PASTE Service ID below:**
  ```
  Service ID: ____________________________
  ```

## ✅ Step 3: Create Email Template (2 min)

- [ ] Go to **Email Templates**
- [ ] Click **Create New Template**
- [ ] Fill in these fields:
  - Name: `question_template`
  - To Email: `sreehariradhakrishnan200@gmail.com`
  - Subject: `New Question Submission`
- [ ] Click **HTML** tab
- [ ] Paste this template:
  ```html
  <h2>New Question Received</h2>
  <p><strong>Question:</strong></p>
  <p>{{question}}</p>
  <hr>
  <p>Submitted via your Angular Portfolio Application</p>
  ```
- [ ] Click **Save**
- [ ] **COPY & PASTE Template ID below:**
  ```
  Template ID: ____________________________
  ```

## ✅ Step 4: Get Public Key (1 min)

- [ ] Click **Account** (left sidebar)
- [ ] Go to **API** tab
- [ ] **COPY & PASTE Public Key below:**
  ```
  Public Key: ____________________________
  ```

## ✅ Step 5: Update Angular App (1 min)

- [ ] Open: `question-submitter/src/environments/environment.ts`
- [ ] Replace with your credentials:
  ```typescript
  export const environment = {
    production: false,
    emailjs: {
      publicKey: 'PASTE_YOUR_PUBLIC_KEY_HERE',
      serviceId: 'PASTE_YOUR_SERVICE_ID_HERE',
      templateId: 'PASTE_YOUR_TEMPLATE_ID_HERE'
    }
  };
  ```
- [ ] **SAVE THE FILE!**

## ✅ Step 6: Test the App (2 min)

- [ ] Run: `npm start`
- [ ] Wait for "http://localhost:4200" message
- [ ] Open browser: http://localhost:4200
- [ ] Type a test question (min 10 chars)
- [ ] Click "Send Question"
- [ ] Check sreehariradhakrishnan200@gmail.com inbox
- [ ] **You should receive the email!**

## ✅ Step 7: Production Setup (1 min)

- [ ] Open: `question-submitter/src/environments/environment.production.ts`
- [ ] Add the same credentials from Step 4
- [ ] Save file

## 🚀 Ready to Deploy!

Once everything works locally:

```bash
# Build for production
npm run build

# Deploy to Netlify (easiest)
# Push to GitHub → Connect to Netlify → Auto-deploy!
```

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| Email not showing | Check Public Key, Service ID, Template ID |
| Gmail auth failed | Delete service, reconnect in EmailJS |
| Form won't submit | Question needs minimum 10 characters |
| Receiving errors | Open F12 → Console → Check for errors |

## 🎯 Your Credentials

Save these somewhere safe for reference:

```
📧 Email receiving address: sreehariradhakrishnan200@gmail.com

🔐 EmailJS Credentials:
   Public Key: [To be filled]
   Service ID: [To be filled]
   Template ID: [To be filled]
```

---

**Tip**: Once you complete this checklist, your portfolio will have a fully functional email submission system! 🎉
