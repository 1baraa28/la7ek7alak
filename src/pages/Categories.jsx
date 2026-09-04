import React, { useState } from 'react';
import { 
  Grid, MapPin, Plus, Trash2, X, 
  UtensilsCrossed, Shirt, Smartphone, ShoppingCart, 
  Sparkles, Gift, BookOpen, Footprints, Watch, 
  Wrench, Stethoscope, Home, Scissors, Coffee, Dumbbell, Car
} from 'lucide-react';

export default function Categories() {
  const [activeTab, setActiveTab] = useState('categories'); // categories أو cities
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [newItemName, setNewItemName] = useState('');
  const [selectedIconName, setSelectedIconName] = useState('Sparkles');

  // قائمة الأقسام الأساسية
  const [categoriesList, setCategoriesList] = useState([
    { id: 1, name: 'مطاعم ومقاهي', count: '18 متجر', iconName: 'UtensilsCrossed' },
    { id: 2, name: 'أزياء وموضة', count: '12 متجر', iconName: 'Shirt' },
    { id: 3, name: 'إلكترونيات وموبايلات', count: '8 متاجر', iconName: 'Smartphone' },
    { id: 4, name: 'سوبرماركت ومواد غذائية', count: '10 متاجر', iconName: 'ShoppingCart' },
  ]);

  // قائمة المدن
  const [citiesList, setCitiesList] = useState([
    { id: 1, name: 'محافظة غزة', regions: 'الرمال، الشجاعية، الزيتون' },
    { id: 2, name: 'المحافظة الوسطى', regions: 'النصيرات، دير البلح، البريج' },
    { id: 3, name: 'محافظة خان يونس', regions: 'البلد، ابراسين، عبسان' },
    { id: 4, name: 'محافظة رفح', regions: 'الشابورة، تل السلطان، الحي السعودي' },
  ]);

  // قاموس يربط اسم الأيقونة بمكونها الحقيقي من Lucide
  const iconMap = {
    Sparkles, UtensilsCrossed, Shirt, Smartphone, ShoppingCart,
    Gift, BookOpen, Footprints, Watch, Wrench, Stethoscope,
    Home, Scissors, Coffee, Dumbbell, Car
  };

  // الأيقونات المتاحة للاختيار في النافذة المنبثقة
  const availableIconsList = [
    { name: 'Sparkles', label: 'عام' },
    { name: 'UtensilsCrossed', label: 'مطعم' },
    { name: 'Shirt', label: 'ملابس' },
    { name: 'Smartphone', label: 'موبايل' },
    { name: 'ShoppingCart', label: 'سوبرماركت' },
    { name: 'Gift', label: 'هدايا' },
    { name: 'BookOpen', label: 'تعليم' },
    { name: 'Footprints', label: 'أحذية' },
    { name: 'Watch', label: 'اكسسوارات' },
    { name: 'Wrench', label: 'صيانة' },
    { name: 'Stethoscope', label: 'صحة' },
    { name: 'Home', label: 'منزل' },
    { name: 'Scissors', label: 'تجميل' },
    { name: 'Coffee', label: 'مقهى' },
    { name: 'Dumbbell', label: 'رياضة' },
    { name: 'Car', label: 'سيارات' },
  ];

  // دالة إضافة عنصر جديد
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    if (activeTab === 'categories') {
      const newCat = {
        id: Date.now(),
        name: newItemName,
        count: '0 متجر',
        iconName: selectedIconName, // حفظ اسم الأيقونة المختارة
      };
      setCategoriesList([newCat, ...categoriesList]);
    } else {
      const newCity = {
        id: Date.now(),
        name: newItemName,
        regions: 'قيد التحديد',
      };
      setCitiesList([newCity, ...citiesList]);
    }

    setNewItemName('');
    setSelectedIconName('Sparkles');
    setIsModalOpen(false);
  };

  // دالة حذف عنصر
  const handleDeleteItem = (id) => {
    if (activeTab === 'categories') {
      setCategoriesList(categoriesList.filter(item => item.id !== id));
    } else {
      setCitiesList(citiesList.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6 relative">
      
      {/* رأس الصفحة وزر الإضافة */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#C85A32]">إدارة الأقسام والمدن</h2>
          <p className="text-xs text-stone-500 mt-1">
            التحكم بتصنيفات المتاجر في التطبيق وتوزيع المدن والمناطق الجغرافية
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C85A32] hover:bg-[#b04d2a] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{activeTab === 'categories' ? 'إضافة قسم جديد' : 'إضافة مدينة جديدة'}</span>
        </button>
      </div>

      {/* أزرار التبديل بين الأقسام والمدن */}
      <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-2">
        <button 
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'categories' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>أقسام المتاجر ({categoriesList.length})</span>
        </button>
        <button 
          onClick={() => setActiveTab('cities')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'cities' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>المدن والمناطق ({citiesList.length})</span>
        </button>
      </div>

      {/* عرض البيانات بناءً على التبويب النشط */}
      {activeTab === 'categories' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesList.map((cat) => {
            // استخراج مكون الأيقونة بناءً على اسمها المخزن
            const IconComponent = iconMap[cat.iconName] || Sparkles;
            return (
              <div key={cat.id} className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-50 text-[#C85A32] rounded-2xl flex items-center justify-center border border-orange-100">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 text-sm">{cat.name}</h3>
                    <p className="text-xs text-stone-400 mt-0.5">{cat.count}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleDeleteItem(cat.id)}
                  className="text-stone-300 hover:text-rose-500 p-1.5 rounded-lg transition cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-100 text-xs text-stone-500 font-semibold">
                <th className="p-4">اسم المدينة / المحافظة</th>
                <th className="p-4">المناطق التابعة</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs text-stone-700">
              {citiesList.map((city) => (
                <tr key={city.id} className="hover:bg-stone-50/50 transition">
                  <td className="p-4 font-bold text-stone-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C85A32]" />
                    <span>{city.name}</span>
                  </td>
                  <td className="p-4 text-stone-500">{city.regions}</td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => handleDeleteItem(city.id)}
                      className="px-3 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg font-semibold transition cursor-pointer"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* نافذة الإضافة المنبثقة (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 border-stone-100">
              <h3 className="font-bold text-stone-800 text-base">
                {activeTab === 'categories' ? 'إضافة قسم جديد' : 'إضافة مدينة جديدة'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">
                  {activeTab === 'categories' ? 'اسم القسم' : 'اسم المدينة'}
                </label>
                <input 
                  type="text" 
                  value={newItemName} 
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder={activeTab === 'categories' ? 'مثال: مكياج، عطور...' : 'مثال: محافظة رفح...'} 
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              {/* اختيار الأيقونة يظهر فقط عند إضافة قسم جديد */}
              {activeTab === 'categories' && (
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-2">
                    اختر أيقونة القسم المناسبة:
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1 border border-stone-200 rounded-xl bg-stone-50">
                    {availableIconsList.map((item) => {
                      const IconComp = iconMap[item.name];
                      const isSelected = selectedIconName === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setSelectedIconName(item.name)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border transition cursor-pointer ${
                            isSelected 
                              ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-sm' 
                              : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <IconComp className="w-5 h-5 mb-1" />
                          <span className="text-[10px] truncate w-full text-center">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  إلغاء
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#C85A32] hover:bg-[#b04d2a] text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                >
                  حفظ وإضافة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}