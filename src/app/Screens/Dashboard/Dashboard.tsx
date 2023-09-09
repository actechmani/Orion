import { useEffect } from 'react'
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

import {useSelector, useDispatch} from 'react-redux';
import {getTenantList} from '../../store/reducer/tenentReducer';



const DashboardPage = () => {
    const dispatch = useDispatch();
    const tenantList = useSelector((state:any) => state.tenant.tenants)

    useEffect(() => {
        // We have to show toolbar only for dashboard page
        document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
        return () => {
            document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
        }
    }, []);

    useEffect(() => {
        dispatch(getTenantList());
        console.log("tenantList", tenantList)
    }, [dispatch])

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
    
    return (
        <>
            <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
            <DashboardPage />
        </>
    )
}

export { DashboardWrapper }
