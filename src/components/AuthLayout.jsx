import React from 'react';

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4 py-8" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-sm border border-gray-100/80">
        
        {/* الشعار والترويسة */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="لحّق حالك" 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          {title && <h1 className="text-2xl font-bold text-[#301C12] mb-1">{title}</h1>}
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>

        {/* محتوى الصفحة الممرر كـ children */}
        {children}
      </div>
    </div>
  );
}