# Question to Email Submitter - Angular Project

## Progress Tracker

### Step 1: Create Angular project structure
- [ ] Run `ng new question-submitter --routing --style=scss --skip-git --strict --package-manager=npm --analytics=false`
- cd into question-submitter

### Step 2: Add Angular Material for stunning UI
- [ ] Run `ng add @angular/material` (choose Indigo/Pink theme, setup animations & fonts)

### Step 3: Add EmailJS dependency
- [ ] Run `npm install @emailjs/browser`

### Step 4: Implement core feature
- [ ] Edit `src/app/app.component.html` - Stunning form UI
- [ ] Edit `src/app/app.component.ts` - Form logic & EmailJS send
- [ ] Edit `src/app/app.component.scss` - Custom styles/animations
- [ ] Edit `src/app/app.config.ts` - EmailJS provider
- [ ] Edit `src/environments/environment.ts` - Add placeholder keys (user to configure)

### Step 5: Global updates
- [ ] Update `src/styles.scss` for theme
- [ ] Update `angular.json` if needed for assets

### Step 6: Test & Deploy ready
- [ ] Run `ng serve`
- [ ] Git commit & push

**Notes:** 
- Sign up at emailjs.com for SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY.
- Replace placeholders in environment.ts.
