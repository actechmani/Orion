import React, { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { Settings } from '../Screens/Settings/Settings'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Environments from "../Screens/Environments";
import EnvironmentSchedule from "../Screens/Environments/EnvironmentSchedule";
import ClusterGridPreview from '../Screens/Cluster'
import FoundationComponents from '../Screens/Foundation'
import BluePrintGridView from '../Screens/Blueprint'
import ImageService from '../Screens/ImageService'
import ImageServiceUBI from '../Screens/ImageServiceUBI'
import ServiceIndex from '../Screens/Service'
import { Entitlements } from '../Screens/AdminPortal/Entitlements'
import { AuditTrail } from '../Screens/AdminPortal/AuditTrail'
import { AppConfigurationManager } from '../Screens/AdminPortal/AppConfigurationManager'
import ClusterSchedule from '../Screens/ClusterSchedule'
import { DashboardWrapper } from '../Screens/Dashboard/Dashboard'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='settings' element={<Settings />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />

        <Route
          path='environment'
          element={
            <SuspensedView>

              <Environments />
            </SuspensedView>
          }
        />
        <Route
          path='env-schedule'
          element={
            <SuspensedView>
              <EnvironmentSchedule />
            </SuspensedView>
          }
        />
        <Route
          path='cluster-service'
          element={
            <SuspensedView>
              <ClusterGridPreview />
            </SuspensedView>
          }
        />
        <Route
          path='foundation-components'
          element={
            <SuspensedView>
              <FoundationComponents />
            </SuspensedView>
          }
        />
        <Route
          path='blueprint'
          element={
            <SuspensedView>
              <BluePrintGridView />
            </SuspensedView>
          }
        />
        <Route
          path='global-cluster-service'
          element={
            <SuspensedView>
              <ClusterGridPreview />
            </SuspensedView>
          }
        />
        <Route
          path='cluster-schedule'
          element={
            <SuspensedView>
              <ClusterSchedule />
            </SuspensedView>
          }
        />
        <Route
          path='image-service'
          element={
            <SuspensedView>
              <ImageService />
            </SuspensedView>
          }
        />
        <Route
          path='image-service-ubi'
          element={
            <SuspensedView>
              <ImageServiceUBI />
            </SuspensedView>
          }
        />
        <Route
          path='service'
          element={
            <SuspensedView>
              <ServiceIndex />
            </SuspensedView>
          }
        />
        <Route
          path='entitlements'
          element={
            <SuspensedView>
              <Entitlements />
            </SuspensedView>
          }
        />
        <Route
          path='audit-trail'
          element={
            <SuspensedView>
              <AuditTrail />
            </SuspensedView>
          }
        />
        <Route
          path='app-configuration'
          element={
            <SuspensedView>
              <AppConfigurationManager />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
