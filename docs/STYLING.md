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

- Use kebab-case for class names
- Component-specific prefixes (e.g., `.navbar-`, `.hero-`)
- Descriptive names (`.btn-get-started`, `.food-card`)

## Layout Techniques

- CSS Grid for card layouts
- Flexbox for navigation and alignment
- CSS Custom Properties for theming

## Best Practices

- Mobile-first approach
- Avoid inline styles
- Use transitions for smooth animations
- Maintain consistent spacing
- Keep specificity low
