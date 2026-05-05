# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please email security@geekfoods.com instead of using the public issue tracker to ensure responsible disclosure.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Best Practices

### For Contributors

1. Never commit sensitive data (API keys, passwords, tokens)
2. Use environment variables for all configuration settings
3. Keep dependencies updated to latest secure versions
4. Follow secure coding practices and OWASP guidelines
5. Validate all user inputs to prevent injection attacks

### For Users

1. Keep your deployment updated with latest security patches
2. Use HTTPS for production environments to encrypt traffic
3. Implement proper CORS policies to prevent unauthorized access
4. Regular security audits and vulnerability scanning
5. Monitor for vulnerabilities using automated tools

## Security Features

- Input validation on forms to prevent malicious data
- XSS protection (React default escaping mechanism)
- CSRF protection (to be implemented in future versions)
- Secure headers (configure on deployment platform)

## Dependency Security

Run security audits regularly:
```bash
npm audit
npm audit fix
```

## Updates

Security updates will be released as soon as possible after discovery.
