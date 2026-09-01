import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import FormField from '../components/FormField';
import axiosInstance from '../api/axiosInstance';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      // 1. إرسال بيانات الدخول المباشرة من الـ State
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });

      const data = response.data;
      const token = data?.token || data?.data?.token;
      const userRole = data?.user?.role || data?.role;

      // 2. التحقق من صلاحيات الأدمن
      if (userRole && userRole !== 'admin') {
        setErrorMessage('عذراً، هذا الحساب غير مصرح له بالدخول للوحة تحكم الأدمن');
        return;
      }

      // 3. حفظ التوكن والتوجيه المباشر
      if (token) {
        localStorage.setItem('token', token);
      }
      localStorage.setItem('role', userRole || 'admin');

      navigate('/admin/stories');
    } catch (error) {
      console.error('فشل تسجيل الدخول:', error);

      // استخراج رسالة الخطأ القادمة من الباك إند
      const serverError = 
        error.response?.data?.message || 
        error.response?.data?.error || 
        'بيانات الدخول غير صحيحة، حاول مجدداً';

      setErrorMessage(serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="لوحة تحكم الأدمن" subtitle="لحّق حالك - إدارة المنصة">
      
      {/* صندوق تنبيه الأخطاء */}
      {errorMessage && (
        <div className="bg-[#fde8e8] text-[#e05252] text-xs font-medium rounded-xl p-3.5 mb-6 text-center flex items-center justify-center space-x-1.5 space-x-reverse border border-red-200">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* حقل البريد الإلكتروني */}
        <FormField 
          label="البريد الإلكتروني للأدمن"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@gmail.com"
          borderColor="border-2 border-[#8E5439]"
          required
        />

        {/* حقل كلمة المرور */}
        <FormField 
          label="كلمة المرور"
          type="password"
          name="password"
          isPassword={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        {/* زر تسجيل الدخول */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#301C12] hover:bg-[#322117] text-white font-bold py-3.5 rounded-xl transition duration-200 mt-2 text-sm shadow-sm cursor-pointer disabled:opacity-50"
        >
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول للوحة التحكم'}
        </button>
      </form>

    </AuthLayout>
  );
}