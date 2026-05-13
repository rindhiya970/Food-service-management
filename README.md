# GeekFoods - ReactJS Web Application

> A modern, fully responsive food discovery platform built with React

A modern, fully responsive web application built with ReactJS that showcases a comprehensive food discovery platform. This project demonstrates the implementation of reusable React components, routing, and interactive features following industry best practices.

[![React](https://img.shields.io/badge/React-19.2.5-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

##  Project Overview

This project creates a dynamic multi-page web application using ReactJS, divided into crucial components that work together seamlessly:
- **Header Component (Navbar)**: Navigation and branding with active link highlighting and mobile menu
- **Body Section Components**: Multiple pages with unique content and interactive functionality
- **Footer Component**: Links, social media integration, and copyright information


## Technology Stack

- **ReactJS** - Modern UI library for building interactive and dynamic user interfaces
- **React Router DOM** - Client-side routing for seamless navigation without page reloads
- **Vite** - Next-generation build tool and lightning-fast development server with HMR
- **CSS3** - Advanced styling with custom properties and responsive design techniques
- **JSX** - JavaScript XML syntax for intuitive component structure and readability

## Project Structure

```
geek-food/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header component with navigation
│   │   ├── Hero.jsx             # Hero section
│   │   ├── ContentSection.jsx   # Content with image and text
│   │   ├── CardSection.jsx      # Testimonial cards
│   │   └── Footer.jsx           # Footer component
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Quote.jsx            # Food quotes page
│   │   ├── Restaurants.jsx      # Restaurant listing with search
│   │   ├── Foods.jsx            # Food menu with images
│   │   └── Contact.jsx          # Contact form and info
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── ContentSection.css
│   │   ├── CardSection.css
│   │   ├── Footer.css
│   │   ├── Quote.css
│   │   ├── Restaurants.css
│   │   ├── Foods.css
│   │   └── Contact.css
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```



##  Getting Started

### Prerequisites
- Node.js (v14 or higher recommended for optimal performance and compatibility)
- npm (comes bundled with Node.js) or yarn package manager for dependency management

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd geek-food
```

2. Install dependencies (this may take a few minutes on first run):
```bash
npm install
```

3. Start the development server with hot reload:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the app running with live updates




## 🔧 Customization

### Colors
Edit CSS custom properties in `src/index.css` to change the theme:
```css
:root {
  --primary-color: #e11d48;     /* Main brand color */
  --primary-hover: #be123c;     /* Hover state color */
  --text-main: #111827;         /* Primary text color */
  --text-muted: #4b5563;        /* Secondary text color */
  --bg-color: #ffffff;          /* Background color */
  --bg-light: #f9fafb;          /* Light background */
}
```

### Content
- Update testimonials in `src/components/CardSection.jsx` - Modify the testimonials array with new reviews
- Modify hero text in `src/components/Hero.jsx` - Change heading and description text
- Change navigation links in `src/components/Navbar.jsx` - Update menu items and routes
- Add/edit restaurants in `src/pages/Restaurants.jsx` - Modify restaurantsData array with new entries
- Add/edit food items in `src/pages/Foods.jsx` - Modify foodsData array with new dishes
- Update quotes in `src/pages/Quote.jsx` - Modify quotes array with new inspirational content

## 📦 Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment to any static hosting service with CDN support like:
- **Vercel** - Zero configuration deployment with automatic SSL
- **Netlify** - Continuous deployment from Git with instant rollbacks
- **GitHub Pages** - Free hosting for static sites with custom domains
- **AWS S3** - Scalable cloud storage with CDN integration
- **Firebase Hosting** - Fast and secure web hosting with global CDN

 

## 📄 License

This project is created for educational purposes and is open source under the MIT License. Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page and submit pull requests. Please read our CONTRIBUTING.md file for guidelines on how to contribute effectively to this project.

## 📧 Contact

For any queries, please reach out through the contact form on the website or open an issue on GitHub.

**Project Maintainer**: GeekFoods Development Team

---

Built with ❤️ using ReactJS, React Router, and Vite

⭐ Star this repo if you find it helpful and want to support the project!
