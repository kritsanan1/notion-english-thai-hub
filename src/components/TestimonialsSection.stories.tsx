import type { Meta, StoryObj } from '@storybook/react';
import TestimonialsSection from './TestimonialsSection';

const meta: Meta<typeof TestimonialsSection> = {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TestimonialsSection displays featured student testimonials with ratings, success metrics, and trust indicators.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialsSection>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default view showing featured testimonials with student photos, ratings, and success stories.',
      },
    },
  },
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state while testimonials are being fetched.',
      },
    },
  },
  render: () => {
    const LoadingTestimonials = () => {
      return (
        <section className="py-20 bg-gradient-to-b from-bottom to-light px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sarabun">
                กำลังโหลดความคิดเห็น...
              </h2>
            </div>
          </div>
        </section>
      );
    };
    return <LoadingTestimonials />;
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive view with single column testimonial layout.',
      },
    },
  },
};