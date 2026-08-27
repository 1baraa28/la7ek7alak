import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Store, Tag, Settings } from 'lucide-react'

const adminLinks = [
  { to: '/admin', label: 'القائمة الرئيسية', icon: LayoutDashboard, end: true },
  { to: '/admin/merchants', label: 'إدارة التجار', icon: Store },
  { to: '/admin/offers', label: 'العروض', icon: Tag },
  { to: '/admin/settings', label: 'الإعدادات', icon: Settings },
]

const merchantLinks = [
  { to: '/merchant', label: 'القائمة الرئيسية', icon: LayoutDashboard, end: true },
  { to: '/merchant/offers', label: 'عروضي', icon: Tag },
  { to: '/merchant/settings', label: 'الإعدادات', icon: Settings },
]

export default function Sidebar() {
  const role = localStorage.getItem('role')
  const links = role === 'admin' ? adminLinks : merchantLinks

  return (
    <aside className="w-64 shrink-0 h-screen bg-card border-l border-black/5 flex flex-col">
      <div className="px-5 py-6 border-b border-black/5">
        <span className="text-lg font-bold text-ink">لحّق حالك</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-brand text-white'
                  : 'text-ink hover:bg-field'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
