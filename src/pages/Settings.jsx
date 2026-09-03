import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Coins, 
  Clock, 
  FileText, 
  Bell, 
  Save, 
  CheckCircle2, 
  RotateCcw,
  Sliders,
  Percent,
  Lock,
  Phone,
  Share2,
  Smartphone,
  MapPin,
  HardDrive,
  Upload,
  Image as ImageIcon,
  Trash2
} from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [showToast, setShowToast] = useState(false);

  // --- 1. إعدادات عام والنظام ---
  const [platformName, setPlatformName] = useState('لحّق حالك - Lahaq Halak');
  const [supportEmail, setSupportEmail] = useState('support@lahaqhalak.com');
  const [whatsappNumber, setWhatsappNumber] = useState('+970599000000');
  const [facebookUrl, setFacebookUrl] = useState('https://facebook.com/lahaqhalak');
  const [instagramUrl, setInstagramUrl] = useState('https://instagram.com/lahaqhalak');
  
  const [defaultCity, setDefaultCity] = useState('gaza');
  const [minAppVersion, setMinAppVersion] = useState('1.0.0');
  const [maxImageSize, setMaxImageSize] = useState('5');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);

  // --- 2. الأمور المالية والعمولات ---
  const [currency, setCurrency] = useState('ILS');
  const [commissionRate, setCommissionRate] = useState('5');
  const [minWithdrawal, setMinWithdrawal] = useState('100');
  const [maxWithdrawal, setMaxWithdrawal] = useState('1000');
  const [featuredStoryFee, setFeaturedStoryFee] = useState('10');
  const [commissionType, setCommissionType] = useState('percentage');
  const [digitalWalletEnabled, setDigitalWalletEnabled] = useState(true);

  // --- 3. الـ Stories والرقابة ---
  const [storyDuration, setStoryDuration] = useState('24');
  const [autoBlock, setAutoBlock] = useState(true);
  const [maxReports, setMaxReports] = useState('5');

  // --- 4. سياسة الخصوصية والشروط ---
  const [termsText, setTermsText] = useState('شروط وأحكام استخدام منصة لحّق حالك للتجار والزبائن...');
  const [privacyText, setPrivacyText] = useState('سياسة الخصوصية وحماية بيانات المستخدمين...');

  // --- 5. الإشعارات والتنبيهات ---
  const [emailNotifyNewReport, setEmailNotifyNewReport] = useState(true);
  const [emailNotifyNewMerchant, setEmailNotifyNewMerchant] = useState(true);
  const [pushNotifyOffers, setPushNotifyOffers] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const tabs = [
    { id: 'general', label: 'عام والنظام', icon: Globe },
    { id: 'financial', label: 'الأمور المالية', icon: Coins },
    { id: 'stories', label: 'الـ Stories والرقابة', icon: Clock },
    { id: 'privacy', label: 'الشروط والسياسة', icon: FileText },
    { id: 'notifications', label: 'الإشعارات والتنبيهات', icon: Bell },
  ];

  return (
    <div className="space-y-6 max-w-5xl pb-12 dir-rtl text-right">
      {/* هيدر الصفحة */}
      <div className="flex items-center gap-2.5 border-b border-stone-200/80 pb-4">
        <div className="w-9 h-9 rounded-xl bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-stone-800">
            إعدادات المنظومة <span className="text-xs font-normal text-stone-400 mr-1">(System Settings)</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">إدارة تفضيلات المنصة والسياسات العامة</p>
        </div>
      </div>

      {/* إشعار الحفظ */}
      {showToast && (
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl text-xs font-bold shadow-xs animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>تم حفظ كافة التغييرات بنجاح!</span>
        </div>
      )}

      {/* كروت التبويبات العلوية */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`p-3.5 rounded-2xl border text-right transition flex flex-col justify-between gap-3 cursor-pointer ${
                isActive
                  ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-md'
                  : 'bg-white text-stone-700 border-stone-200/80 hover:bg-stone-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#C85A32]'}`} />
              <span className="text-xs font-bold">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* نموذج البيانات */}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-white rounded-2xl border border-stone-200/70 shadow-xs p-6">
          
          {/* 1. تبويب: عام والنظام */}
          {activeTab === 'general' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* قسم الهوية والاسم */}
              <div>
                <h3 className="font-bold text-stone-800 text-xs border-b border-stone-100 pb-2.5 mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#C85A32]" />
                  الهوية الأساسية والشعار
                </h3>

                <div className="space-y-5">
                  {/* كارت رفع الشعار */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-stone-50/50 border border-stone-200/70 rounded-2xl">
                    <div className="relative w-20 h-20 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center p-2 shrink-0 overflow-hidden">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Platform Logo" className="w-full h-full object-contain" />
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-stone-400">
                          <ImageIcon className="w-6 h-6 text-stone-300" />
                          <span className="text-[10px] font-semibold text-stone-400">بدون شعار</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 text-right flex-1 w-full">
                      <div>
                        <h4 className="text-xs font-bold text-stone-800">شعار المنصة (Platform Logo)</h4>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          يُفضل رفع صورة بصيغة PNG أو SVG ذات خلفية شفافة بحجم 512×512px.
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <label className="inline-flex items-center gap-1.5 cursor-pointer bg-white border border-stone-200/80 hover:border-[#C85A32] text-stone-700 hover:text-[#C85A32] text-[11px] font-bold py-1.5 px-3.5 rounded-xl transition shadow-2xs">
                          <Upload className="w-3.5 h-3.5 text-[#C85A32]" />
                          <span>{logoPreview ? 'تغيير الشعار' : 'رفع شعار جديد'}</span>
                          <input type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                        </label>

                        {logoPreview && (
                          <button
                            type="button"
                            onClick={() => setLogoPreview(null)}
                            className="inline-flex items-center gap-1 bg-red-50 hover:bg-red-100 border border-red-200/70 text-red-600 text-[11px] font-bold py-1.5 px-3 rounded-xl transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>إزالة</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">اسم المنصة</label>
                      <input
                        type="text"
                        value={platformName}
                        onChange={(e) => setPlatformName(e.target.value)}
                        className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">البريد الإلكتروني للدعم الفني</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={supportEmail}
                          onChange={(e) => setSupportEmail(e.target.value)}
                          className="w-full pr-10 pl-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* قسم بيانات التواصل */}
              <div>
                <h3 className="font-bold text-stone-800 text-xs border-b border-stone-100 pb-2.5 mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#C85A32]" />
                  بيانات التواصل الاجتماعي
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">رقم واتساب الدعم</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-emerald-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        className="w-full pr-10 pl-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">رابط فيسبوك</label>
                    <input
                      type="url"
                      value={facebookUrl}
                      onChange={(e) => setFacebookUrl(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">رابط انستغرام</label>
                    <input
                      type="url"
                      value={instagramUrl}
                      onChange={(e) => setInstagramUrl(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>
              </div>

              {/* قسم تشغيل التطبيق */}
              <div>
                <h3 className="font-bold text-stone-800 text-xs border-b border-stone-100 pb-2.5 mb-4 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#C85A32]" />
                  تفضيلات وتشغيل التطبيق
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>المدينة الافتراضية</span>
                    </label>
                    <select
                      value={defaultCity}
                      onChange={(e) => setDefaultCity(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    >
                      <option value="gaza">غزة</option>
                      <option value="khanyounis">خانيونس</option>
                      <option value="rafah">رفح</option>
                      <option value="deiralbalah">دير البلح</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-stone-400" />
                      <span>أدنى إصدار للتطبيق (Min Version)</span>
                    </label>
                    <input
                      type="text"
                      value={minAppVersion}
                      onChange={(e) => setMinAppVersion(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1">
                      <HardDrive className="w-3.5 h-3.5 text-stone-400" />
                      <span>الحد الأقصى لرفع الصور (MB)</span>
                    </label>
                    <input
                      type="number"
                      value={maxImageSize}
                      onChange={(e) => setMaxImageSize(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>
              </div>

              {/* وضع الصيانة المعدل */}
              <div className="flex items-center justify-between p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl mt-2">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    تفعيل وضع الصيانة المؤقت
                  </h4>
                  <p className="text-amber-700 text-[11px]">إيقاف وصول الزبائن والتجار للتطبيق مؤقتاً لأغراض التحديث</p>
                </div>
                <button
                  type="button"
                  dir="ltr"
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    maintenanceMode ? 'bg-[#C85A32]' : 'bg-stone-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      maintenanceMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          )}

          {/* 2. تبويب: الأمور المالية */}
          {activeTab === 'financial' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-bold text-stone-800 text-sm border-b border-stone-100 pb-3 flex items-center gap-2">
                <Coins className="w-4 h-4 text-[#C85A32]" />
                إعدادات المعاملات والعمولات المالية
              </h3>

              {/* الصف الأول: العملة، عمولة المنصة، الحد الأدنى للرصيد */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">العملة الافتراضية</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="ILS">شيكل (₪)</option>
                    <option value="USD">دولار ($)</option>
                    <option value="JOD">دينار (JOD)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">عمولة المنصة (%)</label>
                  <div className="relative">
                    <Percent className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="number"
                      value={commissionRate}
                      onChange={(e) => setCommissionRate(e.target.value)}
                      className="w-full pr-10 pl-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">الحد الأدنى لطلب السحب</label>
                  <input
                    type="number"
                    value={minWithdrawal}
                    onChange={(e) => setMinWithdrawal(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
              </div>

              {/* الصف الثاني: الحد الأقصى للسحب وتكلفة تمييز الستوري */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">الحد الأقصى لسحب الأرباح (للمرة الواحدة)</label>
                  <input
                    type="number"
                    value={maxWithdrawal}
                    onChange={(e) => setMaxWithdrawal(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                  />
                  <p className="text-[11px] text-stone-400 mt-1">السقف الأعلى المسموح للتاجر سحبه في الطلب الواحد.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">تكلفة تثبيت / تمييز الـ Story المميزة</label>
                  <input
                    type="number"
                    value={featuredStoryFee}
                    onChange={(e) => setFeaturedStoryFee(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                  />
                  <p className="text-[11px] text-stone-400 mt-1">المبلغ المخصوم مقابل ظهور الستوري في الواجهة المميزة.</p>
                </div>
              </div>

              {/* الصف الثالث: طريقة احتساب العمولة وتفعيل الدفع الإلكتروني */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-2">طريقة احتساب العمولات</label>
                  <select
                    value={commissionType}
                    onChange={(e) => setCommissionType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="percentage">نسبة مئوية من قيمة العرض</option>
                    <option value="fixed">مبلغ ثابت لكل إعلان أو حجز</option>
                  </select>
                  <p className="text-[11px] text-stone-400 mt-1">آلية اقتطاع أرباح المنصة من حسابات التجار.</p>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-stone-50/60 border border-stone-200/70 rounded-xl mt-auto">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-stone-800 text-xs">تفعيل المحافظ الرقمية والدفع الإلكتروني</h4>
                    <p className="text-stone-500 text-[11px]">السماح للتاجر باستقبال المدفوعات إلكترونياً عبر التطبيق</p>
                  </div>
                  <button
                    type="button"
                    dir="ltr"
                    onClick={() => setDigitalWalletEnabled(!digitalWalletEnabled)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      digitalWalletEnabled ? 'bg-[#C85A32]' : 'bg-stone-300'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                        digitalWalletEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. تبويب: الـ Stories والرقابة */}
          {activeTab === 'stories' && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-bold text-stone-800 text-sm border-b border-stone-100 pb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C85A32]" />
                سياسات العروض والبلاغات
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <label className="font-bold text-stone-800 text-xs block">مدة عرض الـ Story الافتراضية</label>
                  <p className="text-stone-400 text-[11px] mt-0.5">الزمن المتبقي قبل أرشفة العرض تلقائياً</p>
                </div>
                <select
                  value={storyDuration}
                  onChange={(e) => setStoryDuration(e.target.value)}
                  className="w-full sm:w-44 px-3 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                >
                  <option value="12">12 ساعة</option>
                  <option value="24">24 ساعة</option>
                  <option value="48">48 ساعة</option>
                </select>
              </div>

              {/* زر التوجل للقصص المعدل */}
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-stone-50/60 border border-stone-100">
                <div>
                  <h4 className="font-bold text-stone-800 text-xs">حظر الـ Story تلقائياً عند البلاغات</h4>
                  <p className="text-stone-500 text-[11px]">إخفاء العرض فور وصول البلاغات للحد الأقصى</p>
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
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      autoBlock ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <label className="font-bold text-stone-800 text-xs block">حد البلاغات للإيقاف التلقائي</label>
                <select
                  value={maxReports}
                  onChange={(e) => setMaxReports(e.target.value)}
                  className="w-full sm:w-44 px-3 py-2 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                >
                  <option value="3">3 بلاغات</option>
                  <option value="5">5 بلاغات</option>
                  <option value="10">10 بلاغات</option>
                </select>
              </div>
            </div>
          )}

          {/* 4. تبويب: سياسة الخصوصية والشروط */}
          {activeTab === 'privacy' && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-bold text-stone-800 text-sm border-b border-stone-100 pb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C85A32]" />
                الشروط وسياسة الاستخدام
              </h3>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">شروط وأحكام الاستخدام (Terms of Service)</label>
                <textarea
                  rows="4"
                  value={termsText}
                  onChange={(e) => setTermsText(e.target.value)}
                  className="w-full p-3 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">سياسة الخصوصية (Privacy Policy)</label>
                <textarea
                  rows="4"
                  value={privacyText}
                  onChange={(e) => setPrivacyText(e.target.value)}
                  className="w-full p-3 bg-stone-50/50 border border-stone-200 rounded-xl text-xs text-stone-800 text-right focus:outline-none focus:border-[#C85A32]"
                />
              </div>
            </div>
          )}

          {/* 5. تبويب: الإشعارات والتنبيهات */}
          {activeTab === 'notifications' && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-bold text-stone-800 text-sm border-b border-stone-100 pb-3 flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#C85A32]" />
                تنبيهات النظام والبريد
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-stone-50/60 border border-stone-100">
                  <input
                    type="checkbox"
                    checked={emailNotifyNewReport}
                    onChange={(e) => setEmailNotifyNewReport(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32] rounded"
                  />
                  <span className="text-xs text-stone-700 font-medium">إرسال بريد إلكتروني للأدمن فور وصول بلاغ جديد</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-stone-50/60 border border-stone-100">
                  <input
                    type="checkbox"
                    checked={emailNotifyNewMerchant}
                    onChange={(e) => setEmailNotifyNewMerchant(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32] rounded"
                  />
                  <span className="text-xs text-stone-700 font-medium">تنبيه البريد عند تسجيل تاجر جديد يتطلب المراجعة</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-stone-50/60 border border-stone-100">
                  <input
                    type="checkbox"
                    checked={pushNotifyOffers}
                    onChange={(e) => setPushNotifyOffers(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32] rounded"
                  />
                  <span className="text-xs text-stone-700 font-medium">إرسال إشعارات لحظية (Push Notifications) للزبائن عند إطلاق عروض قصيرة</span>
                </label>
              </div>
            </div>
          )}

        </div>

        {/* أزرار الحفظ والإلغاء */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إلغاء</span>
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 bg-[#2A2421] hover:bg-black text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Save className="w-3.5 h-3.5 text-amber-400" />
            <span>حفظ الإعدادات</span>
          </button>
        </div>
      </form>
    </div>
  );
}