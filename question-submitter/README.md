# Question to Email Submitter - Angular Portfolio Project

A beautiful, interactive Angular application that allows visitors to submit questions directly to your email using EmailJS integration.

## 🎯 Features

✨ **Stunning UI** - Modern Material Design with gradient background and glassmorphism effects
📧 **Email Integration** - Seamlessly send questions to your configured Gmail address
⚡ **Real-time Validation** - Form validation with helpful error messages
🎨 **Responsive Design** - Works perfectly on desktop and mobile devices
💬 **User Feedback** - Success messages and error handling
🔄 **Form Reset** - Automatic form clearing after successful submission

## 🛠️ Tech Stack

- **Framework**: Angular 21.2.0
- **UI Library**: Angular Material 21.2.3
- **Email Service**: EmailJS
- **Styling**: SCSS with Material Design
- **Reactive Forms**: Angular Reactive Forms
- **State Management**: Angular Signals

## 📁 Project Structure

```
src/
├── app/
│   ├── app.ts              # Main component (form logic & EmailJS)
│   ├── app.html            # Template with Material UI
│   ├── app.scss            # Component styles
│   ├── app.config.ts       # Application configuration
│   └── app.routes.ts       # Routing configuration
├── environments/
│   ├── environment.ts      # Development configuration
│   └── environment.production.ts  # Production configuration
├── styles.scss             # Global styles
└── index.html              # HTML entry point
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd question-submitter
npm install
```

### 2. Configure EmailJS (5 minutes)

#### Step A: Create EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" → Create Account → Log In

#### Step B: Connect Gmail Service
1. Go to **Email Services** → **Add New Service**
2. Select **Gmail** service
3. Click **Connect Gmail Account**
4. Select: **sreehariradhakrishnan200@gmail.com**
5. Authorize and confirm
6. Click **Create Service**
7. **📋 Copy the Service ID** (looks like: `service_xxxxxxxxxxxxx`)

#### Step C: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Fill in:
   - Name: `question_template`
   - To Email: `sreehariradhakrishnan200@gmail.com`
   - Subject: `New Question Submission`
3. Switch to **HTML** mode and paste:
   ```html
   <h2>New Question Received</h2>
   <p><strong>Question:</strong></p>
   <p>{{question}}</p>
   <hr>
   <p>Submitted via your Angular Portfolio Application</p>
   ```
4. Click **Save**
5. **📋 Copy the Template ID** (looks like: `template_xxxxxxxxxxxxx`)

#### Step D: Get Public Key
1. Click **Account** (left menu)
2. Go to **API** tab
3. **📋 Copy your Public Key** (long alphanumeric string)

### 3. Update Environment File

Open `src/environments/environment.ts` and replace:

```typescript
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'PASTE_YOUR_PUBLIC_KEY_HERE',      // From Step D
    serviceId: 'PASTE_YOUR_SERVICE_ID_HERE',      // From Step B
    templateId: 'PASTE_YOUR_TEMPLATE_ID_HERE'     // From Step C
  }
};
```

Save the file!

### 4. Run the App

```bash
npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

## 📧 How It Works

1. User enters a question (minimum 10 characters)
2. Clicks "Send Question" button
3. Form validates and sends email via EmailJS
4. Email arrives at sreehariradhakrishnan200@gmail.com
5. Success message shows for 3 seconds
6. Form automatically resets
7. User can send another question

## 🧪 Testing Locally

1. Open `http://localhost:4200/`
2. Type a test question (e.g., "This is my test portfolio question?")
3. Click "Send Question"
4. Check your email inbox (sreehariradhakrishnan200@gmail.com)
5. Email should arrive in 1-2 seconds!

Not working? Check browser console (F12) for error messages.

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check Public Key, Service ID, Template ID in environment.ts |
| Form won't submit | Question must be at least 10 characters |
| No console errors but email stuck | Check EmailJS dashboard status |
| Gmail authorization failed | Delete service & reconnect in EmailJS |

## 📦 Build for Production

```bash
npm run build
```

Output: `dist/question-submitter/browser/`

## 🌐 Deploy to Portfolio Website

### Netlify (Easiest)
1. Push code to GitHub
2. Connect repo to [Netlify](https://netlify.com)
3. Build command: `ng build --configuration production`
4. Publish: `dist/question-submitter/browser`
5. Deploy!

### Vercel
1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Auto-detects Angular settings
4. Deploy!

### Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init
npm run build
firebase deploy
```

## 📚 Project Highlights (For Portfolio)

✅ Angular component architecture
✅ Reactive Forms with custom validation
✅ Material Design components
✅ Third-party API integration (EmailJS)
✅ SCSS styling & animations
✅ Responsive design (mobile-friendly)
✅ Error handling & user feedback
✅ Angular Signals (latest Angular feature)
✅ Standalone components (modern Angular)
✅ Environment configuration management

## 📝 Dev Commands

```bash
npm start              # Start dev server (http://localhost:4200)
npm run build          # Build for production
npm run watch          # Watch mode
npm test               # Run tests
ng serve --port 3000  # Run on custom port
```

## ⚠️ Important Notes

- **Never share** your EmailJS Public Key in GitHub (but for portfolio it's okay)
- All emails go to: **sreehariradhakrishnan200@gmail.com**
- Form validates minimum 10 characters
- EmailJS free tier: 200 emails/month

## 🤝 Contributing & Learning

This project is great for learning:
- Angular forms and validation
- Material Design integration
- API integration patterns
- Component communication
- SCSS styling

## 📖 Resources

- [Angular Docs](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [EmailJS Guide](https://www.emailjs.com/docs/)
- [Reactive Forms](https://angular.dev/guide/forms/reactive-forms)

---

**Portfolio Project** | Question Submission Form with Email Integration | Angular 21 | Material Design
