# Troubleshooting Guide

## Common Issues and Solutions

### Development Server Won't Start

**Problem:** `npm run dev` fails to start the development server or shows errors in console

**Solutions:**
1. Delete `node_modules` folder and `package-lock.json` file completely from project
2. Run `npm install` again to reinstall all dependencies fresh with latest versions
3. Check Node.js version (should be v14 or higher for compatibility and features)
4. Ensure port 5173 is not already in use by another application or service
5. Try running with `npm run dev -- --port 3000` to use a different port number

### Build Fails

**Problem:** `npm run build` produces errors or fails to complete successfully with warnings

**Solutions:**
1. Check for TypeScript/ESLint errors in the console output carefully
2. Run `npm run lint` to identify and fix linting issues automatically with fixes
3. Ensure all imports are correct and files exist in the project structure
4. Clear the `dist` folder and try building again from scratch for clean build
5. Check for circular dependencies between modules that cause issues
6. Verify all environment variables are set correctly in .env file with proper values

### Routing Not Working

**Problem:** Routes show 404 errors on page refresh in production environment

**Solutions:**
1. Configure server for SPA routing (Single Page Application support)
2. Add `_redirects` file for Netlify: `/* /index.html 200`
3. Configure `vercel.json` for Vercel with rewrites configuration
4. For Apache, add `.htaccess` with rewrite rules for routing
5. For Nginx, configure try_files directive to handle client-side routing

### Images Not Loading

**Problem:** Images don't display or show broken image icons in the browser

**Solutions:**
1. Check image URLs are valid and accessible from the internet
2. Verify CORS settings on image hosting service allow requests
3. Check network tab in browser DevTools for specific errors
4. Ensure images are properly imported in components with correct paths
5. Check if image URLs are blocked by ad blockers or extensions
6. Verify internet connection is stable and not blocking external resources

### Styles Not Applying

**Problem:** CSS not working or styles look broken and inconsistent

**Solutions:**
1. Check CSS import paths are correct in components with proper file extensions
2. Clear browser cache and hard reload (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify CSS file names match imports exactly (case-sensitive)
4. Check for CSS syntax errors in browser console developer tools
5. Ensure CSS files are in the correct directory structure
6. Check if CSS is being overridden by other styles with higher specificity

## Getting Help

- Check GitHub Issues for similar problems and existing solutions from community
- Review documentation in `/docs` folder for detailed guides and tutorials with examples
- Contact project maintainers through GitHub discussions or issues for direct help
- Join our community Discord server (link in repository README) for real-time support
- Stack Overflow with tag `geekfoods` for community support and expert answers
