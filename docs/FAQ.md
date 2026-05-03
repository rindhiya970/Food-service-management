# Frequently Asked Questions (FAQ)

## General Questions

### What is GeekFoods?
GeekFoods is a modern food discovery web application built with React that helps users explore restaurants, food items, and culinary quotes. It features a clean, intuitive interface with powerful search and filtering capabilities.

### What technologies are used?
- **ReactJS** 19.2.5 - UI library
- **React Router DOM** 6.x - Client-side routing
- **Vite** 8.0.10 - Build tool and dev server
- **CSS3** - Styling with custom properties

### Is this project open source?
Yes! This project is open source under the MIT License. We welcome contributions from the community. Check out our CONTRIBUTING.md file for guidelines on how to contribute.

### Can I use this for my own project?
Absolutely! Feel free to fork, modify, and use this project for your own purposes. Just make sure to follow the MIT License terms.

## Development Questions

### How do I run the project locally?
```bash
# Install dependencies first
npm install

# Start the development server
npm run dev
```
The app will be available at `http://localhost:5173` with hot module replacement enabled.

### How do I build for production?
```bash
npm run build
```
This creates an optimized production build in the `dist` folder with minified code, optimized assets, and code splitting for better performance.

### Can I contribute to this project?
Yes! Please read CONTRIBUTING.md for guidelines. We welcome all types of contributions including bug fixes, new features, documentation improvements, and design enhancements. Make sure to follow our code style and commit message conventions.

### What's the browser support?
Modern browsers (Chrome, Firefox, Safari, Edge) - latest 2 versions. The application uses modern JavaScript features and CSS properties, so older browsers like Internet Explorer are not supported. For the best experience, we recommend using the latest version of Chrome or Firefox.

## Feature Questions

### Does it have a backend?
Currently, the application uses static data arrays for demonstration purposes. Backend integration with REST APIs or GraphQL is planned for future versions. This allows for easy deployment as a static site while maintaining full functionality.

### Can I add my own restaurant data?
Yes, absolutely! You can modify the data arrays in the respective page files. For restaurants, edit the `restaurantsData` array in `src/pages/Restaurants.jsx`. For foods, edit the `foodsData` array in `src/pages/Foods.jsx`. Simply follow the existing data structure to add your own entries.

### Is there a mobile app?
Not yet, but the web app is fully responsive and works great on mobile browsers.

### Can I customize the theme?
Yes, modify the CSS custom properties in `src/index.css`.

## Deployment Questions

### Where can I deploy this?
Vercel, Netlify, GitHub Pages, Firebase Hosting, or any static hosting service.

### Do I need a server?
No, it's a static site that can be hosted on any CDN or static hosting.

### How do I set up custom domain?
Follow your hosting provider's documentation for custom domain setup.
