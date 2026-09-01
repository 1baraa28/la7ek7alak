import React, { useState, useEffect } from 'react';
import { Search, MapPin, Store, Eye, Trash2, ImageOff, RefreshCw, PlusCircle, AlertTriangle } from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

// مكون الفرعي للكارت لحساب العداد التنازلي الحقيقي
function StoryCard({ story, onDeleteClick }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTime = () => {
      const diff = new Date(story.expiresAt) - new Date();
      if (diff <= 0) {
        setTimeLeft('منتهي');
        return;
      }
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      const pad = (n) => String(n).padStart(2, '0');
      setTimeLeft(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [story.expiresAt]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>متبقي {timeLeft}</span>
          </div>
        </div>

        <h3 className="font-bold text-stone-800 text-base mb-2">{story.title}</h3>

        <div className="space-y-1.5 text-xs text-stone-500 mb-3">
          <div className="flex items-center gap-1.5 font-medium text-stone-700">
            <Store className="w-4 h-4 text-stone-400" />
            <span>{story.merchant}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-stone-400" />
            <span>{story.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-4">
          <Eye className="w-4 h-4" />
          <span>{story.views} مشاهدة حالية</span>
        </div>
      </div>

      <button
        onClick={() => onDeleteClick(story)}
        className="w-full py-2.5 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-xs font-semibold hover:bg-rose-100 transition flex items-center justify-center gap-2 cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
        <span>حذف / تجميد الـ Story المخالفة</span>
      </button>
    </div>
  );
}

export default function ActiveStories() {
  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedMerchant, setSelectedMerchant] = useState('');

  // حالة التحكم بنقذة التأكيد المخصصة (Confirm Modal)
  const [storyToDelete, setStoryToDelete] = useState(null);

  const addMockData = () => {
    setStories([
      {
        id: 1,
        title: 'خصم 30% على الوجبات العائلية',
        merchant: 'بيتزا البرنس',
        merchantKey: 'pizza',
        cityKey: 'middle',
        location: 'المحافظة الوسطى - النصيرات',
        expiresAt: new Date(Date.now() + 5 * 3600 * 1000 + 20 * 60 * 1000).toISOString(),
        views: 342,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
      },
      {
        id: 2,
        title: 'وجبة سوبر كومبو + مشروب مجاني',
        merchant: 'مطعم الشلال',
        merchantKey: 'shalal',
        cityKey: 'gaza',
        location: 'غزة - الرمال',
        expiresAt: new Date(Date.now() + 11 * 3600 * 1000 + 45 * 60 * 1000).toISOString(),
        views: 189,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
      },
    ]);
  };

  const confirmDeleteStory = () => {
    if (storyToDelete) {
      setStories(stories.filter((story) => story.id !== storyToDelete.id));
      setStoryToDelete(null);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedMerchant('');
  };

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.merchant.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCity = selectedCity === '' || story.cityKey === selectedCity;
    const matchesMerchant = selectedMerchant === '' || story.merchantKey === selectedMerchant;

    return matchesSearch && matchesCity && matchesMerchant;
  });

  return (
    <div>
      {/* عنوان الصفحة */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#C85A32]">
            إدارة الـ Stories الحية <span className="text-xl font-normal text-stone-600">(Active Stories Moderation)</span>
          </h2>
          <p className="text-stone-500 text-sm mt-1">
            مراقبة جميع العروض المنشورة حالياً في التطبيق ومراجعتها
          </p>
        </div>

        <button
          onClick={addMockData}
          className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 text-[#C85A32]" />
          <span>تعبئة عروض تجريبية</span>
        </button>
      </div>

      {/* شريط الفلترة والبحث */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="relative flex-1 min-w-[220px]">
            <input
              type="text"
              placeholder="ابحث باسم العرض أو المتجر..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#C85A32]"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-3.5" />
          </div>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#C85A32]"
          >
            <option value="">المدينة: كل المدن</option>
            <option value="gaza">غزة</option>
            <option value="khanyounis">خان يونس</option>
            <option value="middle">المحافظة الوسطى</option>
          </select>

          <select
            value={selectedMerchant}
            onChange={(e) => setSelectedMerchant(e.target.value)}
            className="px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-[#C85A32]"
          >
            <option value="">المتجر: جميع التجار</option>
            <option value="pizza">بيتزا البرنس</option>
            <option value="shalal">مطعم الشلال</option>
          </select>
        </div>

        <div className="px-4 py-2 border border-orange-200 bg-orange-50/50 rounded-xl text-xs font-bold text-[#C85A32]">
          إجمالي العروض النشطة : {filteredStories.length}
        </div>
      </div>

      {/* العرض الشرطي */}
      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} onDeleteClick={setStoryToDelete} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-16 text-center border border-stone-100 shadow-sm my-6">
          <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
            <ImageOff className="w-10 h-10" />
          </div>
          <h3 className="text-stone-800 font-bold text-lg mb-1">لا توجد Stories نشطة حالياً</h3>
          <p className="text-stone-500 text-sm max-w-md mx-auto mb-6">
            {stories.length === 0
              ? 'لم يقم التجار بنشر أي عروض حية حتى الآن. ستظهر العروض هنا فور نشرها من قبل التجار.'
              : 'لا توجد عروض تطابق الفلاتر المحددة.'}
          </p>
          {stories.length > 0 && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>إعادة ضبط الفلاتر</span>
            </button>
          )}
        </div>
      )}

      {/* مودال التأكيد المخصص */}
      <ConfirmModal
        isOpen={Boolean(storyToDelete)}
        title="تأكيد حذف العرض"
        message={`هل أنت متأكد من رغبتك في حذف أو تجميد العرض "${storyToDelete?.title}" الخاص بمتجر "${storyToDelete?.merchant}"؟`}
        onConfirm={confirmDeleteStory}
        onClose={() => setStoryToDelete(null)}
      />
    </div>
  );
}