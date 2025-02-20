import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { HireTalentPage } from '../pages/HireTalentPage'
import LoginPage from '../pages/LoginPage'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hire-talent" element={<HireTalentPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
