# Frequently Asked Questions (FAQ)

## General Questions

### What is GeekFoods?
GeekFoods is a modern food discovery web application built with React that helps users explore restaurants, food items, and culinary quotes. It features a clean, intuitive interface with powerful search and filtering capabilities for an enhanced user experience.

### What technologies are used?
- **ReactJS** 19.2.5 - Modern UI library for building interfaces
- **React Router DOM** 6.x - Client-side routing for navigation
- **Vite** 8.0.10 - Lightning-fast build tool and dev server
- **CSS3** - Advanced styling with custom properties and variables

### Is this project open source?
Yes! This project is open source under the MIT License. We welcome contributions from the community worldwide. Check out our CONTRIBUTING.md file for detailed guidelines on how to contribute effectively.

### Can I use this for my own project?
Absolutely! Feel free to fork, modify, and use this project for your own purposes. Just make sure to follow the MIT License terms and provide proper attribution to the original project.

## Development Questions

### How do I run the project locally?
```bash
# Install dependencies first (this may take a few minutes)
npm install

# Start the development server with hot reload
npm run dev
```
The app will be available at `http://localhost:5173` with hot module replacement enabled for instant updates.

### How do I build for production?
```bash
npm run build
```
This creates an optimized production build in the `dist` folder with minified code, optimized assets, and code splitting for better performance.

### Can I contribute to this project?
Yes! Please read CONTRIBUTING.md for detailed guidelines. We welcome all types of contributions including bug fixes, new features, documentation improvements, and design enhancements. Make sure to follow our code style guidelines and commit message conventions for consistency.

### What's the browser support?
Modern browsers (Chrome, Firefox, Safari, Edge) - latest 2 versions recommended. The application uses modern JavaScript features and CSS properties, so older browsers like Internet Explorer are not supported. For the best experience and optimal performance, we recommend using the latest version of Chrome or Firefox.

## Feature Questions

### Does it have a backend?
Currently, the application uses static data arrays for demonstration purposes. Backend integration with REST APIs or GraphQL is planned for future versions. This allows for easy deployment as a static site while maintaining full functionality and fast performance.

### Can I add my own restaurant data?
Yes, absolutely! You can modify the data arrays in the respective page files. For restaurants, edit the `restaurantsData` array in `src/pages/Restaurants.jsx`. For foods, edit the `foodsData` array in `src/pages/Foods.jsx`. Simply follow the existing data structure and format to add your own entries seamlessly.

### Is there a mobile app?
Not yet, but the web app is fully responsive and works great on mobile browsers with native-like experience. A React Native mobile app is planned for future versions. You can add the web app to your home screen for an app-like experience.

### Can I customize the theme?
Yes, modify the CSS custom properties in `src/index.css`. You can change colors, fonts, spacing, and more. The entire theme is built on CSS variables for easy customization. No need to search through multiple files!

## Deployment Questions

### Where can I deploy this?
Vercel, Netlify, GitHub Pages, Firebase Hosting, or any static hosting service. All of these platforms offer free tiers perfect for this project. Deployment typically takes less than 5 minutes.

### Do I need a server?
No, it's a static site that can be hosted on any CDN or static hosting platform. No backend server, database, or server-side processing required. This makes it fast, secure, and easy to deploy.

### How do I set up custom domain?
Follow your hosting provider's documentation for custom domain setup. Most providers offer easy DNS configuration through their dashboard. Typically involves updating your domain's nameservers or adding CNAME records.
