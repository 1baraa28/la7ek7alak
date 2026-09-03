import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  // حالة لإخفاء وإظهار الـ Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div dir="rtl" className="flex min-h-screen bg-[#FBF9F6] font-sans text-gray-800">
      {/* 1. القائمة الجانبية (نمرر لها حالة الفتح) */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* 2. منطقة المحتوى الرئيسي */}
      <main className="flex-1 p-8 overflow-y-auto transition-all duration-300">
        {/* نمرر دالة التبديل للهيدر ليتمكن الزر من فتح/إغلاق القائمة */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* الصفحات المتغيرة */}
        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}