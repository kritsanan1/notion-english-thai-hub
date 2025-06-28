
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_interest: '',
    language_preference: 'th',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('user_inquiries')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "ส่งข้อมูลสำเร็จ!",
        description: "เราจะติดต่อคุณในเร็วๆ นี้",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        course_interest: '',
        language_preference: 'th',
        message: ''
      });
      onClose();
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาลองใหม่อีกครั้ง",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sarabun text-xl">
            สมัครเรียนฟรี
          </DialogTitle>
          <DialogDescription className="font-poppins">
            Register for Free Trial
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="ชื่อ-นามสกุล / Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="font-sarabun"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="อีเมล / Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="font-sarabun"
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder="เบอร์โทรศัพท์ / Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="font-sarabun"
            />
          </div>

          <div>
            <Select
              value={formData.course_interest}
              onValueChange={(value) => setFormData({ ...formData, course_interest: value })}
            >
              <SelectTrigger className="font-sarabun">
                <SelectValue placeholder="คอร์สที่สนใจ / Course Interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic_conversation" className="font-sarabun">
                  พื้นฐานการสนทนา / Basic Conversation
                </SelectItem>
                <SelectItem value="advanced_grammar" className="font-sarabun">
                  ไวยากรณ์ขั้นสูง / Advanced Grammar
                </SelectItem>
                <SelectItem value="business_communication" className="font-sarabun">
                  การสนทนาทางธุรกิจ / Business Communication
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={formData.language_preference}
              onValueChange={(value) => setFormData({ ...formData, language_preference: value })}
            >
              <SelectTrigger className="font-sarabun">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="th" className="font-sarabun">ภาษาไทย / Thai</SelectItem>
                <SelectItem value="en" className="font-sarabun">English / อังกฤษ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea
              placeholder="ข้อความเพิ่มเติม / Additional Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="font-sarabun resize-none"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-cta hover:bg-cta/90 font-sarabun"
          >
            {loading ? 'กำลังส่ง...' : 'ส่งข้อมูล'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
