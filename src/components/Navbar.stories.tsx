import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { AuthContext } from '@/hooks/useAuth';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation bar component with responsive design, authentication states, and mobile menu.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <AuthContext.Provider value={{
      user: null,
      session: null,
      loading: false,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
    }}>
      <Navbar />
    </AuthContext.Provider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default navbar state for non-authenticated users.',
      },
    },
  },
};

export const LoggedIn: Story = {
  render: () => (
    <AuthContext.Provider value={{
      user: { 
        id: '123', 
        email: 'student@example.com', 
        app_metadata: {}, 
        user_metadata: {}, 
        aud: '', 
        created_at: '' 
      },
      session: { 
        access_token: 'mock_token', 
        token_type: 'Bearer', 
        user: { 
          id: '123', 
          email: 'student@example.com', 
          app_metadata: {}, 
          user_metadata: {}, 
          aud: '', 
          created_at: '' 
        }, 
        expires_at: 0, 
        expires_in: 0, 
        refresh_token: 'mock_refresh' 
      },
      loading: false,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
    }}>
      <Navbar />
    </AuthContext.Provider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navbar state when user is logged in, showing user email and logout option.',
      },
    },
  },
};

export const MobileView: Story = {
  render: () => (
    <AuthContext.Provider value={{
      user: null,
      session: null,
      loading: false,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
    }}>
      <Navbar />
    </AuthContext.Provider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive navbar with hamburger menu.',
      },
    },
  },
};