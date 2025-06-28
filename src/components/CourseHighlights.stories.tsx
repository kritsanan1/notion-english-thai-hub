import type { Meta, StoryObj } from '@storybook/react';
import CourseHighlights from './CourseHighlights';

const meta: Meta<typeof CourseHighlights> = {
  title: 'Sections/CourseHighlights',
  component: CourseHighlights,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'CourseHighlights component displays a grid of available courses with their details, pricing, and enrollment options. It fetches course data from Supabase and includes premium upgrade section.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CourseHighlights>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default view showing all courses with mixed free and premium options.',
      },
    },
  },
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state while courses are being fetched from the database.',
      },
    },
  },
  render: () => {
    // Mock the loading state by overriding the component's useEffect
    const LoadingCourseHighlights = () => {
      return (
        <section className="py-20 bg-gradient-to-b from-middle to-light px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sarabun">
                กำลังโหลดคอร์ส...
              </h2>
            </div>
          </div>
        </section>
      );
    };
    return <LoadingCourseHighlights />;
  },
};

export const WithPremiumFocus: Story = {
  parameters: {
    docs: {
      description: {
        story: 'View highlighting the premium upgrade section and premium course benefits.',
      },
    },
  },
  render: () => {
    return (
      <div className="bg-gray-100">
        <CourseHighlights />
      </div>
    );
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive view of the course highlights section.',
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
        story: 'Tablet responsive view showing 2-column grid layout.',
      },
    },
  },
};