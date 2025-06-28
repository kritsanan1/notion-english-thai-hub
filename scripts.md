# Available Scripts

    This document outlines the npm scripts available in this project, their purpose, usage, and common use cases. These scripts are defined in the `package.json` file.

    ## `npm run dev`

    -   **Purpose**: Starts the development server. This command is used during local development to run the application with hot-reloading.
    -   **Functionality**:
        -   Bundles the application using Vite.
        -   Serves the application on a local development server (typically `http://localhost:8080`).
        -   Enables hot module replacement (HMR) for instant updates without full page reloads.
    -   **Usage**:
        ```sh
        npm run dev
        ```
    -   **Expected Output**: The console will display messages indicating the server is running, the local URL, and network URL.
    -   **Common Use Cases**:
        -   Developing new features.
        -   Debugging issues in the browser.
        -   Making real-time UI changes.

    ## `npm run build`

    -   **Purpose**: Builds the application for production. This command compiles and optimizes all assets for deployment.
    -   **Functionality**:
        -   Transpiles TypeScript and React code.
        -   Minifies JavaScript, CSS, and HTML.
        -   Optimizes assets (e.g., images).
        -   Generates a `dist` directory containing the production-ready static files.
    -   **Usage**:
        ```sh
        npm run build
        ```
    -   **Expected Output**: The console will show progress of the build process and report the sizes of the generated bundles. Upon completion, a `dist` folder will be created in the project root.
    -   **Common Use Cases**:
        -   Preparing the application for deployment to a production server (e.g., Netlify, Vercel).
        -   Creating a static build for performance testing.

    ## `npm run build:dev`

    -   **Purpose**: Builds the application for development mode, similar to `npm run build` but without full production optimizations.
    -   **Functionality**:
        -   Uses Vite to build the project.
        -   Sets the build mode to `development`, which might skip some minification or optimization steps compared to a full production build.
    -   **Usage**:
        ```sh
        npm run build:dev
        ```
    -   **Expected Output**: Similar to `npm run build`, but the output files might be larger and less optimized.
    -   **Common Use Cases**:
        -   Creating a development build for testing in an environment that mimics production but allows for easier debugging.
        -   Generating a build for staging environments where full optimization isn't critical.

    ## `npm run lint`

    -   **Purpose**: Runs ESLint to analyze the code for potential errors and style violations.
    -   **Functionality**:
        -   Applies the ESLint rules defined in `eslint.config.js` to the project's TypeScript and TSX files.
        -   Identifies and reports issues such as unused variables, incorrect formatting, and potential bugs.
    -   **Usage**:
        ```sh
        npm run lint
        ```
    -   **Expected Output**: The console will display a list of any linting errors or warnings found in the codebase. If no issues are found, it will typically output nothing or a success message.
    -   **Common Use Cases**:
        -   Maintaining code quality and consistency.
        -   Identifying potential bugs early in the development cycle.
        -   As a pre-commit hook or part of a CI/CD pipeline.

    ## `npm run preview`

    -   **Purpose**: Serves the production build locally for testing before deployment.
    -   **Functionality**:
        -   Serves the contents of the `dist` directory (created by `npm run build`).
        -   Allows you to test the optimized production build in a local environment.
    -   **Usage**:
        ```sh
        npm run preview
        ```
    -   **Expected Output**: The console will indicate the local URL where the production build is being served (e.g., `http://localhost:4173`).
    -   **Common Use Cases**:
        -   Verifying the production build's functionality and performance before actual deployment.
        -   Testing routing and asset loading in a production-like environment.