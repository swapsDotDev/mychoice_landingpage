# MyChoice Homepage

A modern, responsive homepage for MyChoice - a free online self-exclusion platform for New Zealand. This React application provides information about Project X, which acts as a national register for individuals to willingly block online gambling sites and promotional content from all New Zealand licensed online gambling operators.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface built with React and Tailwind CSS
- **QR Code Integration**: Fast-track entry system with QR code scanning
- **Self-Exclusion Information**: Comprehensive information about the self-exclusion program
- **App Download Section**: Direct links to download the mobile application
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Icons** - Popular icon library
- **PostCSS & Autoprefixer** - CSS processing tools

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar component
│   ├── HeroSection.jsx         # Main hero section with QR code
│   ├── SelfExclusionSection.jsx # Information about self-exclusion
│   ├── FeaturesSection.jsx     # Features overview
│   ├── DownloadSection.jsx     # App download section
│   └── Footer.jsx              # Footer component
├── assets/                     # Images and static assets
├── App.js                      # Main application component
├── index.js                    # Application entry point
└── index.css                   # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mychoice-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes and display any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

Ejects the project from Create React App configuration for full customization control.

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`. Custom styles are defined in `src/index.css`.

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive navigation
- Flexible grid layouts
- Optimized images for different screen sizes
- Touch-friendly interactive elements

## 🚀 Deployment

The project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the `gh-pages` package for deployment
- **AWS S3**: Upload the build folder to an S3 bucket

To build for production:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support or questions about the MyChoice platform, please contact the development team.

---

Built with ❤️ for responsible gambling practices in New Zealand.
