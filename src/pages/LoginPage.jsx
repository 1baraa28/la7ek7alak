import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import FormField from '../components/FormField';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("البريد الإلكتروني أو كلمة المرور غير صحيحة");

  return (
    <AuthLayout title="لوحة تحكم الأدمن" subtitle="لحّق حالك - إدارة المنصة">
      
      {/* تنبيه الخطأ */}
      {errorMessage && (
        <div className="bg-[#fde8e8] text-[#e05252] text-xs font-medium rounded-xl p-3.5 mb-6 text-center flex items-center justify-center space-x-1.5 space-x-reverse">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* حقل البريد الإلكتروني للأدمن */}
        <FormField 
          label="البريد الإلكتروني للأدمن"
          type="email"
          defaultValue="admin@gmail.com"
          borderColor="border-2 border-[#8E5439]"
        />

        {/* حقل كلمة المرور */}
        <FormField 
          label="كلمة المرور"
          isPassword={true}
          defaultValue="••••••••"
        />

        {/* زر تسجيل الدخول */}
        <button
          type="submit"
          className="w-full bg-[#301C12] hover:bg-[#322117] text-white font-bold py-3.5 rounded-xl transition duration-200 mt-2 text-sm shadow-sm"
        >
          تسجيل الدخول للوحة التحكم
        </button>
      </form>

    </AuthLayout>
  );
}