# Project Architecture

## Overview

GeekFoods is built using a modern component-based architecture with React and React Router for optimal performance.

## Directory Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (routes)
├── styles/         # CSS files for styling
├── App.jsx         # Main app with routing
└── main.jsx        # Entry point
```

## Component Hierarchy

```
App
├── Navbar (on all pages)
├── Routes
│   ├── Home
│   │   ├── Hero
│   │   ├── ContentSection
│   │   └── CardSection
│   ├── Quote
│   ├── Restaurants
│   ├── Foods
│   └── Contact
└── Footer (on all pages)
```

## State Management

- Local component state using `useState` hook for efficient state management
- No global state management (Redux/Context) needed for current scope and simplicity

## Routing

- React Router DOM v6
- Client-side routing
- NavLink for active link highlighting

## Styling Approach

- CSS Modules approach (separate CSS files)
- CSS Custom Properties for theming
- Mobile-first responsive design
