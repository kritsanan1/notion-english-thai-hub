// Mock Supabase client for Storybook
export const supabase = {
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: (column: string, value: any) => ({
        order: (column: string, options?: any) => ({
          limit: (count: number) => Promise.resolve({
            data: getMockData(table),
            error: null
          })
        }),
        then: (callback: any) => callback({
          data: getMockData(table),
          error: null
        })
      }),
      order: (column: string, options?: any) => ({
        limit: (count: number) => Promise.resolve({
          data: getMockData(table),
          error: null
        }),
        then: (callback: any) => callback({
          data: getMockData(table),
          error: null
        })
      }),
      then: (callback: any) => callback({
        data: getMockData(table),
        error: null
      })
    }),
    insert: (data: any) => Promise.resolve({
      data: null,
      error: null
    })
  }),
  auth: {
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } }
    }),
    getSession: () => Promise.resolve({
      data: { session: null }
    }),
    signUp: () => Promise.resolve({ error: null }),
    signInWithPassword: () => Promise.resolve({ error: null }),
    signOut: () => Promise.resolve({ error: null })
  }
};

function getMockData(table: string) {
  switch (table) {
    case 'courses':
      return [
        {
          id: '1',
          title_th: 'พื้นฐานการสนทนาภาษาอังกฤษ',
          title_en: 'Basic English Conversation',
          description_th: 'เรียนรู้การสนทนาภาษาอังกฤษเบื้องต้น เหมาะสำหรับผู้เริ่มต้น',
          description_en: 'Learn basic English conversation skills perfect for beginners',
          price_thb: 0,
          duration_weeks: 4,
          lessons_count: 12,
          duration_hours: 24,
          level: 'Beginner',
          is_premium: false,
          instructor_name: 'ครูจอย',
          image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          difficulty_level: 'Beginner',
          preview_video_url: null
        },
        {
          id: '2',
          title_th: 'ไวยากรณ์อังกฤษขั้นสูง',
          title_en: 'Advanced English Grammar',
          description_th: 'เจาะลึกไวยากรณ์ภาษาอังกฤษระดับสูง พร้อมแบบฝึกหัดมากมาย',
          description_en: 'Deep dive into advanced English grammar with extensive practice',
          price_thb: 1990,
          duration_weeks: 8,
          lessons_count: 20,
          duration_hours: 40,
          level: 'Advanced',
          is_premium: true,
          instructor_name: 'ครูจอย',
          image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          difficulty_level: 'Advanced',
          preview_video_url: null
        },
        {
          id: '3',
          title_th: 'การสนทนาทางธุรกิจ',
          title_en: 'Business Communication',
          description_th: 'เรียนรู้การสื่อสารภาษาอังกฤษในสภาพแวดล้อมทางธุรกิจ',
          description_en: 'Master English communication in business environments',
          price_thb: 2990,
          duration_weeks: 6,
          lessons_count: 15,
          duration_hours: 30,
          level: 'Intermediate',
          is_premium: true,
          instructor_name: 'ครูจอย',
          image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          difficulty_level: 'Intermediate',
          preview_video_url: null
        }
      ];
    
    case 'testimonials':
      return [
        {
          id: '1',
          name_th: 'นางสาวสมใจ ใจดี',
          name_en: 'Somjai Jaidee',
          quote_th: 'คอร์สนี้ช่วยให้ฉันพูดภาษาอังกฤษได้คล่องขึ้นมาก',
          quote_en: 'This course helped me speak English much more fluently',
          age: 25,
          occupation: 'Marketing Executive',
          course_taken: 'Basic English Conversation',
          rating: 5,
          is_featured: true,
          image_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          video_url: null,
          created_at: '2024-01-01T00:00:00Z'
        },
        {
          id: '2',
          name_th: 'นายวิชัย เก่งมาก',
          name_en: 'Wichai Kengmak',
          quote_th: 'ครูสอนดีมาก เข้าใจง่าย และมีเทคนิคที่ดี',
          quote_en: 'Excellent teaching, easy to understand with great techniques',
          age: 28,
          occupation: 'Software Developer',
          course_taken: 'Advanced English Grammar',
          rating: 5,
          is_featured: true,
          image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          video_url: null,
          created_at: '2024-01-01T00:00:00Z'
        }
      ];
    
    default:
      return [];
  }
}