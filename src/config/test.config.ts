export const TestConfig = {
  credentials: {
    standardUser: {
      username: process.env.STANDARD_USER || 'standard_user',
      password: process.env.STANDARD_USER_PASSWORD || 'secret_sauce',
    },
    lockedOutUser: {
      username: process.env.LOCKED_USER || 'locked_out_user',
      password: process.env.LOCKED_USER_PASSWORD || 'secret_sauce',
    },
  },
  timeouts: {
    defaultTimeout: 30000,
    navigationTimeout: 15000,
  },
  viewport: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 812 },
  },
};