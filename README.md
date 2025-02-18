# SauceDemo Playwright Test Framework

This is a comprehensive test automation framework for testing the SauceDemo website using Playwright and TypeScript.

## Features

- Page Object Model (POM) design pattern
- TypeScript support
- Cross-browser testing
- Parallel test execution
- Screenshot and video capture on failure
- HTML test reports
- Environment-specific configuration
- CI/CD integration with GitHub Actions
- ESLint and Prettier for code quality

## Project Structure

```
src/
├── config/      # Configuration files
├── pages/       # Page Object Models
├── tests/       # Test files
├── utils/       # Utility functions
└── api/         # API testing utilities
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

3. Set up environment variables:
   - Copy `.env.development` to `.env.{environment}`
   - Update values as needed

4. Run tests:
   ```bash
   # Run all tests
   npm test

   # Run tests with UI
   npm run test:ui

   # Run tests in headed mode
   npm run test:headed

   # Run tests in debug mode
   npm run test:debug
   ```

5. View test report:
   ```bash
   npm run report
   ```

## Writing Tests

1. Create page objects in `src/pages/`
2. Add test files in `src/tests/`
3. Follow the existing patterns for consistency
4. Use the BasePage class for common operations

## CI/CD

The project includes GitHub Actions workflow for automated testing:
- Runs on push to main/master
- Runs on pull requests
- Uploads test reports as artifacts

## Best Practices

1. Follow SOLID principles
2. Use strong typing
3. Write reusable components
4. Keep tests independent
5. Use meaningful names
6. Add proper comments and documentation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

MIT