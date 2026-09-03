import React, { useState } from 'react';
import { Flame, Store, Users, AlertTriangle, TrendingUp, Star, Sparkles, MapPin } from 'lucide-react';

export default function AdminHome() {
  // بيانات الإحصائيات مع إحداثيات رسم دقيقة ومئوية لكل نقطة على المنحنى
  const chartData = [
    { day: 'السبت', views: '320 مشاهدة', x: 40, y: 150, xPct: 5.7, yPct: 75 },
    { day: 'الأحد', views: '450 مشاهدة', x: 130, y: 135, xPct: 18.5, yPct: 67.5 },
    { day: 'الإثنين', views: '410 مشاهدة', x: 220, y: 140, xPct: 31.4, yPct: 70 },
    { day: 'الثلاثاء', views: '890 مشاهدة', x: 310, y: 65, xPct: 44.2, yPct: 32.5 },
    { day: 'الأربعاء', views: '670 مشاهدة', x: 400, y: 95, xPct: 57.1, yPct: 47.5 },
    { day: 'الخميس', views: '780 مشاهدة', x: 490, y: 75, xPct: 70.0, yPct: 37.5 },
    { day: 'الجمعة', views: '620 مشاهدة', x: 580, y: 105, xPct: 82.8, yPct: 52.5 },
    { day: 'اليوم', views: '950 مشاهدة', x: 660, y: 50, xPct: 94.2, yPct: 25.0 },
  ];

  // النقطة النشطة حالياً (تلقائياً اليوم)
  const [activeData, setActiveData] = useState(chartData[7]);

  return (
    <div className="space-y-6">
      {/* عنوان الصفحة */}
      <div>
        <h2 className="text-2xl font-bold text-[#C85A32]">الصفحة الرئيسية (Dashboard Overview)</h2>
        <p className="text-xs text-stone-500 mt-1">
          نظرة عامة على الإحصائيات النشطة وتفاعل الزبائن والتجار في منصة لحّق حالك
        </p>
      </div>

      {/* كروت الإحصائيات الأربعة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs text-stone-400 font-medium">الـ Stories النشطة حالياً</p>
            <h3 className="text-2xl font-bold text-stone-800 my-1">124</h3>
            <span className="text-[10px] text-emerald-600 font-semibold">↑ 12% عن يوم أمس</span>
          </div>
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center border border-orange-100">
            <Flame className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs text-stone-400 font-medium">إجمالي التجار المسجلين</p>
            <h3 className="text-2xl font-bold text-stone-800 my-1">48</h3>
            <span className="text-[10px] text-stone-400">3+ تجار هذا الأسبوع</span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-100">
            <Store className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs text-stone-400 font-medium">عدد الزبائن المسجلين</p>
            <h3 className="text-2xl font-bold text-stone-800 my-1">1,240</h3>
            <span className="text-[10px] text-emerald-600 font-semibold">↑ 8% نمو أسبوعي</span>
          </div>
          <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center border border-sky-100">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs text-stone-400 font-medium">بلاغات قيد المراجعة</p>
            <h3 className="text-2xl font-bold text-stone-800 my-1">5</h3>
            <span className="text-[10px] text-rose-600 font-semibold">تتطلب اهتماماً فورياً</span>
          </div>
          <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center border border-rose-100">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* القسم السفلي */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* الرسم البياني التفاعلي والمرن */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3 border-stone-100">
            <div className="flex items-center gap-2 text-stone-700 font-bold text-sm">
              <TrendingUp className="w-4 h-4 text-[#C85A32]" />
              <span>إحصائيات تفاعل الزبائن مع الـ Stories (آخر 7 أيام)</span>
            </div>
            <span className="text-[11px] text-stone-400 font-normal">اضغطي أو مرري الماوس على الأيام لرؤية التفاصيل</span>
          </div>

          <div className="h-64 w-full relative pt-4" style={{ direction: 'ltr' }}>
            
            {/* Tooltip الانسيابي والمرن بالحركة عند الانتقال */}
            {activeData && (
              <div
                className="absolute z-20 pointer-events-none transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-full"
                style={{
                  left: `${activeData.xPct}%`,
                  top: `${activeData.yPct}%`,
                  marginTop: '-14px',
                }}
              >
                <div className="bg-[#231510] text-white px-3.5 py-1.5 rounded-xl shadow-xl flex flex-col items-center border border-stone-700/60">
                  <span className="text-[10px] text-stone-400 font-medium">{activeData.day}</span>
                  <span className="text-xs font-bold text-[#E07A5F]">{activeData.views}</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#231510] rotate-45 border-r border-b border-stone-700/60" />
                </div>
              </div>
            )}

            <svg viewBox="0 0 700 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C85A32" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C85A32" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* التظليل أسفل المنحنى */}
              <path
                d="M 40,150 C 85,140 85,135 130,135 C 175,135 175,140 220,140 C 265,140 265,65 310,65 C 355,65 355,95 400,95 C 445,95 445,75 490,75 C 535,75 535,105 580,105 C 625,105 620,50 660,50 L 660,190 L 40,190 Z"
                fill="url(#chartGradient)"
              />

              {/* خط المنحنى المتصل والدقيق */}
              <path
                d="M 40,150 C 85,140 85,135 130,135 C 175,135 175,140 220,140 C 265,140 265,65 310,65 C 355,65 355,95 400,95 C 445,95 445,75 490,75 C 535,75 535,105 580,105 C 625,105 620,50 660,50"
                fill="none"
                stroke="#C85A32"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* الخط العمودي والنقطة المحددة بانسيابية حركة دراماتيكية */}
              {activeData && (
                <g>
                  <line
                    x1={activeData.x}
                    y1="10"
                    x2={activeData.x}
                    y2="185"
                    stroke="#C85A32"
                    strokeDasharray="4 4"
                    strokeWidth="1.5"
                    className="opacity-50 transition-all duration-300 ease-out"
                  />
                  <circle
                    cx={activeData.x}
                    cy={activeData.y}
                    r="8"
                    fill="#C85A32"
                    stroke="#FFF"
                    strokeWidth="3"
                    className="transition-all duration-300 ease-out shadow-lg"
                  />
                </g>
              )}

              {/* نقاط التفاعل بالضغط والتحويم */}
              {chartData.map((pt, idx) => (
                <g 
                  key={idx}
                  onClick={() => setActiveData(pt)}
                  onMouseEnter={() => setActiveData(pt)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    className={`transition-all duration-200 ${
                      activeData?.day === pt.day ? 'fill-[#C85A32]' : 'fill-stone-300 group-hover:fill-[#C85A32]'
                    }`}
                  />
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="25"
                    fill="transparent"
                  />
                </g>
              ))}
            </svg>

            {/* أسماء الأيام مطابقة للاتجاه الأفقي ومستجيبة للضغط */}
            <div className="flex justify-between text-xs text-stone-400 font-medium px-2 mt-2">
              {chartData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveData(item)}
                  onMouseEnter={() => setActiveData(item)}
                  className={`transition-all duration-200 px-2.5 py-1 rounded-xl cursor-pointer ${
                    activeData?.day === item.day
                      ? 'text-[#C85A32] font-bold bg-[#C85A32]/10 scale-105 shadow-xs'
                      : 'hover:text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* أحدث التجار */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-stone-700 font-bold text-sm border-b pb-3 border-stone-100">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>أحدث التجار والانضمامات</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl flex items-center justify-between hover:shadow-xs transition">
              <div>
                <h4 className="font-bold text-sm text-stone-800 flex items-center gap-1.5">
                  <span>بيتزا البرنس</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </h4>
                <p className="text-xs text-stone-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>الوسطى - النصيرات</span>
                </p>
              </div>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-[11px] font-bold">
                مميز 👑
              </span>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-100 rounded-2xl flex items-center justify-between hover:shadow-xs transition">
              <div>
                <h4 className="font-bold text-sm text-stone-800 flex items-center gap-1.5">
                  <span>متجر الأناقة</span>
                  <Store className="w-4 h-4 text-emerald-600" />
                </h4>
                <p className="text-xs text-stone-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>خان يونس - البلد</span>
                </p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[11px] font-bold">
                جديد 🟢
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}