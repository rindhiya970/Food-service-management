# Accessibility Guide

## Current Accessibility Features

1. **Semantic HTML**
   - Proper heading hierarchy
   - Semantic elements (nav, main, footer, section)
   - Form labels

2. **ARIA Labels**
   - Social media icons have aria-label
   - Form inputs have proper labels

3. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Focus states visible

4. **Color Contrast**
   - Text meets WCAG AA standards
   - Sufficient contrast ratios

## Accessibility Checklist

### Navigation
- [x] Keyboard accessible
- [x] Screen reader friendly
- [x] Skip to main content link (to be added)

### Forms
- [x] Labels for all inputs
- [x] Error messages
- [ ] ARIA live regions for dynamic content

### Images
- [x] Alt text for images
- [ ] Decorative images marked appropriately

### Color
- [x] Not relying solely on color
- [x] Sufficient contrast

## Future Improvements

1. Add skip navigation link
2. Implement ARIA live regions
3. Add focus trap for mobile menu
4. Test with screen readers
5. Add keyboard shortcuts documentation

## Testing Tools

- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit
- Screen readers (NVDA, JAWS, VoiceOver)

## WCAG Compliance Goal

Target: WCAG 2.1 Level AA compliance
