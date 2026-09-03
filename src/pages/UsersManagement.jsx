import React, { useState } from 'react';
import { Store, Users, Search, CheckCircle, XCircle, ShieldAlert, UserPlus, X } from 'lucide-react';

export default function UsersManagement() {
  const [activeTab, setActiveTab] = useState('merchants');
  const [searchQuery, setSearchQuery] = useState('');
  
  // حالة التحكم في ظهور النافذة المنبثقة (Modal) للإضافة
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // حقول نموذج الإضافة الجديد
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('تاجر');
  const [newLocation, setNewLocation] = useState('');

  // قاعدة بيانات وهمية تفاعلية قابلة للتحديث
  const [usersList, setUsersList] = useState([
    { id: 1, name: 'بيتزا البرنس', type: 'تاجر', category: 'merchants', location: 'الوسطى - النصيرات', status: 'مميز', date: '2026-08-20' },
    { id: 2, name: 'متجر الأناقة', type: 'تاجر', category: 'merchants', location: 'خان يونس - البلد', status: 'جديد', date: '2026-08-25' },
    { id: 3, name: 'محمد أحمد', type: 'زبون', category: 'customers', location: 'غزة - رمال', status: 'نشط', date: '2026-08-10' },
    { id: 4, name: 'مطعم الشلال', type: 'تاجر', category: 'pending', location: 'غزة - الزيتون', status: 'معلق', date: '2026-09-01' },
    { id: 5, name: 'سارة خالد', type: 'زبون', category: 'customers', location: 'رفح - الشابورة', status: 'نشط', date: '2026-08-15' },
  ]);

  // دالة تغيير حالة المستخدم (موافقة / حظر)
  const handleUpdateStatus = (id, newStatus) => {
    setUsersList(usersList.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  // دالة إضافة مستخدم أو تاجر جديد
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newLocation.trim()) return;

    const newUser = {
      id: Date.now(),
      name: newName,
      type: newType,
      location: newLocation,
      status: newType === 'تاجر' ? 'جديد' : 'نشط',
      date: new Date().toISOString().split('T')[0],
    };

    setUsersList([newUser, ...usersList]);
    setNewName('');
    setNewLocation('');
    setIsModalOpen(false); // إغلاق النافذة بعد الإضافة
  };

  // فلترة المستخدمين حسب التبويب النشط وحسب نص البحث
  const filteredUsers = usersList.filter(user => {
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'merchants' ? user.type === 'تاجر' && user.status !== 'معلق' :
      activeTab === 'customers' ? user.type === 'زبون' :
      activeTab === 'pending' ? user.status === 'معلق' : true;

    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 relative">
      
      {/* رأس الصفحة وزر الإضافة */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#C85A32]">إدارة المستخدمين والتجار</h2>
          <p className="text-xs text-stone-500 mt-1">
            متابعة واعتماد حسابات التجار، إدارة الزبائن، والتحكم بالصلاحيات
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C85A32] hover:bg-[#b04d2a] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span>إضافة تاجر/مستخدم جديد</span>
        </button>
      </div>

      {/* شريط الفلاتر والبحث */}
      <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
          <button 
            onClick={() => setActiveTab('merchants')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'merchants' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            التجار النشطون
          </button>
          <button 
            onClick={() => setActiveTab('customers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'customers' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            الزبائن
          </button>
          <button 
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'pending' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            الطلبات المعلقة ⏳
          </button>
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeTab === 'all' ? 'bg-[#C85A32] text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            الكل
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث بالاسم أو المنطقة..." 
            className="w-full pr-10 pl-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C85A32]"
          />
        </div>
      </div>

      {/* جدول عرض المستخدمين */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100 text-xs text-stone-500 font-semibold">
              <th className="p-4">الاسم / المتجر</th>
              <th className="p-4">النوع</th>
              <th className="p-4">المنطقة</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">تاريخ الانضمام</th>
              <th className="p-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-xs text-stone-700">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-stone-50/50 transition">
                  <td className="p-4 font-bold text-stone-800">{user.name}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg font-semibold ${user.type === 'تاجر' ? 'bg-orange-50 text-[#C85A32]' : 'bg-sky-50 text-sky-600'}`}>
                      {user.type}
                    </span>
                  </td>
                  <td className="p-4 text-stone-500">{user.location}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md font-medium ${
                      user.status === 'معلق' ? 'bg-amber-100 text-amber-800' :
                      user.status === 'محظور' ? 'bg-rose-100 text-rose-800' :
                      'bg-stone-100 text-stone-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-stone-400">{user.date}</td>
                  <td className="p-4 text-center space-x-2 space-x-reverse">
                    {user.status === 'معلق' ? (
                      <button 
                        onClick={() => handleUpdateStatus(user.id, 'نشط')}
                        className="px-3 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg font-semibold transition cursor-pointer"
                      >
                        موافقة واعتماد
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleUpdateStatus(user.id, user.status === 'محظور' ? 'نشط' : 'محظور')}
                        className={`px-3 py-1 rounded-lg font-semibold transition cursor-pointer ${
                          user.status === 'محظور' ? 'bg-sky-50 text-sky-600 hover:bg-sky-100' : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                        }`}
                      >
                        {user.status === 'محظور' ? 'إلغاء الحظر' : 'حظر'}
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-8 text-center text-stone-400">
                  لا توجد نتائج مطابقة للبحث أو الفلتر الحالي.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* نافذة الإضافة المنبثقة (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b pb-3 border-stone-100">
              <h3 className="font-bold text-stone-800 text-base">إضافة تاجر أو مستخدم جديد</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">اسم المستخدم / المتجر</label>
                <input 
                  type="text" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="أدخل الاسم هنا..." 
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">نوع الحساب</label>
                <select 
                  value={newType} 
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C85A32]"
                >
                  <option value="تاجر">تاجر</option>
                  <option value="زبون">زبون</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">المنطقة / المدينة</label>
                <input 
                  type="text" 
                  value={newLocation} 
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="مثال: غزة - الرمان" 
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C85A32]"
                />
              </div>

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