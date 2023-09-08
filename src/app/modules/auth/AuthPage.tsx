import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import OnBoardpage from './components/OnBoardpage'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="onboard" element={<OnBoardpage />} />
    </Route>
  </Routes>
)

export { AuthPage }
