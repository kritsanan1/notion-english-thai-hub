import type { Meta, StoryObj } from '@storybook/react';
import ContactCTA from './ContactCTA';

const meta: Meta<typeof ContactCTA> = {
  title: 'Sections/ContactCTA',
  component: ContactCTA,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'ContactCTA section provides multiple ways for users to get in touch, featuring contact methods and project inquiry form.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactCTA>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default contact CTA section with multiple contact methods and project inquiry.',
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive view with stacked contact method cards.',
      },
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view maintaining the 3-column contact methods layout.',
      },
    },
  },
};