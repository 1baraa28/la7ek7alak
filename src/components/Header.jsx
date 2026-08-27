import { useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'

export default function Header() {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName') || 'المستخدم'

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('userName')
    navigate('/login', { replace: true })
  }

  return (
    <header className="h-16 shrink-0 bg-card border-b border-black/5 flex items-center justify-between px-6">
      <div />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="w-8 h-8 rounded-full bg-field flex items-center justify-center">
            <User size={16} className="text-brand" />
          </span>
          {userName}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-600"
        >
          <LogOut size={16} />
          تسجيل الخروج
        </button>
      </div>
    </header>
  )
}
