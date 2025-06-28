/*
  # Enhanced database schema for English learning platform

  1. New Tables
    - `profiles` - User profile information extending auth.users
    - `user_courses` - Course enrollment tracking
    - `feedback` - User course reviews and ratings
    - `promotional_content` - A/B testing content variants
    - `orders` - Payment and purchase tracking
    - `privacy_consents` - PDPA compliance tracking

  2. Enhanced Tables
    - `courses` - Added pricing, duration, and premium features
    - `testimonials` - Added demographic and feature flags
    - `page_analytics` - Added user tracking and conversion events

  3. Security
    - Enable RLS on all tables
    - Add appropriate policies for data access
    - Create trigger for automatic profile creation

  4. Sample Data
    - Enhanced course data with pricing
    - Featured testimonials
    - A/B testing content variants
*/

-- Create user profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  age INTEGER,
  occupation TEXT,
  language_preference TEXT DEFAULT 'th',
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for profiles (with conditional creation)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'profiles' 
    AND policyname = 'Users can view and edit own profile'
  ) THEN
    CREATE POLICY "Users can view and edit own profile" ON public.profiles
      FOR ALL USING (auth.uid() = id);
  END IF;
END $$;

-- Enhance existing courses table with more fields
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'price_thb'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN price_thb DECIMAL(10,2) DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'duration_hours'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN duration_hours INTEGER DEFAULT 20;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'lessons_count'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN lessons_count INTEGER DEFAULT 10;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'difficulty_level'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN difficulty_level TEXT DEFAULT 'Beginner';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'is_premium'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN is_premium BOOLEAN DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'preview_video_url'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN preview_video_url TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'courses' AND column_name = 'instructor_name'
  ) THEN
    ALTER TABLE public.courses ADD COLUMN instructor_name TEXT;
  END IF;
END $$;

-- Create user_courses table for enrollment tracking
CREATE TABLE IF NOT EXISTS public.user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  progress_percentage INTEGER DEFAULT 0,
  payment_status TEXT DEFAULT 'free',
  UNIQUE(user_id, course_id)
);

-- Enable RLS on user_courses
ALTER TABLE public.user_courses ENABLE ROW LEVEL SECURITY;

-- Create policy for user_courses
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_courses' 
    AND policyname = 'Users can view own enrollments'
  ) THEN
    CREATE POLICY "Users can view own enrollments" ON public.user_courses
      FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- Enhance existing testimonials table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'age'
  ) THEN
    ALTER TABLE public.testimonials ADD COLUMN age INTEGER;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'occupation'
  ) THEN
    ALTER TABLE public.testimonials ADD COLUMN occupation TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'course_taken'
  ) THEN
    ALTER TABLE public.testimonials ADD COLUMN course_taken TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'is_featured'
  ) THEN
    ALTER TABLE public.testimonials ADD COLUMN is_featured BOOLEAN DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'testimonials' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE public.testimonials ADD COLUMN video_url TEXT;
  END IF;
END $$;

-- Create feedback table for user reviews
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on feedback
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policy for feedback
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'feedback' 
    AND policyname = 'Users can manage own feedback'
  ) THEN
    CREATE POLICY "Users can manage own feedback" ON public.feedback
      FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- Create promotional_content table for A/B testing
CREATE TABLE IF NOT EXISTS public.promotional_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type TEXT NOT NULL, -- 'cta_text', 'hero_title', etc.
  variant_name TEXT NOT NULL,
  content_th TEXT,
  content_en TEXT,
  is_active BOOLEAN DEFAULT false,
  conversion_rate DECIMAL(5,4) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on promotional_content
ALTER TABLE public.promotional_content ENABLE ROW LEVEL SECURITY;

-- Create policy for promotional_content (public read)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'promotional_content' 
    AND policyname = 'Anyone can read active promotional content'
  ) THEN
    CREATE POLICY "Anyone can read active promotional content" ON public.promotional_content
      FOR SELECT USING (is_active = true);
  END IF;
END $$;

-- Enhance existing page_analytics table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'session_id'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN session_id TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'page_url'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN page_url TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'referrer'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN referrer TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'device_type'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN device_type TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'page_analytics' AND column_name = 'conversion_event'
  ) THEN
    ALTER TABLE public.page_analytics ADD COLUMN conversion_event TEXT;
  END IF;
END $$;

-- Create orders table for payment tracking
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  stripe_session_id TEXT UNIQUE,
  amount_thb DECIMAL(10,2),
  currency TEXT DEFAULT 'thb',
  status TEXT DEFAULT 'pending',
  payment_method TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Enable RLS on orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policy for orders
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'orders' 
    AND policyname = 'Users can view own orders'
  ) THEN
    CREATE POLICY "Users can view own orders" ON public.orders
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;

-- Create privacy_consents table for PDPA compliance
CREATE TABLE IF NOT EXISTS public.privacy_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  consent_type TEXT NOT NULL, -- 'marketing', 'analytics', 'essential'
  consented BOOLEAN NOT NULL,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on privacy_consents
ALTER TABLE public.privacy_consents ENABLE ROW LEVEL SECURITY;

-- Create policy for privacy_consents
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'privacy_consents' 
    AND policyname = 'Users can manage own privacy consents'
  ) THEN
    CREATE POLICY "Users can manage own privacy consents" ON public.privacy_consents
      FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- Insert sample enhanced course data
INSERT INTO public.courses (title_th, title_en, description_th, description_en, price_thb, duration_weeks, lessons_count, level, is_premium, instructor_name, image_url) VALUES
('พื้นฐานการสนทนา', 'Basic Conversation', 'เรียนรู้การสนทนาภาษาอังกฤษในชีวิตประจำวัน พร้อมสถานการณ์จริงที่ใช้บ่อย', 'Learn everyday English conversation skills with real-life scenarios', 0, 4, 12, 'Beginner', false, 'อาจารย์สุดา', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'),
('ไวยากรณ์ขั้นสูง', 'Advanced Grammar', 'เชี่ยวชาญไวยากรณ์ภาษาอังกฤษระดับสูง เพื่อการสื่อสารที่แม่นยำ', 'Master advanced English grammar structures for precise communication', 1990, 6, 18, 'Advanced', true, 'อาจารย์วิชัย', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop'),
('การสนทนาทางธุรกิจ', 'Business Communication', 'ภาษาอังกฤษสำหรับการทำงานและธุรกิจ เน้นการนำเสนอและเจรจา', 'Professional English for work and business focusing on presentations and negotiations', 2990, 8, 24, 'Intermediate', true, 'อาจารย์ปิยะ', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop')
ON CONFLICT (id) DO NOTHING;

-- Insert sample enhanced testimonials
INSERT INTO public.testimonials (name_th, name_en, quote_th, quote_en, age, occupation, course_taken, rating, is_featured, image_url) VALUES
('นางสาวสุดา จันทร์แสง', 'Suda Jansaeng', 'เรียนกับคอร์สนี้แล้วรู้สึกมั่นใจในการใช้ภาษาอังกฤษมากขึ้น สามารถคุยกับลูกค้าต่างประเทศได้อย่างคล่องแคล่ว', 'This course boosted my confidence in English. Now I can communicate fluently with international clients.', 25, 'พนักงานบริษัท', 'พื้นฐานการสนทนา', 5, true, 'https://images.unsplash.com/photo-1494790108755-2616b612b3fa?w=100&h=100&fit=crop&crop=face'),
('นายธนาคม วงศ์ใหญ่', 'Thanakom Wongyai', 'วิธีการสอนที่เข้าใจง่าย เหมาะสำหรับคนที่ไม่มีพื้นฐานภาษาอังกฤษเลย ตอนนี้สามารถนำเสนองานเป็นภาษาอังกฤษได้แล้ว', 'Easy-to-understand teaching method, perfect for beginners. Now I can present my work in English confidently.', 32, 'วิศวกร', 'การสนทนาทางธุรกิจ', 5, true, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face')
ON CONFLICT (id) DO NOTHING;

-- Insert promotional content for A/B testing
INSERT INTO public.promotional_content (content_type, variant_name, content_th, content_en, is_active) VALUES
('hero_cta', 'default', 'สมัครฟรี', 'Sign Up Free', true),
('hero_cta', 'variant_a', 'เริ่มเรียนเลย', 'Start Learning Now', false),
('hero_promotion', 'free_trial', 'ลองฟรี 7 วัน!', 'Try Free for 7 Days!', true)
ON CONFLICT (id) DO NOTHING;

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, language_preference)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'name', COALESCE(NEW.raw_user_meta_data->>'language_preference', 'th'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();