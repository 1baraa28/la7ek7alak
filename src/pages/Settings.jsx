import React, { useState } from 'react';
import { Save, CheckCircle2 } from 'lucide-react';

export default function Settings() {
  const [platformName, setPlatformName] = useState('Lahaq Halak - لحّق حالك');
  const [supportEmail, setSupportEmail] = useState('support@lahaqhalak.com');
  const [autoBlock, setAutoBlock] = useState(true);
  const [maxReports, setMaxReports] = useState('5');
  const [showToast, setShowToast] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReset = () => {
    setPlatformName('Lahaq Halak - لحّق حالك');
    setSupportEmail('support@lahaqhalak.com');
    setAutoBlock(true);
    setMaxReports('5');
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* عنوان الصفحة */}
      <div>
        <h2 className="text-2xl font-bold text-[#C85A32]">
          إعدادات المنظومة <span className="text-xl font-normal text-stone-600">(System Settings)</span>
        </h2>
        <p className="text-stone-500 text-sm mt-1">
          التحكم في إعدادات المنصة، الحسابات، صلاحيات النظام والتنبيهات
        </p>
      </div>

      {/* إشعار حفظ التغييرات */}
      {showToast && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center gap-2 text-sm shadow-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>تم حفظ التغييرات والإعدادات بنجاح!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* قسم عام والتطبيقات */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 space-y-5">
          <h3 className="font-bold text-stone-800 text-base border-b border-stone-100 pb-3">
            عام والتطبيقات
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-2">
                اسم المنصة
              </label>
              <input
                type="text"
                value={platformName}
                onChange={(e) => setPlatformName(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#C85A32] focus:bg-white transition"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-2">
                بريد الدعم الفني
              </label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#C85A32] focus:bg-white transition"
                required
              />
            </div>
          </div>
        </div>

        {/* قسم إعدادات البلاغات والسياسات */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 space-y-6">
          <h3 className="font-bold text-stone-800 text-base border-b border-stone-100 pb-3">
            إعدادات البلاغات والسياسات
          </h3>

          {/* تفعيل / تعطيل الحظر التلقائي */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-stone-800 text-sm">
                حظر الـ Story تلقائياً عند تكرار البلاغات
              </h4>
              <p className="text-stone-500 text-xs mt-1">
                إخفاء العرض تلقائياً عند وصول عدد البلاغات الموثقة للحد الأقصى
              </p>
            </div>

            <button
              type="button"
              dir="ltr"
              onClick={() => setAutoBlock(!autoBlock)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                autoBlock ? 'bg-[#C85A32]' : 'bg-stone-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  autoBlock ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* تحديد الحد الأقصى للبلاغات */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-stone-100">
            <label className="font-bold text-stone-800 text-sm">
              الحد الأقصى للبلاغات قبل الإيقاف المؤقت
            </label>

            <div className="w-40">
              <select
                value={maxReports}
                onChange={(e) => setMaxReports(e.target.value)}
                className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#C85A32] transition"
              >
                <option value="3">3 بلاغات</option>
                <option value="5">5 بلاغات</option>
                <option value="10">10 بلاغات</option>
                <option value="15">15 بلاغات</option>
              </select>
            </div>
          </div>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#2A2421] hover:bg-black text-white rounded-xl text-sm font-semibold transition flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ التغييرات</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 bg-[#EBE7E1] hover:bg-stone-300 text-stone-700 rounded-xl text-sm font-semibold transition cursor-pointer"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
}