# 🎨 Visual Guide - Form Flow & Components

## How the Form Works

```
┌─────────────────────────────────────────────────────────┐
│                   INITIAL STATE                          │
├─────────────────────────────────────────────────────────┤
│  Question to Email Submitter                            │
│  Send your question to the configured email             │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Your Question                                     │  │
│  │ [Enter your question here... (min 10 chars)]     │  │
│  │                                                   │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  [Send Question]  ← Button disabled if text < 10 chars  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## User Types Question (10+ characters)

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐  │
│  │ Your Question                                     │  │
│  │ Can you help me understand Angular signals?      │  │
│  │                                                   │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  [Send Question]  ← Button ENABLED (text >= 10 chars)   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## User Clicks "Send Question"

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐  │
│  │ Your Question                                     │  │
│  │ Can you help me understand Angular signals?      │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  [◌ • ◕ • ◌ Sending...]  ← Loading spinner shows       │
│                                                          │
└─────────────────────────────────────────────────────────┘

BEHIND THE SCENES:
• Form validates question (min 10 chars)
• EmailJS sends email to sreehariradhakrishnan200@gmail.com
• Loading state prevents double-submit
```

## Email Successfully Sent (Success Message)

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐  │
│  │ Your Question                                     │  │
│  │ [Empty - Form reset]                             │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  [Send Question]  ← Button back to normal state         │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ ✓ Question sent successfully!                    │ │
│  │       ← Shows for 3 seconds, then disappears     │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘

✉️ EMAIL RECEIVED:
From: noreply@emailjs.com
To: sreehariradhakrishnan200@gmail.com
Subject: New Question Submission

Body:
  New Question Received
  Question:
  Can you help me understand Angular signals?
  ────────
  Submitted via your Angular Portfolio Application
```

## If Error Occurs

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐  │
│  │ Your Question                                     │  │
│  │ Can you help me understand Angular signals?      │  │
│  │                                                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ✗ Failed to send. Check EmailJS config and console.   │
│    ← Red error message appears                         │
│                                                          │
│  [Send Question]  ← User can try again                  │
│                                                          │
└─────────────────────────────────────────────────────────┘

Check Browser Console (F12):
• EmailJS public key invalid
• Service ID incorrect
• Template ID not found
• Network error
```

---

## Component Architecture

```
┌─────────────────────────────────────┐
│  app.ts (Component)                 │
├─────────────────────────────────────┤
│                                      │
│  Properties:                         │
│  • questionForm (FormGroup)          │
│  • loading$ (Signal)                 │
│  • success$ (Signal)                 │
│  • errorMsg$ (Signal)                │
│                                      │
│  Methods:                            │
│  • sendQuestion()                    │
│  • get question (getter)             │
│                                      │
└────────────────┬────────────────────┘
                 │
                 ▼
    ┌─────────────────────────────┐
    │  app.html (Template)        │
    ├─────────────────────────────┤
    │  • mat-card (container)      │
    │  • form (reactive form)      │
    │  • mat-form-field (input)    │
    │  • button (submit)           │
    │  • success/error messages    │
    │                              │
    └─────────────────────────────┘
                 │
                 ▼
    ┌─────────────────────────────┐
    │  app.scss (Styles)          │
    ├─────────────────────────────┤
    │  • Form field styles         │
    │  • Button styles             │
    │  • Text areas                │
    │  • Spacing & alignment       │
    │                              │
    └─────────────────────────────┘
```

---

## Form Validation Rules

```
Question Field Validation:
├─ Required: Yes
│  ✗ Empty → Shows: "Question is required"
│
└─ Minimum Length: 10 characters
   ✗ Less than 10 → Shows: "At least 10 characters required"
   ✓ 10+ characters → Ready to submit
```

---

## Email Sending Flow

```
┌─────────────┐
│   User      │
│  clicks     │
│   send      │
└──────┬──────┘
       │
       ▼
┌─────────────────────────┐
│  Validate Form          │
│  (10+ characters?)      │
└──────┬──────────────────┘
       │
       ├─ Invalid ─► Show Error Message
       │
       └─ Valid ─►
       ▼
┌──────────────────────────┐
│  Set Loading = true      │
│  Show spinner on button  │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  EmailJS.send(                   │
│    serviceId,                    │
│    templateId,                   │
│    { question: "..." },          │
│    publicKey                     │
│  )                               │
└──────┬───────────────────────────┘
       │
       ├─ Success ─►
       ▼
┌────────────────────────────────┐
│  • Set Loading = false         │
│  • Set Success = true          │
│  • Show success message        │
│  • Reset form                  │
│  • Auto-hide after 3 sec       │
└────────────────────────────────┘
       │
       └─ Error ─►
       ▼
┌────────────────────────────────┐
│  • Set Loading = false         │
│  • Show error message          │
│  • Log to console (F12)        │
│  • User can retry              │
└────────────────────────────────┘
       │
       ▼
┌────────────────────────────┐
│  Email arrives in:         │
│  sreehariradhakrishnan200  │
│  @gmail.com inbox          │
└────────────────────────────┘
```

---

## File Structure with Purposes

```
question-submitter/
├── src/
│   ├── app/
│   │   ├── app.ts ........................ Main component logic
│   │   ├── app.html ..................... Form template & UI
│   │   ├── app.scss ..................... Component styles
│   │   ├── app.config.ts ................ Angular configuration
│   │   └── app.routes.ts ................ Routing setup
│   │
│   ├── environments/
│   │   ├── environment.ts ............... Dev config (YOUR CREDS HERE)
│   │   └── environment.production.ts .... Prod config (YOUR CREDS HERE)
│   │
│   ├── styles.scss ...................... Global styles (background, animations)
│   ├── main.ts .......................... Bootstrap application
│   └── index.html ....................... HTML entry point
│
├── README.md ............................ Full documentation
├── EMAILJS_SETUP.md ..................... EmailJS setup checklist
└── package.json ......................... Dependencies
```

---

## Technology Stack Explained

| Technology | Purpose | Why? |
|------------|---------|------|
| **Angular 21** | Framework | Modern, component-based architecture |
| **Material Design** | UI Components | Professional, polished look |
| **Reactive Forms** | Form Handling | Powerful validation & state management |
| **SCSS** | Styling | Advanced CSS with variables & nesting |
| **EmailJS** | Email Service | Free, easy email integration |
| **TypeScript** | Language | Type-safe JavaScript |
| **Signals** | State Management | Latest Angular feature for reactivity |

