# Getting Started with Create React App

# User Dashboard

## Overview

This project is a user dashboard application built entirely with React, TypeScript, and SCSS. It provides a comprehensive interface for managing and viewing user data, including personal information, education and employment details, social media profiles, and guarantor information.

## Tech Stack

- React (v18.2.0)
- TypeScript (v4.9.5)
- SCSS

No additional UI libraries or frameworks are used, showcasing the power and flexibility of pure React and SCSS.

## Features

- User authentication (login)
- User listing
- Detailed user view
- User data management (view, update)
- Responsive design

## Login Page

The login page provides a simple interface for user authentication. It includes:

- Username/Email input field
- Password input field
- Remember me checkbox
- Forgot password link
- Login button

Upon successful login, the user is redirected to the dashboard, and their authentication token is stored in localStorage.

## API and Mock Data

This project uses a combination of mock data and simulated API calls to demonstrate functionality without relying on a backend server.

### Mock Data

The application includes a set of mock user data that simulates real-world user information. This data is stored in a JSON format and is used to populate the user dashboard and detail pages.

### Simulated API Calls

While the app doesn't connect to a real backend API, it simulates API calls using setTimeout and Promise-based functions. This approach mimics the asynchronous nature of real API requests and allows for practicing proper state management and loading states.

## Local Storage

The application utilizes browser localStorage to persist user data and authentication state. This approach allows for a seamless user experience across page refreshes and browser sessions.

### Storing Data

When a user logs in or when mock data is fetched, the application stores this data in localStorage:

```typescript
localStorage.setItem('userData', JSON.stringify(users));
localStorage.setItem('authToken', generatedToken);
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
User Dashboard is ready to be deployed!

