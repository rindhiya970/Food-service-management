# Styling Guide

## CSS Architecture

Each component and page has its own dedicated CSS file for better organization, maintainability, and modularity.

## CSS Custom Properties

Defined in `src/index.css`:

```css
--primary-color: #e11d48
--primary-hover: #be123c
--text-main: #111827
--text-muted: #4b5563
--bg-color: #ffffff
--bg-light: #f9fafb
```

## Responsive Breakpoints

- Mobile: < 768px (smartphones and small devices)
- Tablet: 768px - 1024px (tablets and medium devices)
- Desktop: > 1024px (laptops and large screens)

## Naming Conventions

- Use kebab-case for all class names (e.g., `.my-class`)
- Component-specific prefixes for clarity (e.g., `.navbar-`, `.hero-`)
- Descriptive names that explain purpose (`.btn-get-started`, `.food-card`)
- Avoid generic names like `.box` or `.item`

## Layout Techniques

- CSS Grid for card layouts and complex grid systems
- Flexbox for navigation, alignment, and one-dimensional layouts
- CSS Custom Properties for consistent theming across components
- Media queries for responsive design adaptations

## Best Practices

- Mobile-first approach for progressive enhancement
- Avoid inline styles to maintain separation of concerns
- Use transitions for smooth animations and better UX
- Maintain consistent spacing using CSS variables
- Keep specificity low to avoid cascade issues
- Use semantic class names that describe purpose
