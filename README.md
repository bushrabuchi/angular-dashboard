# Angular Customizable Dashboard

A modern, fully-featured dashboard application built with Angular 17+ and Angular Material. This project includes drag-and-drop widgets, dark mode, authentication, analytics, and customizable layouts.

## Features

- 🎨 **Modern UI** - Built with Angular Material Design
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📊 **Interactive Charts** - Beautiful charts using Chart.js
- 🔐 **Authentication** - Login system with route guards
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **Drag & Drop** - Rearrangeable dashboard widgets
- 📈 **Analytics Dashboard** - Comprehensive analytics page
- ⚙️ **Settings Page** - Customizable user preferences
- 💾 **Local Storage** - Persists user settings and layout

## Tech Stack

- **Angular 17+** - Modern web framework
- **Angular Material** - UI component library
- **Chart.js** - Data visualization
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## Default Login Credentials

- **Username:** admin (or any username)
- **Password:** any (any password works for demo)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/          # Main dashboard page
│   │   ├── analytics/          # Analytics page
│   │   ├── settings/           # Settings page
│   │   ├── login/              # Login page
│   │   ├── header/             # Top navigation bar
│   │   ├── sidebar/            # Side navigation menu
│   │   ├── widget/             # Widget wrapper component
│   │   └── widgets/            # Individual widget types
│   │       ├── chart-widget/   # Chart display widget
│   │       ├── stats-widget/   # Statistics card widget
│   │       └── table-widget/   # Data table widget
│   ├── services/
│   │   ├── auth.service.ts     # Authentication service
│   │   ├── theme.service.ts    # Theme management
│   │   └── dashboard.service.ts # Dashboard data service
│   ├── guards/
│   │   └── auth.guard.ts       # Route protection
│   └── models/
│       ├── user.model.ts       # User interface
│       └── widget.model.ts     # Widget interfaces
├── assets/                     # Static assets
└── styles.scss                 # Global styles
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## Features in Detail

### Dashboard
- Customizable widget layout
- Drag and drop to rearrange widgets
- Multiple widget types (charts, stats, tables)
- Reset layout option
- Persistent layout storage

### Analytics
- Key performance metrics
- Revenue trends
- Quarterly sales charts
- User growth statistics

### Settings
- Dark/Light theme toggle
- Notification preferences
- Language selection
- Timezone configuration
- Auto-save options

### Authentication
- Login/Logout functionality
- Protected routes
- User session management
- Profile information display

## Customization

### Adding New Widgets

1. Create a new widget component:
   ```bash
   ng generate component components/widgets/my-widget
   ```

2. Add widget to dashboard service:
   ```typescript
   // dashboard.service.ts
   {
     id: 'widget-new',
     title: 'My New Widget',
     type: 'custom',
     position: { x: 0, y: 0 },
     size: { width: 1, height: 1 },
     data: {}
   }
   ```

3. Update dashboard template to render your widget

### Changing Theme Colors

Edit `src/styles.scss` to customize the Material theme:
```scss
@import '@angular/material/prebuilt-themes/indigo-pink.css';
// Change to other themes: deeppurple-amber, pink-bluegrey, purple-green
```

### Adding New Routes

1. Add route to `app-routing.module.ts`
2. Create component for the route
3. Add navigation link to sidebar component

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to Firebase
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please create an issue in the repository.

## Acknowledgments

- Angular Team for the amazing framework
- Material Design Team for the UI components
- Chart.js for the charting library

---

**Built with ❤️ using Angular**
