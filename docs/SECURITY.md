# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please email security@geekfoods.com instead of using the public issue tracker to ensure responsible disclosure.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Best Practices

### For Contributors

1. Never commit sensitive data (API keys, passwords)
2. Use environment variables for configuration
3. Keep dependencies updated
4. Follow secure coding practices
5. Validate all user inputs

### For Users

1. Keep your deployment updated
2. Use HTTPS for production
3. Implement proper CORS policies
4. Regular security audits
5. Monitor for vulnerabilities

## Security Features

- Input validation on forms
- XSS protection (React default)
- CSRF protection (to be implemented)
- Secure headers (configure on deployment)

## Dependency Security

Run security audits regularly:
```bash
npm audit
npm audit fix
```

## Updates

Security updates will be released as soon as possible after discovery.
