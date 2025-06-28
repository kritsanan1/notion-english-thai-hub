# English Learning Platform

Welcome to the English Learning Platform, an online course platform designed specifically for young Thai adults. This project aims to provide an effective and enjoyable learning experience for English language acquisition.

## Project Info

**URL**: https://lovable.dev/projects/d9c302ea-21f7-41dc-abca-171ec2d38146

## Technologies Used

This project is built with a modern web development stack:

- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
- **React**: A JavaScript library for building user interfaces.
- **shadcn/ui**: A collection of reusable components built using Radix UI and Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Supabase**: An open-source Firebase alternative providing a PostgreSQL database, authentication, and more.
- **Storybook**: A tool for building UI components and pages in isolation.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher. We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (Node Version Manager) to manage Node.js versions.
- **npm**: Node Package Manager, which comes with Node.js.

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
   ```sh
   git clone <YOUR_GIT_URL>
   ```
   Replace `<YOUR_GIT_URL>` with the actual Git URL of your project.

2. **Navigate to the project directory**:
   ```sh
   cd <YOUR_PROJECT_NAME>
   ```
   Replace `<YOUR_PROJECT_NAME>` with the name of the cloned directory.

3. **Install dependencies**:
   ```sh
   npm install
   ```
   This command will install all the necessary packages listed in `package.json`.

## Environment Configuration

This project uses Supabase for its backend services (database and authentication). You will need to configure your Supabase project details.

1. **Create a `.env` file**: In the root of your project, create a file named `.env`.
2. **Add Supabase credentials**: Add the following environment variables to your `.env` file:
   ```
   VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
   VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
   ```
   You can find these values in your Supabase project settings under `API`.

## Local Development Setup

To start the development server with auto-reloading and an instant preview:

```sh
npm run dev
```
This will typically start the application on `http://localhost:8080` (or another available port). The application will automatically reload when you make changes to the source code.

## Storybook Development

To run Storybook for component development and documentation:

```sh
npm run storybook
```
This will start Storybook on `http://localhost:6006` where you can view and interact with individual components.

### Adding New Stories

To add stories for new components:

1. **Create a story file**: Create a `.stories.tsx` file next to your component (e.g., `MyComponent.stories.tsx`)

2. **Basic story structure**:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import MyComponent from './MyComponent';

   const meta: Meta<typeof MyComponent> = {
     title: 'Components/MyComponent',
     component: MyComponent,
     parameters: {
       layout: 'centered',
     },
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof MyComponent>;

   export const Default: Story = {
     args: {
       // component props
     },
   };
   ```

3. **For components using Supabase**: The mock client is automatically used in Storybook, so your components will work without a live database connection.

## Testing Procedures

Currently, there are no dedicated unit or integration tests configured for this project.
- **Manual Testing**: Verify functionality by interacting with the application in the browser.
- **Component Testing**: Use Storybook to test individual components in isolation.
- **Linting**: Run `npm run lint` to check for code style and potential errors.

## Deployment Process

This project can be easily deployed using Lovable's built-in publishing features or through platforms like Netlify.

- **Using Lovable**:
  1. Open your project in [Lovable](https://lovable.dev/projects/d9c302ea-21f7-41dc-abca-171ec2d38146).
  2. Click on `Share` -> `Publish`.

- **Using Netlify (or similar static site hosts)**:
  1. Build the project for production:
     ```sh
     npm run build
     ```
     This will create a `dist` directory with optimized production-ready files.
  2. Deploy the contents of the `dist` directory to your preferred static hosting provider.

## Custom Domain

To connect a custom domain to your Lovable project:

1. Navigate to `Project` > `Settings` > `Domains`.
2. Click `Connect Domain`.
3. Refer to the [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide) documentation for detailed instructions.

## Design System

This project includes a comprehensive design system with:

- **Color Palette**: Teal and emerald-based theme with accessibility-compliant contrast ratios
- **Typography**: Sarabun (Thai) and Poppins (English) font families
- **Components**: Reusable UI components documented in Storybook
- **Animations**: Smooth transitions and micro-interactions

## Contribution Guidelines

We welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/fix-description`.
3. Make your changes and ensure they adhere to the existing code style (run `npm run lint`).
4. Add or update Storybook stories for any new components.
5. Commit your changes with a clear and descriptive commit message.
6. Push your branch to your forked repository.
7. Open a pull request to the `main` branch of the original repository.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).