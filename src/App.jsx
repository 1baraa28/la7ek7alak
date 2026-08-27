import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminHome from './pages/AdminHome'
import MerchantHome from './pages/MerchantHome'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './components/DashboardLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* مسارات محمية: أدمن فقط */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin" element={<AdminHome />} />
            {/* باقي صفحات الأدمن (إدارة التجار...) من مسؤولية المطور الثاني */}
          </Route>
        </Route>

        {/* مسارات محمية: تاجر فقط */}
        <Route element={<ProtectedRoute allowedRoles={['merchant']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/merchant" element={<MerchantHome />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
