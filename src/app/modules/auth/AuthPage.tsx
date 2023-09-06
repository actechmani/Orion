import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { AuthLayout } from './AuthLayout'
import OnBoardpage from './components/OnBoardpage'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="onboard" element={<OnBoardpage />} />
      <Route path='login' element={<Login />} />
      <Route index element={<Login />} />
    </Route>
  </Routes> 
)

export { AuthPage }
