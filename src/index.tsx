import { createRoot } from 'react-dom/client'

import { Chart, registerables } from 'chart.js'

// import { ReactQueryDevtools } from 'react-query/devtools'
// Apps

import './_metronic/assets/fonticon/fonticon.css'
import './_metronic/assets/keenicons/duotone/style.css'
import './_metronic/assets/keenicons/outline/style.css'
import './_metronic/assets/keenicons/solid/style.css'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/

import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import Root from './app/Root';
import { store } from './app/store';
import { Provider } from 'react-redux'


Chart.register(...registerables)

const container = document.getElementById('root')



if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <Root />
    </Provider>
  )
}


