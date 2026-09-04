import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminHome from './pages/AdminHome'
import ActiveStories from './pages/ActiveStories'
import UsersManagement from './pages/UsersManagement'
import Categories from './pages/Categories' // صفحة إدارة الأقسام والمدن الجديدة
import Settings from './pages/Settings'
import MerchantHome from './pages/MerchantHome'
import DashboardLayout from './components/DashboardLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* مسارات لوحة التحكم */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/users" element={<UsersManagement />} />
          <Route path="/admin/stories" element={<ActiveStories />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/merchant" element={<MerchantHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  )
}