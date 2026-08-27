import React, { useState } from 'react';

// أيقونة العين والقفل المدمجة
function EyeLockIcon() {
  return (
    <div className="relative w-5 h-5 text-black flex items-center justify-center">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
      <svg className="w-3 h-3 absolute -bottom-1 -right-1 fill-current stroke-[#faf6f0] stroke-1" viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    </div>
  );
}

export default function FormField({ 
  label, 
  type = "text", 
  isPassword = false, 
  defaultValue, 
  placeholder,
  borderColor = "border-[#e8dfd5]"
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-xs font-bold text-[#301C12] mb-2 text-right">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full bg-[#faf6f0] text-[#301C12] text-sm rounded-xl px-4 py-3 ${isPassword ? 'pl-12' : ''} outline-none border ${borderColor} text-right focus:border-[#8E5439]`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-1 focus:outline-none hover:opacity-75"
          >
            <EyeLockIcon />
          </button>
        )}
      </div>
    </div>
  );
}