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

**Purpose:** Two-column layout with image and text

**Props:** None

**Features:**
- Responsive grid layout
- Image with text content
- CTA button

## CardSection Component

**Location:** `src/components/CardSection.jsx`

**Purpose:** Display testimonial cards

**Props:** None

**Data:** Array of testimonials

**Features:**
- Responsive grid
- User avatars
- Quote display

## Footer Component

**Location:** `src/components/Footer.jsx`

**Purpose:** Footer with links and social media

**Props:** None

**Features:**
- Logo and description
- Navigation links
- Social media icons
- Dynamic copyright year
