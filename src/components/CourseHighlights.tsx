
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, Briefcase, Clock, Users, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import CoursePreviewModal from './CoursePreviewModal';

interface Course {
  id: string;
  title_th: string;
  title_en: string;
  description_th: string;
  description_en: string;
  price_thb: number;
  duration_weeks: number;
  lessons_count: number;
  level: string;
  is_premium: boolean;
  instructor_name: string;
  image_url: string;
}

const CourseHighlights = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const getIconForCourse = (index: number) => {
    const icons = [MessageCircle, BookOpen, Briefcase];
    return icons[index % icons.length];
  };

  if (loading) {
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
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-middle to-light px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sarabun">
              คอร์สยอดนิยม
            </h2>
            <p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
              Choose from our most popular courses designed for Thai learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = getIconForCourse(index);
              return (
                <Card 
                  key={course.id} 
                  className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up border-0 rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                  onClick={() => handleCourseClick(course)}
                >
                  <div className="relative">
                    <img 
                      src={course.image_url} 
                      alt={course.title_en}
                      className="w-full h-48 object-cover"
                    />
                    {course.is_premium && (
                      <Badge className="absolute top-4 right-4 bg-cta text-white">
                        Premium
                      </Badge>
                    )}
                    {course.price_thb === 0 && (
                      <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                        ฟรี
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-middle to-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-sarabun text-xl text-gray-800">
                      {course.title_th}
                    </CardTitle>
                    <CardDescription className="font-poppins text-gray-600">
                      {course.title_en}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center pb-4">
                    <p className="font-sarabun text-gray-700 mb-4 leading-relaxed line-clamp-2">
                      {course.description_th}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center justify-center space-x-1 bg-light rounded-lg p-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-sarabun text-sm text-gray-600">
                          {course.duration_weeks} สัปดาห์
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 bg-light rounded-lg p-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <span className="font-sarabun text-sm text-gray-600">
                          {course.lessons_count} บทเรียน
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 bg-light rounded-lg p-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="font-sarabun text-sm text-gray-600">
                          {course.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 bg-light rounded-lg p-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-sarabun text-sm text-gray-600">
                          4.8/5
                        </span>
                      </div>
                    </div>

                    {/* Instructor */}
                    <p className="font-sarabun text-sm text-gray-600 mb-4">
                      โดย {course.instructor_name}
                    </p>

                    {/* Pricing */}
                    <div className="text-center mb-4">
                      {course.price_thb > 0 ? (
                        <div>
                          <span className="font-sarabun text-2xl font-bold text-cta">
                            ฿{course.price_thb.toLocaleString()}
                          </span>
                          <span className="font-sarabun text-gray-500 text-sm ml-1">THB</span>
                        </div>
                      ) : (
                        <span className="font-sarabun text-2xl font-bold text-cta">
                          ฟรี
                        </span>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full bg-cta hover:bg-cta/90 text-white font-sarabun font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                      aria-label={`View details for ${course.title_en} course`}
                    >
                      ดูรายละเอียด
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Premium Upgrade Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sarabun">
                อัพเกรดเป็นสมาชิกพรีเมียม
              </h3>
              <p className="text-white/90 font-sarabun mb-6">
                เข้าถึงคอร์สพรีเมียมทั้งหมด พร้อมเนื้อหาพิเศษและการสนับสนุนแบบ 1:1
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-white font-sarabun text-sm">✓ คอร์สพรีเมียมทั้งหมด</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-white font-sarabun text-sm">✓ การสนับสนุนแบบ 1:1</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-white font-sarabun text-sm">✓ ใบประกาศนียบัตร</span>
                </div>
              </div>
              <Button className="bg-cta hover:bg-cta/90 text-white font-sarabun font-semibold px-8 py-3 rounded-lg">
                สมัครพรีเมียม ฿99/เดือน
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CoursePreviewModal
        course={selectedCourse}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default CourseHighlights;
