# GeekFoods - ReactJS Web Application

A modern, responsive web application built with ReactJS that showcases a food discovery platform. This project demonstrates the implementation of reusable React components following best practices.

## 🚀 Project Overview

This project creates a dynamic web page using ReactJS, divided into three crucial components:
- **Header Component (Navbar)**: Navigation and branding
- **Body Section Component**: Hero section and testimonial cards
- **Footer Component**: Links, and copyright information

## 🛠️ Technology Stack

- **ReactJS** - UI library for building user interfaces
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
│   │   ├── Navbar.jsx          # Header component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── CardSection.jsx      # Testimonial cards
│   │   └── Footer.jsx           # Footer component
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── CardSection.css
│   │   └── Footer.css
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Features

### Header Component (Navbar)
- Responsive navigation menu
- Logo and branding
- Mobile-friendly hamburger menu
- Sticky positioning for better UX
- Call-to-action button

### Body Section Component
- **Hero Section**: Eye-catching hero with background image and CTAs
- **Card Section**: Grid layout displaying testimonials with:
  - User quotes
  - Avatar images
  - User information (name and role)
  - Responsive grid layout

### Footer Component
- Company logo and description
- Navigation links
- Social media icons (Twitter, Instagram, Facebook)
- Copyright information with dynamic year
- Hover effects and transitions

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
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and efficient rendering

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Component Details

### Navbar Component
- Sticky header that stays at the top while scrolling
- Responsive mobile menu with toggle functionality
- Active link highlighting

### Hero Component
- Full-height hero section with background image
- Overlay for better text readability
- Call-to-action buttons

### CardSection Component
- Dynamic testimonial cards rendered from data array
- Responsive grid layout (auto-fit)
- Card hover effects

### Footer Component
- Organized footer with multiple sections
- Social media integration
- Dynamic copyright year

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

## 📦 Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment to any static hosting service.

## 👨‍💻 Best Practices Implemented

- Component-based architecture
- Separation of concerns (components and styles)
- Reusable components
- Clean and maintainable code
- Semantic HTML
- Responsive design patterns
- Modern ES6+ JavaScript

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using ReactJS and Vite
