import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { ChartsWidget1 } from '../../../_metronic/partials/widgets';
import PieChart from '../../../_metronic/partials/widgets/charts/PieChart';
import { CardDesign } from "../../../_metronic/partials/widgets/mixed/DashboadCardDetails"

const DashboardPage = () => {
    return (
        <>

            <div className='row g-5 g-xl-8'>
                <div className='col-xxl-4'>
                    <div className='row g-5 g-xl-8'>
                        <div className='col-xl-6'>
                            <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
                        </div>
                        <div className='col-xl-6'>
                            <PieChart />
                        </div>
                    </div>
                </div>

            </div>

            <div className='row gy-0 gx-5 gx-xl-8'>
                <CardDesign className='' />

            </div >
        </>
    )
}

const DashboardWrapper = () => {
    const intl = useIntl()
    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
            <DashboardPage />
        </>
    )
}

export { DashboardWrapper }
