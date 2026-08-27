import { Navigate, useLocation } from 'react-router-dom'

/**
 * يحمي المسار من الدخول بدون تسجيل دخول، ويتحقق من الصلاحية (Role) إذا لزم.
 * الاستخدام:
 *   <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
 *     <Route path="/admin" element={<AdminPage />} />
 *   </Route>
 */
import { Outlet } from 'react-router-dom'

export default function ProtectedRoute({ allowedRoles }) {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
