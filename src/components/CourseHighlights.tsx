
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Briefcase } from 'lucide-react';

const CourseHighlights = () => {
  const courses = [
    {
      id: 1,
      titleTh: "พื้นฐานการสนทนา",
      titleEn: "Basic Conversation",
      descriptionTh: "เรียนรู้การสนทนาภาษาอังกฤษในชีวิตประจำวัน",
      descriptionEn: "Learn everyday English conversation skills",
      icon: MessageCircle,
      duration: "4 สัปดาห์",
      level: "เริ่มต้น"
    },
    {
      id: 2,
      titleTh: "ไวยากรณ์ขั้นสูง",
      titleEn: "Advanced Grammar",
      descriptionTh: "เชี่ยวชาญไวยากรณ์ภาษาอังกฤษระดับสูง",
      descriptionEn: "Master advanced English grammar structures",
      icon: BookOpen,
      duration: "6 สัปดาห์",
      level: "ขั้นสูง"
    },
    {
      id: 3,
      titleTh: "การสนทนาทางธุรกิจ",
      titleEn: "Business Communication",
      descriptionTh: "ภาษาอังกฤษสำหรับการทำงานและธุรกิจ",
      descriptionEn: "Professional English for work and business",
      icon: Briefcase,
      duration: "8 สัปดาห์",
      level: "กลาง-สูง"
    }
  ];

  return (
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
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id} 
                className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up border-0 rounded-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-middle to-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-sarabun text-xl text-gray-800">
                    {course.titleTh}
                  </CardTitle>
                  <CardDescription className="font-poppins text-gray-600">
                    {course.titleEn}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-4">
                  <p className="font-sarabun text-gray-700 mb-4 leading-relaxed">
                    {course.descriptionTh}
                  </p>
                  <p className="font-poppins text-gray-600 text-sm mb-6">
                    {course.descriptionEn}
                  </p>
                  
                  <div className="flex justify-between items-center bg-light rounded-lg p-3 mb-4">
                    <span className="font-sarabun text-sm text-gray-600">
                      ระยะเวลา: {course.duration}
                    </span>
                    <span className="font-sarabun text-sm text-gray-600">
                      ระดับ: {course.level}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-cta hover:bg-cta/90 text-white font-sarabun font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                    aria-label={`View details for ${course.titleEn} course`}
                  >
                    ดูรายละเอียด
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
