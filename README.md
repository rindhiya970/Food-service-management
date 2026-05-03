# GeekFoods - ReactJS Web Application

> A modern, fully responsive food discovery platform built with React

A modern, fully responsive web application built with ReactJS that showcases a food discovery platform. This project demonstrates the implementation of reusable React components, routing, and interactive features following best practices.

[![React](https://img.shields.io/badge/React-19.2.5-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Project Overview

This project creates a dynamic multi-page web application using ReactJS, divided into crucial components:
- **Header Component (Navbar)**: Navigation and branding with active link highlighting
- **Body Section Components**: Multiple pages with unique content and functionality
- **Footer Component**: Links, social media, and copyright information

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
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd geek-food
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Modern UI**: Clean, professional design with smooth transitions
- **Interactive Elements**: Hover effects, active states, and animations
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and efficient rendering

## 🌐 Pages & Routes

- `/` - Home page with Hero, Content Section, and Testimonials
- `/quote` - Food quotes page
- `/restaurants` - Restaurant listing with search and filters
- `/foods` - Food menu with images and categories
- `/contact` - Contact form and information

## 🔧 Customization

### Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --primary-color: #e11d48;
  --primary-hover: #be123c;
  --text-main: #111827;
  --text-muted: #4b5563;
  --bg-color: #ffffff;
  --bg-light: #f9fafb;
}
```

### Content
- Update testimonials in `src/components/CardSection.jsx`
- Modify hero text in `src/components/Hero.jsx`
- Change navigation links in `src/components/Navbar.jsx`
- Add/edit restaurants in `src/pages/Restaurants.jsx`
- Add/edit food items in `src/pages/Foods.jsx`
- Update quotes in `src/pages/Quote.jsx`

## 📦 Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 👨‍💻 Best Practices Implemented

- Component-based architecture
- Separation of concerns (components, pages, and styles)
- Reusable components
- Clean and maintainable code
- Semantic HTML
- Responsive design patterns
- Modern ES6+ JavaScript
- React Hooks (useState, useEffect)
- Client-side routing with React Router
- Form handling and validation
- Search and filter functionality
- Pagination implementation

## 🌟 Features Highlights

### Interactive Search & Filters
- Real-time search across multiple data points
- Category-based filtering
- Rating-based filtering
- Instant results without page reload

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly interface
- Optimized for all screen sizes

### User Experience
- Smooth animations and transitions
- Hover effects for better interactivity
- Loading states and feedback
- Clear call-to-action buttons
- Intuitive navigation

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any queries, please reach out through the contact form on the website.

**Project Maintainer**: GeekFoods Team

---

Built with ❤️ using ReactJS, React Router, and Vite

⭐ Star this repo if you find it helpful!
