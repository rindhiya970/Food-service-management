# Components Documentation

## Overview
This document provides detailed information about all reusable components in the GeekFoods application. Each component is designed to be modular, reusable, and maintainable.

## Navbar Component

**Location:** `src/components/Navbar.jsx`

**Purpose:** Main navigation bar with logo and menu items for site-wide navigation

**Props:** None (stateless component with internal state)

**State:**
- `isMobileMenuOpen`: Boolean for mobile menu toggle state

**Features:**
- Responsive design with mobile and desktop layouts
- Mobile hamburger menu with smooth transitions
- Active link highlighting using React Router NavLink
- Sticky positioning for better navigation experience
- Smooth animations on menu toggle

## Hero Component

**Location:** `src/components/Hero.jsx`

**Purpose:** Hero section with background image and CTA buttons for landing page impact

**Props:** None (presentational component)

**Features:**
- Full-height background image with overlay
- Overlay for text readability and contrast
- Call-to-action buttons with hover effects
- Responsive text sizing for different screens

## ContentSection Component

**Location:** `src/components/ContentSection.jsx`

**Purpose:** Two-column layout with image and text for content presentation

**Props:** None (static content component)

**Features:**
- Responsive grid layout that adapts to screen size
- Image with text content side by side
- CTA button with hover effects
- Mobile-friendly stacked layout on small screens

## CardSection Component

**Location:** `src/components/CardSection.jsx`

**Purpose:** Display testimonial cards in an engaging grid layout

**Props:** None (uses internal data array)

**Data:** Array of testimonials with user information

**Features:**
- Responsive grid layout that adapts to different screen sizes
- User avatars with rounded styling
- Quote display with proper formatting
- Hover effects for better interactivity

## Footer Component

**Location:** `src/components/Footer.jsx`

**Purpose:** Footer with links and social media

**Props:** None

**Features:**
- Logo and description
- Navigation links
- Social media icons
- Dynamic copyright year
