import type { Preview } from "@storybook/react";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import { BrowserRouter } from "react-router-dom";
    import { AuthProvider } from "../src/hooks/useAuth";
    import "../src/index.css"; // Import your global CSS

    const queryClient = new QueryClient();

    const preview: Preview = {
      parameters: {
        controls: {
          matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
          },
        },
      },
      decorators: [
        (Story) => (
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <AuthProvider>
                <Story />
              </AuthProvider>
            </BrowserRouter>
          </QueryClientProvider>
        ),
      ],
    };

    export default preview;