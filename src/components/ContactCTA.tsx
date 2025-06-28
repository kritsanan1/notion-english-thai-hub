import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'Live Chat',
      description: 'แชทสดกับทีมงาน',
      action: 'เริ่มแชท'
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'ส่งอีเมลหาเรา',
      action: 'ส่งอีเมล'
    },
    {
      icon: Phone,
      label: 'Phone',
      description: 'โทรหาเราโดยตรง',
      action: 'โทรเลย'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sarabun">
            มีโปรเจคต์อะไร?
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 font-poppins">
            HAVE ANY PROJECT?
          </h3>
          <p className="text-xl text-white/80 font-sarabun max-w-2xl mx-auto">
            พร้อมช่วยคุณพัฒนาทักษะภาษาอังกฤษ หรือสร้างโปรเจคการเรียนรู้ที่เหมาะกับคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 font-poppins">
                  {method.label}
                </h4>
                <p className="text-white/80 font-sarabun mb-4">
                  {method.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-teal-700 font-sarabun transition-all duration-300"
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Mail className="w-8 h-8 text-teal-600" />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 font-sarabun">
              Let's Talk
            </h4>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-emerald-500/20 text-white px-4 py-2 rounded-full text-sm font-sarabun">
                Web design
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-sarabun">
                App design
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-sarabun">
                Web application
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-800 font-medium">
                  contact@englishlearning.th
                </span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100 font-sarabun font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              ติดต่อเราเลย
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Teacher Joy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold font-sarabun">ครูจอย</p>
              <p className="text-white/70 text-sm font-sarabun">@teacher.joy</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-sarabun text-sm">Save for Later</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;