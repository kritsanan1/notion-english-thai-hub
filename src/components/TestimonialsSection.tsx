
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Testimonial {
  id: string;
  name_th: string;
  name_en: string;
  quote_th: string;
  quote_en: string;
  age: number;
  occupation: string;
  course_taken: string;
  rating: number;
  is_featured: boolean;
  image_url: string;
  video_url?: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
  }

  return (
    <section className="py-20 bg-gradient-to-b from-bottom to-light px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sarabun">
            เสียงจากผู้เรียน
          </h2>
          <p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
            Hear success stories from our satisfied students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up border-0 rounded-2xl overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image_url} 
                      alt={`Profile picture of ${testimonial.name_en}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-light"
                    />
                    {testimonial.video_url && (
                      <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-sarabun font-semibold text-gray-800 text-lg">
                      {testimonial.name_th}
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm">
                      {testimonial.name_en}
                    </p>
                    <p className="font-sarabun text-gray-500 text-sm">
                      {testimonial.age} ปี • {testimonial.occupation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-sarabun text-gray-500 bg-light px-2 py-1 rounded">
                    คอร์ส: {testimonial.course_taken}
                  </div>
                </div>

                <blockquote className="mb-4">
                  <p className="font-sarabun text-gray-700 leading-relaxed mb-3 italic">
                    "{testimonial.quote_th}"
                  </p>
                  <p className="font-poppins text-gray-600 text-sm italic">
                    "{testimonial.quote_en}"
                  </p>
                </blockquote>

                {/* Success metrics */}
                <div className="bg-light rounded-lg p-3 mt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-sarabun font-bold text-cta text-lg">+40%</div>
                      <div className="font-sarabun text-xs text-gray-600">ความมั่นใจ</div>
                    </div>
                    <div>
                      <div className="font-sarabun font-bold text-cta text-lg">3 เดือน</div>
                      <div className="font-sarabun text-xs text-gray-600">เวลาเรียน</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cta mb-2 font-sarabun">95%</div>
              <div className="text-white font-sarabun">ความพึงพอใจ</div>
              <div className="text-white/70 font-poppins text-sm">Student Satisfaction</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cta mb-2 font-sarabun">10,000+</div>
              <div className="text-white font-sarabun">ผู้เรียน</div>
              <div className="text-white/70 font-poppins text-sm">Active Students</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cta mb-2 font-sarabun">4.8</div>
              <div className="text-white font-sarabun">คะแนนเฉลี่ย</div>
              <div className="text-white/70 font-poppins text-sm">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-white/80 font-sarabun mb-6">ได้รับความไว้วางใจจาก</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-white font-sarabun text-sm">🏢 บริษัทชั้นนำ 50+ แห่ง</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-white font-sarabun text-sm">🎓 มหาวิทยาลัยพันธมิตร</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-white font-sarabun text-sm">🏆 รางวัลการศึกษาดีเด่น</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
