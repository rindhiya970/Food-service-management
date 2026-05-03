# Troubleshooting Guide

## Common Issues and Solutions

### Development Server Won't Start

**Problem:** `npm run dev` fails to start the development server

**Solutions:**
1. Delete `node_modules` folder and `package-lock.json` file
2. Run `npm install` again to reinstall dependencies
3. Check Node.js version (should be v14 or higher)
4. Ensure port 5173 is not already in use
5. Try running with `npm run dev -- --port 3000` to use a different port

### Build Fails

**Problem:** `npm run build` produces errors or fails to complete

**Solutions:**
1. Check for TypeScript/ESLint errors in the console
2. Run `npm run lint` to identify and fix linting issues
3. Ensure all imports are correct and files exist
4. Clear the `dist` folder and try building again
5. Check for circular dependencies
6. Verify all environment variables are set correctly

### Routing Not Working

**Problem:** Routes show 404 on refresh in production

**Solutions:**
1. Configure server for SPA routing (Single Page Application)
2. Add `_redirects` file for Netlify: `/* /index.html 200`
3. Configure `vercel.json` for Vercel with rewrites
4. For Apache, add `.htaccess` with rewrite rules
5. For Nginx, configure try_files directive

### Images Not Loading

**Problem:** Images don't display or show broken image icons

**Solutions:**
1. Check image URLs are valid and accessible
2. Verify CORS settings on image hosting service
3. Check network tab in browser DevTools for errors
4. Ensure images are properly imported in components
5. Check if image URLs are blocked by ad blockers
6. Verify internet connection is stable

### Styles Not Applying

**Problem:** CSS not working or styles look broken

**Solutions:**
1. Check CSS import paths are correct in components
2. Clear browser cache and hard reload (Ctrl+Shift+R)
3. Verify CSS file names match imports exactly
4. Check for CSS syntax errors in browser console
5. Ensure CSS files are in the correct directory
6. Check if CSS is being overridden by other styles

## Getting Help

- Check GitHub Issues
- Review documentation in `/docs`
- Contact project maintainers
