import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminHome from './pages/AdminHome'
import ActiveStories from './pages/ActiveStories'
import MerchantHome from './pages/MerchantHome'
import Settings from './pages/Settings' // السطر الجديد الأول
import DashboardLayout from './components/DashboardLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* تم تعطيل ProtectedRoute مؤقتاً هنا لفتح الواجهات فوراً */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/stories" element={<ActiveStories />} />
          <Route path="/admin/settings" element={<Settings />} /> {/* السطر الجديد الثاني */}
          <Route path="/merchant" element={<MerchantHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin/stories" replace />} />
      </Routes>
    </BrowserRouter>
  )
}