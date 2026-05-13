# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please email security@geekfoods.com instead of using the public issue tracker to ensure responsible disclosure.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Best Practices

### For Contributors

1. Never commit sensitive data (API keys, passwords, tokens) to version control
2. Use environment variables for all configuration settings and secrets
3. Keep dependencies updated to latest secure versions regularly
4. Follow secure coding practices and OWASP guidelines consistently
5. Validate all user inputs to prevent injection attacks and security vulnerabilities

### For Users

1. Keep your deployment updated with latest security patches and bug fixes
2. Use HTTPS for production environments to encrypt traffic and protect data
3. Implement proper CORS policies to prevent unauthorized access and attacks
4. Regular security audits and vulnerability scanning for proactive protection
5. Monitor for vulnerabilities using automated tools and security services

## Security Features

- Input validation on forms to prevent malicious data and security breaches
- XSS protection (React default escaping mechanism for safe rendering)
- CSRF protection (to be implemented in future versions for enhanced security)
- Secure headers (configure on deployment platform for production safety)

## Dependency Security

Run security audits regularly to identify vulnerabilities:
```bash
npm audit
npm audit fix
```

## Updates

Security updates will be released as soon as possible after discovery and verification.
