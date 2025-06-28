
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { nameTh: "หน้าหลัก", nameEn: "Home", href: "#home" },
    { nameTh: "คอร์สเรียน", nameEn: "Courses", href: "#courses" },
    { nameTh: "เกี่ยวกับเรา", nameEn: "About Us", href: "#about" },
    { nameTh: "ติดต่อเรา", nameEn: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-light py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-sarabun text-2xl font-bold text-gray-800 mb-4">
              English Learning Platform
            </h3>
            <p className="font-sarabun text-gray-600 mb-4 leading-relaxed">
              แพลตฟอร์มการเรียนภาษาอังกฤษออนไลน์ที่ออกแบบมาเพื่อคนไทยโดยเฉพาะ 
              เรียนรู้อย่างมีประสิทธิภาพและสนุกสนาน
            </p>
            <p className="font-poppins text-gray-600 text-sm">
              Your trusted partner in English language learning journey. 
              Start speaking confidently today!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-sarabun text-lg font-semibold text-gray-800 mb-4">
              เมนูหลัก
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-sarabun text-gray-600 hover:text-hero transition-colors duration-200 block group"
                    aria-label={`Navigate to ${link.nameEn}`}
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {link.nameTh}
                    </span>
                    <span className="font-poppins text-sm text-gray-500 block">
                      {link.nameEn}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-sarabun text-lg font-semibold text-gray-800 mb-4">
              ติดต่อเรา
            </h4>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-gray-500 mr-3 group-hover:text-hero transition-colors duration-200" />
                <span className="font-sarabun text-gray-600 text-sm">
                  info@englishlearning.th
                </span>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-gray-500 mr-3 group-hover:text-hero transition-colors duration-200" />
                <span className="font-sarabun text-gray-600 text-sm">
                  02-xxx-xxxx
                </span>
              </div>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 group-hover:text-hero transition-colors duration-200" />
                <span className="font-sarabun text-gray-600 text-sm leading-relaxed">
                  กรุงเทพมหานคร<br />
                  ประเทศไทย
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-hero hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label={`Visit our ${social.label} page`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="font-sarabun text-gray-600 text-sm mb-1">
                © 2024 English Learning Platform. สงวนลิขสิทธิ์
              </p>
              <p className="font-poppins text-gray-500 text-xs">
                All rights reserved. Made with ❤️ for Thai learners
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
