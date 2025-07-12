## Contact Manager (React + Jest + Playwright)

A simple contact management app built with React, tested with Jest and Playwright, and integrated with GitHub Actions for CI.

# Features
- Add/delete contacts
- Persist data with localStorage
- Unit tests (Jest)
- E2E tests (Playwright)
- GitHub Actions for automated testing on push

# Install
```bash
npm install
```

# Run tests
```bash
# Unit tests
npm test

# E2E tests (requires local server)
npm start # in one terminal
npx playwright test # in another
```

# CI
All tests are run automatically via GitHub Actions on every push to `main`.
