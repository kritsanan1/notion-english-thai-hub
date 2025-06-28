
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      nameTh: "นางสาวสุดา จันทร์แสง",
      nameEn: "Suda Jansaeng",
      age: "25 ปี",
      occupation: "พนักงานบริษัท",
      quoteTh: "เรียนกับคอร์สนี้แล้วรู้สึกมั่นใจในการใช้ภาษาอังกฤษมากขึ้น สามารถคุยกับลูกค้าต่างประเทศได้อย่างคล่องแคล่ว",
      quoteEn: "This course boosted my confidence in English. Now I can communicate fluently with international clients.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fa?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      nameTh: "นายธนาคม วงศ์ใหญ่",
      nameEn: "Thanakom Wongyai",
      age: "32 ปี",
      occupation: "วิศวกร",
      quoteTh: "วิธีการสอนที่เข้าใจง่าย เหมาะสำหรับคนที่ไม่มีพื้นฐานภาษาอังกฤษเลย ตอนนี้สามารถนำเสนองานเป็นภาษาอังกฤษได้แล้ว",
      quoteEn: "Easy-to-understand teaching method, perfect for beginners. Now I can present my work in English confidently.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      nameTh: "นางสาวพิมพ์ใจ รัตนเจริญ",
      nameEn: "Pimjai Rattanacharoein",
      age: "28 ปี",
      occupation: "ครูประถม",
      quoteTh: "คอร์สนี้ช่วยให้ฉันสอนภาษาอังกฤษให้นักเรียนได้ดีขึ้น และยังได้เทคนิคการสื่อสารที่มีประสิทธิภาพอีกด้วย",
      quoteEn: "This course helped me teach English better to my students and learn effective communication techniques.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

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
                  <img 
                    src={testimonial.image} 
                    alt={`Profile picture of ${testimonial.nameEn}`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-light"
                  />
                  <div>
                    <h3 className="font-sarabun font-semibold text-gray-800 text-lg">
                      {testimonial.nameTh}
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm">
                      {testimonial.nameEn}
                    </p>
                    <p className="font-sarabun text-gray-500 text-sm">
                      {testimonial.age} • {testimonial.occupation}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="mb-4">
                  <p className="font-sarabun text-gray-700 leading-relaxed mb-3 italic">
                    "{testimonial.quoteTh}"
                  </p>
                  <p className="font-poppins text-gray-600 text-sm italic">
                    "{testimonial.quoteEn}"
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-white font-poppins text-lg mb-2">
              Join <span className="font-bold text-cta">95%</span> of our students who successfully improved their English
            </p>
            <p className="text-white/80 font-sarabun">
              เข้าร่วมกับนักเรียนกว่า 95% ที่ประสบความสำเร็จในการเรียนภาษาอังกฤษ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
