import type { Meta, StoryObj } from '@storybook/react';
    import HeroSection from './HeroSection';
    import { AuthContext } from '@/hooks/useAuth';

    const meta: Meta<typeof HeroSection> = {
      title: 'Sections/HeroSection',
      component: HeroSection,
      parameters: {
        layout: 'fullscreen',
      },
      tags: ['autodocs'],
    };

    export default meta;
    type Story = StoryObj<typeof HeroSection>;

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
          <HeroSection />
        </AuthContext.Provider>
      ),
    };

    export const LoggedIn: Story = {
      render: () => (
        <AuthContext.Provider value={{
          user: { id: '123', email: 'test@example.com', app_metadata: {}, user_metadata: {}, aud: '', created_at: '' },
          session: { access_token: 'mock_token', token_type: 'Bearer', user: { id: '123', email: 'test@example.com', app_metadata: {}, user_metadata: {}, aud: '', created_at: '' }, expires_at: 0, expires_in: 0, refresh_token: 'mock_refresh' },
          loading: false,
          signUp: async () => ({ error: null }),
          signIn: async () => ({ error: null }),
          signOut: async () => {},
        }}>
          <HeroSection />
        </AuthContext.Provider>
      ),
    };