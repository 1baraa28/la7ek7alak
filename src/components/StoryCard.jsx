import React, { useState, useEffect } from 'react';

export default function StoryCard({ story, onDelete }) {
  const [timeLeft, setTimeLeft] = useState('');

  // العداد التنازلي الحقيقي الـ 24 ساعة
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(story.expiresAt) - new Date();
      
      if (difference <= 0) {
        setTimeLeft('منتهي');
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const pad = (num) => String(num).padStart(2, '0');
      setTimeLeft(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [story.expiresAt]);

  return (
    <div className="bg-white rounded-2xl border border-[#e8dfd5] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      {/* رأس الكارت */}
      <div className="p-3.5 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center space-x-3 space-x-reverse">
          <img 
            src={story.merchantAvatar} 
            alt={story.merchantName} 
            className="w-9 h-9 rounded-full object-cover border border-[#8E5439]"
          />
          <div>
            <h4 className="text-xs font-bold text-[#301C12]">{story.merchantName}</h4>
            <span className="text-[10px] text-gray-500">{story.city}</span>
          </div>
        </div>
        <span className="bg-[#8E5439]/10 text-[#8E5439] text-[11px] font-bold px-2.5 py-1 rounded-full">
          خصم {story.discount}
        </span>
      </div>

      {/* صورة العرض والعداد التنازلي */}
      <div className="relative h-48 bg-gray-100">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1 space-x-reverse">
          <span>⏳</span>
          <span>{timeLeft}</span>
        </div>
      </div>

      {/* الوصف وأزرار التحكم */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs text-[#301C12] font-medium leading-relaxed">
          {story.title}
        </p>

        <button
          onClick={() => onDelete(story.id)}
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold py-2 rounded-xl transition duration-150 flex items-center justify-center space-x-1 space-x-reverse cursor-pointer"
        >
          <span>🗑️</span>
          <span>حذف العرض (تجميد)</span>
        </button>
      </div>
    </div>
  );
}