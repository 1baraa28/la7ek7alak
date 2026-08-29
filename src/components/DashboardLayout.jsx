import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  return (
    <div dir="rtl" className="flex min-h-screen bg-[#FBF9F6] font-sans text-gray-800">
      {/* 1. القائمة الجانبية الثابتة على اليمين */}
      <Sidebar />

      {/* 2. منطقة المحتوى الرئيسي */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />
        
        {/* هنا تنعرض الصفحات المتغيرة (AdminHome أو ActiveStories) تلقائياً */}
        <Outlet />
      </main>
    </div>
  );
}