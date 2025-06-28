
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const PDPAConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const hasConsented = localStorage.getItem('pdpa_consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setConsents({ essential: true, analytics: true, marketing: true });
    saveConsents({ essential: true, analytics: true, marketing: true });
  };

  const handleAcceptSelected = () => {
    saveConsents(consents);
  };

  const saveConsents = (consentData: typeof consents) => {
    localStorage.setItem('pdpa_consent', JSON.stringify({
      ...consentData,
      timestamp: new Date().toISOString()
    }));
    setShowConsent(false);
  };

  return (
    <Dialog open={showConsent} onOpenChange={() => {}}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-sarabun text-xl">
            การคุ้มครองข้อมูลส่วนบุคคล
          </DialogTitle>
          <DialogDescription className="font-poppins">
            Personal Data Protection Policy
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p className="font-sarabun text-sm text-gray-700 leading-relaxed">
            เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อมอบประสบการณ์ที่ดีที่สุดแก่คุณ 
            กรุณาเลือกประเภทข้อมูลที่คุณยินยอมให้เราใช้
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="essential" 
                checked={consents.essential} 
                disabled 
              />
              <div>
                <label htmlFor="essential" className="font-sarabun font-medium text-sm">
                  คุกกี้ที่จำเป็น (Essential Cookies)
                </label>
                <p className="font-sarabun text-xs text-gray-600">
                  จำเป็นสำหรับการทำงานของเว็บไซต์
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="analytics" 
                checked={consents.analytics}
                onCheckedChange={(checked) => 
                  setConsents({ ...consents, analytics: !!checked })
                }
              />
              <div>
                <label htmlFor="analytics" className="font-sarabun font-medium text-sm">
                  คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies)
                </label>
                <p className="font-sarabun text-xs text-gray-600">
                  ช่วยเราปรับปรุงเว็บไซต์ให้ดีขึ้น
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="marketing" 
                checked={consents.marketing}
                onCheckedChange={(checked) => 
                  setConsents({ ...consents, marketing: !!checked })
                }
              />
              <div>
                <label htmlFor="marketing" className="font-sarabun font-medium text-sm">
                  คุกกี้เพื่อการตลาด (Marketing Cookies)
                </label>
                <p className="font-sarabun text-xs text-gray-600">
                  เพื่อแสดงโฆษณาที่เหมาะสมกับคุณ
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-cta hover:bg-cta/90 font-sarabun"
            >
              ยอมรับทั้งหมด
            </Button>
            <Button
              onClick={handleAcceptSelected}
              variant="outline"
              className="flex-1 font-sarabun"
            >
              ยอมรับที่เลือก
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDPAConsent;
