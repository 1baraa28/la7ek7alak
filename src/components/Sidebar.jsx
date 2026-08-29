import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart2, Users, Tv, Grid, AlertCircle, Settings } from 'lucide-react';

export default function Sidebar() {
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition ${
      isActive
        ? 'bg-[#C85A32] text-white shadow-sm'
        : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
    }`;

  return (
    <aside className="w-64 bg-[#1E1513] text-white flex flex-col p-5 shrink-0 shadow-lg min-h-screen">
      {/* الشعار */}
      <div className="text-center pb-4 mb-4 border-b border-stone-800">
        <h1 className="text-2xl font-black text-white tracking-wide">لحّق حالك</h1>
        <p className="text-xs text-stone-400 mt-1 font-medium">لوحة تحكم الأدمن</p>
      </div>

      {/* الروابط */}
      <nav className="space-y-2">
        <NavLink to="/admin" end className={getLinkClass}>
          <BarChart2 className="w-5 h-5" />
          <span>الصفحة الرئيسية</span>
        </NavLink>

        <NavLink to="/admin/users" className={getLinkClass}>
          <Users className="w-5 h-5" />
          <span>إدارة المستخدمين والتجار</span>
        </NavLink>

        <NavLink to="/admin/stories" className={getLinkClass}>
          <Tv className="w-5 h-5" />
          <span>إدارة الـ Stories الحية 🔥</span>
        </NavLink>

        <NavLink to="/admin/categories" className={getLinkClass}>
          <Grid className="w-5 h-5" />
          <span>إدارة الأقسام والمدن</span>
        </NavLink>

        <NavLink to="/admin/reports" className={getLinkClass}>
          <AlertCircle className="w-5 h-5" />
          <span>قائمة البلاغات</span>
        </NavLink>

        <NavLink to="/admin/settings" className={getLinkClass}>
          <Settings className="w-5 h-5" />
          <span>الإعدادات</span>
        </NavLink>
      </nav>
    </aside>
  );
}