# Troubleshooting Guide

## Common Issues and Solutions

### Development Server Won't Start

**Problem:** `npm run dev` fails

**Solutions:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Check Node.js version (should be v14+)

### Build Fails

**Problem:** `npm run build` produces errors

**Solutions:**
1. Check for TypeScript/ESLint errors
2. Run `npm run lint` to identify issues
3. Ensure all imports are correct

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
