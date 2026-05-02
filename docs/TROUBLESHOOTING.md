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

**Problem:** Routes show 404 on refresh

**Solutions:**
1. Configure server for SPA routing
2. Add `_redirects` file for Netlify
3. Configure `vercel.json` for Vercel

### Images Not Loading

**Problem:** Images don't display

**Solutions:**
1. Check image URLs are valid
2. Verify CORS settings
3. Check network tab for errors

### Styles Not Applying

**Problem:** CSS not working

**Solutions:**
1. Check CSS import paths
2. Clear browser cache
3. Verify CSS file names match imports

## Getting Help

- Check GitHub Issues
- Review documentation in `/docs`
- Contact project maintainers
