# Quick Start - Angular Dashboard

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: Open Browser
```
http://localhost:4200
```

**Login:** Use any username and password (e.g., `admin` / `password`)

---

## What You Get

✅ **Dashboard Page** - Customizable widgets with drag-and-drop  
✅ **Analytics Page** - Charts and key metrics  
✅ **Settings Page** - Theme toggle and preferences  
✅ **Dark Mode** - Switch between light and dark themes  
✅ **Responsive Design** - Works on all devices  

---

## Project Features

- **Drag & Drop Widgets** - Rearrange your dashboard layout
- **Multiple Widget Types** - Charts, statistics cards, and data tables
- **Dark/Light Theme** - Toggle in the header or settings
- **Persistent Storage** - Your layout and preferences are saved
- **Authentication** - Login/logout with route protection
- **Material Design** - Beautiful, modern UI components

---

## Common Commands

```bash
# Development
npm start              # Start dev server
npm run build         # Build for production
npm test              # Run tests

# Angular CLI
ng serve              # Start dev server
ng build              # Build project
ng generate component # Create new component
```

---

## File Structure Overview

```
src/app/
├── components/          # All UI components
│   ├── dashboard/       # Main dashboard (widgets)
│   ├── analytics/       # Analytics page
│   ├── settings/        # Settings page
│   ├── login/           # Login page
│   ├── header/          # Top navigation
│   └── sidebar/         # Side navigation
├── services/            # Business logic
├── guards/              # Route protection
└── models/              # Data structures
```

---

## Customization Quick Tips

### Change Primary Color
Edit `src/styles.scss` to use a different Material theme

### Add New Page
```bash
ng generate component components/my-page
```
Then add route in `app-routing.module.ts`

### Add New Widget
```bash
ng generate component components/widgets/my-widget
```
Then add to `dashboard.service.ts`

---

## Need Help?

- 📖 Read the full **README.md**
- 🔧 Check **SETUP_GUIDE.md** for detailed instructions
- 🌐 Visit [Angular Documentation](https://angular.io/docs)

---

**Built with Angular + Material Design**
