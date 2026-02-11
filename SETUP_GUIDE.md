# Setup Guide - Angular Customizable Dashboard

## Quick Start

### 1. Prerequisites Check

Ensure you have the following installed:

```bash
# Check Node.js version (need v18+)
node --version

# Check npm version (need v9+)
npm --version

# Install Angular CLI globally if not installed
npm install -g @angular/cli
```

### 2. Installation Steps

```bash
# Navigate to project directory
cd angular-dashboard

# Install all dependencies
npm install

# Start development server
npm start

# Or use Angular CLI directly
ng serve
```

### 3. Access the Application

Open your browser and navigate to:
```
http://localhost:4200
```

**Login Credentials (Demo):**
- Username: `admin` (or any text)
- Password: `any` (or any text)

## Detailed Setup

### Installing Dependencies

The project uses these main dependencies:

1. **Angular Core Packages** (v17+)
   - @angular/core
   - @angular/common
   - @angular/router
   - @angular/forms

2. **Angular Material** (v17+)
   - Complete Material Design component library
   - Includes CDK for drag-and-drop

3. **Chart.js & ng2-charts**
   - For data visualization
   - Interactive charts and graphs

4. **RxJS**
   - Reactive programming
   - State management

### Project Configuration

#### TypeScript Configuration
The project uses strict TypeScript settings for better code quality:
- Strict type checking
- No implicit any
- Strict null checks

#### Angular Configuration
- Standalone components: No
- Style preprocessor: SCSS
- Routing: Yes
- Angular Material: Yes

### Directory Structure Explained

```
angular-dashboard/
├── src/
│   ├── app/                    # Application code
│   │   ├── components/         # UI components
│   │   │   ├── dashboard/      # Main dashboard with widgets
│   │   │   ├── analytics/      # Analytics & reports page
│   │   │   ├── settings/       # User settings page
│   │   │   ├── login/          # Authentication page
│   │   │   ├── header/         # Top navigation bar
│   │   │   ├── sidebar/        # Side navigation menu
│   │   │   └── widgets/        # Reusable widget components
│   │   │       ├── chart-widget/    # Chart display
│   │   │       ├── stats-widget/    # Statistics cards
│   │   │       └── table-widget/    # Data tables
│   │   ├── services/           # Business logic
│   │   │   ├── auth.service.ts      # Authentication
│   │   │   ├── theme.service.ts     # Theme switching
│   │   │   └── dashboard.service.ts # Dashboard data
│   │   ├── guards/             # Route protection
│   │   │   └── auth.guard.ts        # Login required guard
│   │   ├── models/             # TypeScript interfaces
│   │   │   ├── user.model.ts        # User data structure
│   │   │   └── widget.model.ts      # Widget data structure
│   │   ├── app.module.ts       # Main application module
│   │   ├── app-routing.module.ts    # Route definitions
│   │   └── app.component.*     # Root component
│   ├── assets/                 # Static files (images, etc.)
│   ├── environments/           # Environment configs
│   ├── styles.scss            # Global styles
│   └── index.html             # HTML entry point
├── angular.json               # Angular CLI configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## Development Workflow

### Running Development Server

```bash
# Start dev server (default port 4200)
npm start

# Start on custom port
ng serve --port 4300

# Open browser automatically
ng serve --open
```

### Building for Production

```bash
# Production build
npm run build

# Output will be in dist/ folder
# Build with specific configuration
ng build --configuration production
```

### Running Tests

```bash
# Run unit tests
npm test

# Run tests with code coverage
ng test --code-coverage

# Run tests in headless mode
ng test --watch=false --browsers=ChromeHeadless
```

## Common Issues & Solutions

### Issue: Port 4200 already in use
**Solution:**
```bash
# Use different port
ng serve --port 4300
```

### Issue: Module not found errors
**Solution:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Chart.js warnings
**Solution:**
Chart.js warnings are normal and can be ignored. They don't affect functionality.

### Issue: Material theme not loading
**Solution:**
Ensure `@angular/material/prebuilt-themes/indigo-pink.css` is imported in `styles.scss`

## Customization Guide

### Change Theme Colors

1. **Option 1: Use Different Prebuilt Theme**
   Edit `src/styles.scss`:
   ```scss
   // Choose one:
   @import '@angular/material/prebuilt-themes/deeppurple-amber.css';
   @import '@angular/material/prebuilt-themes/pink-bluegrey.css';
   @import '@angular/material/prebuilt-themes/purple-green.css';
   ```

2. **Option 2: Create Custom Theme**
   Create a custom Material theme with your brand colors

### Add New Widget Type

1. Generate new component:
   ```bash
   ng generate component components/widgets/my-widget
   ```

2. Add to dashboard service (`dashboard.service.ts`)
3. Update dashboard component template

### Add New Page

1. Generate component:
   ```bash
   ng generate component components/my-page
   ```

2. Add route in `app-routing.module.ts`:
   ```typescript
   { path: 'my-page', component: MyPageComponent, canActivate: [AuthGuard] }
   ```

3. Add to sidebar navigation

## Deployment Options

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to link project
```

### Deploy to Netlify

```bash
# Build project
npm run build

# Drag and drop dist/angular-dashboard folder to Netlify
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist/angular-dashboard
```

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### Deploy to GitHub Pages

```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build for GitHub Pages
ng build --base-href "https://yourusername.github.io/repository-name/"

# Deploy
npx angular-cli-ghpages --dir=dist/angular-dashboard
```

## Performance Optimization

### Production Build Optimization

The project is configured with:
- Ahead-of-Time (AOT) compilation
- Tree shaking
- Minification
- Code splitting
- Lazy loading ready

### Tips for Better Performance

1. **Enable Lazy Loading** for large feature modules
2. **Use OnPush Change Detection** for components
3. **Implement Virtual Scrolling** for large lists
4. **Optimize Images** in assets folder
5. **Use TrackBy** in ngFor loops

## Troubleshooting

### Clear Angular Cache

```bash
rm -rf .angular/cache
ng serve
```

### Reset Project

```bash
# Remove all generated files
rm -rf node_modules dist .angular

# Reinstall
npm install
```

### Update Dependencies

```bash
# Update Angular CLI
npm install -g @angular/cli@latest

# Update project dependencies
ng update @angular/core @angular/cli
ng update @angular/material
```

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material Documentation](https://material.angular.io/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## Support

If you encounter any issues:
1. Check this guide first
2. Look for similar issues in the Angular community
3. Create a detailed issue report with error messages and steps to reproduce

---

Happy Coding! 🚀
