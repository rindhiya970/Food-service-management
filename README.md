# GeekFoods - ReactJS Web Application

> A modern, fully responsive food discovery platform built with React

A modern, fully responsive web application built with ReactJS that showcases a food discovery platform. This project demonstrates the implementation of reusable React components, routing, and interactive features following best practices.

[![React](https://img.shields.io/badge/React-19.2.5-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Project Overview

This project creates a dynamic multi-page web application using ReactJS, divided into crucial components that work together seamlessly:
- **Header Component (Navbar)**: Navigation and branding with active link highlighting and mobile menu
- **Body Section Components**: Multiple pages with unique content and interactive functionality
- **Footer Component**: Links, social media integration, and copyright information

### Live Demo
Coming soon...

## 🛠️ Technology Stack

- **ReactJS** - UI library for building user interfaces
- **React Router DOM** - Client-side routing for navigation
- **Vite** - Modern build tool and development server
- **CSS3** - Styling with custom properties and responsive design
- **JSX** - JavaScript XML for component structure

## 📁 Project Structure

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

## 🎯 Key Features

### Header Component (Navbar)
- Responsive navigation menu with React Router integration
- Blue play button logo with brand identity
- Active link highlighting for better UX
- Mobile-friendly hamburger menu with smooth transitions
- Sticky positioning for better navigation experience
- "Get started" call-to-action button

### Home Page
- **Hero Section**: Eye-catching hero with background image and CTAs
- **Content Section**: Two-column layout with image and text content
- **Testimonial Cards**: Grid layout displaying user testimonials with avatars

### Quote Page
- Collection of 12+ inspirational food quotes from renowned chefs and food enthusiasts
- Clean card-based layout with elegant typography
- Author attribution with proper styling
- Hover effects on cards for better interactivity

### Restaurants Page
- **Search Functionality**: Real-time search across restaurant names, addresses, and cuisines
- **Rating Filter**: Filter restaurants by minimum star rating (0-5 stars)
- **Restaurant Cards**: Display name, rating, address, cuisine type with icons
- **Pagination**: Navigate through multiple pages of results (9 per page)
- **Responsive Grid**: Adapts to different screen sizes seamlessly

### Foods Page
- **Visual Gallery**: 18+ food items with high-quality images from Unsplash
- **Category Filtering**: Filter by cuisine type (Italian, American, Japanese, Thai, Mexican, and more)
- **Search Functionality**: Search across food names and descriptions in real-time
- **Food Cards**: Image, name, price, description, and order button with hover effects
- **Hover Effects**: Interactive animations on cards for better user engagement

### Contact Page
- **Contact Form**: Name, email, phone, subject, and message fields with validation
- **Contact Information Cards**: Address, phone, email, working hours displayed in cards
- **Google Maps Integration**: Embedded map showing location with interactive features
- **Form Validation**: Required field validation with user-friendly error messages
- **Responsive Layout**: Two-column layout on desktop, stacked on mobile devices

### Footer Component
- Teal logo with "logoipsum" branding
- Navigation links to all major sections
- 5 social media icons (Facebook, Instagram, Twitter, GitHub, Dribbble) with hover effects
- Copyright information with dynamic year calculation
- Hover effects and smooth transitions for better UX

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js) or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd geek-food
```

2. Install dependencies (this may take a few minutes):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the app running

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (output in dist folder)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **CSS Custom Properties**: Consistent theming with CSS variables for easy customization
- **Modern UI**: Clean, professional design with smooth transitions and animations
- **Interactive Elements**: Hover effects, active states, and micro-interactions
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Performance**: Optimized images and efficient rendering for fast load times

## 🌐 Pages & Routes

- `/` - Home page with Hero, Content Section, and Testimonials
- `/quote` - Food quotes page with inspirational quotes
- `/restaurants` - Restaurant listing with search and filters
- `/foods` - Food menu with images and categories
- `/contact` - Contact form and information with map integration

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
- Update testimonials in `src/components/CardSection.jsx` - Modify the testimonials array
- Modify hero text in `src/components/Hero.jsx` - Change heading and description
- Change navigation links in `src/components/Navbar.jsx` - Update menu items
- Add/edit restaurants in `src/pages/Restaurants.jsx` - Modify restaurantsData array
- Add/edit food items in `src/pages/Foods.jsx` - Modify foodsData array
- Update quotes in `src/pages/Quote.jsx` - Modify quotes array

## 📦 Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment to any static hosting service like:
- **Vercel** - Zero configuration deployment
- **Netlify** - Continuous deployment from Git
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud storage
- **Firebase Hosting** - Fast and secure web hosting

## 👨‍💻 Best Practices Implemented

- Component-based architecture for better code organization
- Separation of concerns (components, pages, and styles in separate folders)
- Reusable components for maintainability
- Clean and maintainable code with proper naming conventions
- Semantic HTML for better accessibility
- Responsive design patterns following mobile-first approach
- Modern ES6+ JavaScript with arrow functions and destructuring
- React Hooks (useState, useEffect)
- Client-side routing with React Router
- Form handling and validation
- Search and filter functionality
- Pagination implementation

## 🌟 Features Highlights

### Interactive Search & Filters
- Real-time search across multiple data points without page reload
- Category-based filtering with instant results
- Rating-based filtering for quality assurance
- Instant results without page reload for better UX

### Responsive Design
- Mobile-first approach for optimal mobile experience
- Breakpoints for tablets and desktops for all screen sizes
- Touch-friendly interface with proper tap targets
- Optimized for all screen sizes from 320px to 4K displays

### User Experience
- Smooth animations and transitions for polished feel
- Hover effects for better interactivity and feedback
- Loading states and feedback for user actions
- Clear call-to-action buttons with proper contrast
- Intuitive navigation with breadcrumbs and active states

## 📄 License

This project is created for educational purposes and is open source under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page and submit pull requests.

## 📧 Contact

For any queries, please reach out through the contact form on the website.

**Project Maintainer**: GeekFoods Team

---

Built with ❤️ using ReactJS, React Router, and Vite

⭐ Star this repo if you find it helpful!
