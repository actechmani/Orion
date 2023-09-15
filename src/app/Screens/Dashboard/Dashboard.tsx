import {PageTitle} from '../../../_metronic/layout/core'
import {CardDesign, ChartsWidget1} from '../../../_metronic/partials/widgets'
import PieChart from '../../../_metronic/partials/widgets/charts/PieChart'

const DashboardPage = () => {
  return (
    <>
      {/* begin::Row  */}

      <div className='ps-0  pe-0 mb-10'>
        <div className='row'>
          <div className='ps-0 ms-0 col-xs-10 col-sm-8 pe-5'>
            <ChartsWidget1 className=' mb-xl-8' />
          </div>
          <div className='col-xs-10 col-sm-4'>
            <PieChart />
          </div>
        </div>
      </div>

      <div className='row gy-0 gx-5 gx-xl-8'>
        <CardDesign className='' />
      </div>
    </>
  )
}

const DashboardWrapper = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
