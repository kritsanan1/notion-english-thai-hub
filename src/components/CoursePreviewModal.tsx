
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Star, Play } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

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

interface CoursePreviewModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CoursePreviewModal = ({ course, isOpen, onClose }: CoursePreviewModalProps) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  if (!course) return null;

  const handleEnroll = async () => {
    if (!user) {
      toast({
        title: "กรุณาเข้าสู่ระบบ",
        description: "กรุณาเข้าสู่ระบบก่อนลงทะเบียนเรียน",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    if (course.is_premium && course.price_thb > 0) {
      // Handle premium course enrollment with payment
      toast({
        title: "คอร์สพรีเมียม",
        description: "กำลังพาไปหน้าชำระเงิน...",
      });
      // TODO: Integrate Stripe payment
    } else {
      // Handle free course enrollment
      toast({
        title: "ลงทะเบียนสำเร็จ!",
        description: `คุณได้ลงทะเบียนเรียน ${course.title_th} แล้ว`,
      });
    }
    
    setLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-sarabun text-2xl">
            {course.title_th}
          </DialogTitle>
          <DialogDescription className="font-poppins text-lg">
            {course.title_en}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Course Image */}
          <div className="relative rounded-lg overflow-hidden">
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
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="font-sarabun text-sm">{course.duration_weeks} สัปดาห์</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span className="font-sarabun text-sm">{course.lessons_count} บทเรียน</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="font-sarabun text-sm">{course.level}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-sarabun text-sm">4.8/5</span>
            </div>
          </div>

          {/* Instructor */}
          <div className="border rounded-lg p-4">
            <h4 className="font-sarabun font-semibold mb-2">ผู้สอน</h4>
            <p className="font-sarabun text-gray-700">{course.instructor_name}</p>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-sarabun font-semibold mb-2">รายละเอียดคอร์ส</h4>
            <p className="font-sarabun text-gray-700 mb-3 leading-relaxed">
              {course.description_th}
            </p>
            <p className="font-poppins text-gray-600 text-sm">
              {course.description_en}
            </p>
          </div>

          {/* Preview Video Placeholder */}
          <div className="border rounded-lg p-8 text-center bg-gray-50">
            <Play className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="font-sarabun text-gray-600">วิดีโอตัวอย่างคอร์ส</p>
            <p className="font-poppins text-sm text-gray-500">Course Preview Video</p>
          </div>

          {/* Pricing and CTA */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div>
                {course.price_thb > 0 ? (
                  <div>
                    <span className="font-sarabun text-3xl font-bold text-cta">
                      ฿{course.price_thb.toLocaleString()}
                    </span>
                    <span className="font-sarabun text-gray-500 ml-2">THB</span>
                  </div>
                ) : (
                  <div>
                    <span className="font-sarabun text-3xl font-bold text-cta">ฟรี</span>
                    <span className="font-poppins text-gray-500 ml-2">Free</span>
                  </div>
                )}
              </div>
              <Button
                onClick={handleEnroll}
                disabled={loading}
                className="bg-cta hover:bg-cta/90 text-white font-sarabun px-8 py-3"
              >
                {loading ? 'กำลังประมวลผล...' : 
                 course.price_thb > 0 ? 'ซื้อคอร์ส' : 'ลงทะเบียนฟรี'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoursePreviewModal;
