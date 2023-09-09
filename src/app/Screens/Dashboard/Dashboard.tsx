import { PageTitle } from '../../../_metronic/layout/core'
import { CardDesign, ChartsWidget1 } from '../../../_metronic/partials/widgets';
import PieChart from '../../../_metronic/partials/widgets/charts/PieChart';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTenantList } from '../../store/reducer/tenentReducer';



const DashboardPage = () => {
    const dispatch = useDispatch();
    const tenantList = useSelector((state: any) => state.tenant.tenants)



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
