
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signUp, signIn } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signUp(email, password, name);
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signIn(email, password);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-sarabun">
            English Learning Platform
          </CardTitle>
          <CardDescription className="font-sarabun">
            เข้าสู่ระบบหรือสมัครสมาชิกใหม่
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="font-sarabun">เข้าสู่ระบบ</TabsTrigger>
              <TabsTrigger value="signup" className="font-sarabun">สมัครสมาชิก</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="อีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="font-sarabun"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="font-sarabun"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta/90 font-sarabun"
                  disabled={loading}
                >
                  {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="ชื่อ-นามสกุล"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="font-sarabun"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="อีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="font-sarabun"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="font-sarabun"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta/90 font-sarabun"
                  disabled={loading}
                >
                  {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
