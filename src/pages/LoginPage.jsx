import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import FormField from '../components/FormField';
import axiosInstance from '../api/axiosInstance';

export default function LoginPage() {
  // وضع بيانات الأدمن الافتراضية المرسلة من الباك إند
  const [email, setEmail] = useState('ibasheer264@gmail.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // 1. تغيير المسار إلى /login لتفادي خطأ 404
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });

      // 2. استخراج التوكن وحفظه في localStorage
      const token = response.data?.token || response.data?.data?.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      localStorage.setItem('role', 'admin');

      // 3. التوجيه المباشر للوحة التحكم بعد نجاح الدخول
      navigate('/admin/stories');
    } catch (error) {
      console.error('فشل تسجيل الدخول:', error);
      
      setErrorMessage(
        error.response?.data?.message || 'بيانات الدخول غير صحيحة، حاول مجدداً'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="لوحة تحكم الأدمن" subtitle="لحّق حالك - إدارة المنصة">
      
      {/* تنبيه الخطأ */}
      {errorMessage && (
        <div className="bg-[#fde8e8] text-[#e05252] text-xs font-medium rounded-xl p-3.5 mb-6 text-center flex items-center justify-center space-x-1.5 space-x-reverse">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* حقل البريد الإلكتروني */}
        <FormField 
          label="البريد الإلكتروني للأدمن"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          borderColor="border-2 border-[#8E5439]"
          required
        />

        {/* حقل كلمة المرور */}
        <FormField 
          label="كلمة المرور"
          type="password"
          isPassword={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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