import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
    ListsWidget4,
    ListsWidget5,
    TablesWidget10,
    MixedWidget8,
    MixedWidget5,
    ChartsWidget1,
    CardDesign,


} from '../../../_metronic/partials/widgets';
import ApexChart from '../../../_metronic/partials/widgets/charts/ChartsWidget4';
import PieChart from '../../../_metronic/partials/widgets/charts/PieChart';


const DashboardPage = () => {
    useEffect(() => {
        // We have to show toolbar only for dashboard page
        document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
        return () => {
            document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
        }
    }, [])

    return (
        <>
            {/* begin::Row  */}
            <div className='row g-5 g-xl-8'>

                {/* begin::Col  */}
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
