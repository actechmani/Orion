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


                <CardDesign className='card-xl-stretch mb-5 mb-xl-8'
                />



                {/* <div className='col-xl-4'>
                    <MixedWidget5
                        className='card-xl-stretch mb-5 mb-xl-0'
                        image='/media/svg/brand-logos/telegram.svg'
                        time='10 days ago'
                        title='ReactJS Admin Theme'
                        description='
Keenthemes uses the latest and greatest<br/>
frameworks for complete modernization.
'
                    />
                </div>

                <div className='col-xl-4'>
                    <MixedWidget5
                        className='card-xl-stretch mb-5 mb-xl-0'
                        image='/media/svg/brand-logos/vimeo.svg'
                        time='2 weeks ago'
                        title='KT.com - High Quality Templates'
                        description='
Easy to use, incredibly flexible and secure<br/>
with in-depth documentation that outlines.
'
                    />
                </div> */}

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
