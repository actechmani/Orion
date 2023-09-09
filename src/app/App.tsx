import { Suspense } from 'react'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { ThemeModeProvider } from '../_metronic/partials/layout/theme-mode/ThemeModeProvider'
import AppRoutes from './routing/AppRoutes'




const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
    
      <LayoutProvider>
          <ThemeModeProvider>

            <AppRoutes />
            <MasterInit />

          </ThemeModeProvider>
        </LayoutProvider>
    </Suspense>
  )
}

export { App }
