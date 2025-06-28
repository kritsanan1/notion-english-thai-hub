import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navigationLinks = [
    { name: 'หน้าหลัก', nameEn: 'Home', href: '#home' },
    { name: 'คอร์สเรียน', nameEn: 'Courses', href: '#courses' },
    { name: 'เกี่ยวกับเรา', nameEn: 'About', href: '#about' },
    { name: 'ติดต่อเรา', nameEn: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800 font-poppins">
              OnLearn
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium font-sarabun"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-sarabun">
                  สวัสดี, {user.email}
                </span>
                <Button
                  onClick={signOut}
                  variant="outline"
                  className="font-sarabun"
                >
                  ออกจากระบบ
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="font-sarabun text-gray-700 hover:text-teal-600"
                  onClick={() => window.location.href = '/auth'}
                >
                  เข้าสู่ระบบ
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-sarabun px-6"
                  onClick={() => window.location.href = '/auth'}
                >
                  สมัครฟรี
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium font-sarabun px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                {user ? (
                  <div className="space-y-2">
                    <p className="text-gray-700 font-sarabun px-2">
                      สวัสดี, {user.email}
                    </p>
                    <Button
                      onClick={signOut}
                      variant="outline"
                      className="w-full font-sarabun"
                    >
                      ออกจากระบบ
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full font-sarabun justify-start"
                      onClick={() => window.location.href = '/auth'}
                    >
                      เข้าสู่ระบบ
                    </Button>
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-sarabun"
                      onClick={() => window.location.href = '/auth'}
                    >
                      สมัครฟรี
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;