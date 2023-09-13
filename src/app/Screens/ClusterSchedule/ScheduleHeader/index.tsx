import { Link, useLocation } from "react-router-dom";
import { PageLink } from "../../../../_metronic/layout/core";
const ScheduleHeader = () => {
    const location = useLocation()

    // const profileBreadCrumbs: Array<PageLink> = [
    //     {
    //         title: 'Profile',
    //         path: '/crafted/pages/profile/overview',
    //         isSeparator: false,
    //         isActive: false,
    //     },
    //     {
    //         title: '',
    //         path: '',
    //         isSeparator: true,
    //         isActive: false,
    //     },
    // ]
    return (
        <div className='card mb-5 mb-xl-10'>

            <div className='card-body pt-9 pb-0'>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                    <div className='me-7 mb-4'>
                        <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>

                            <h3 className='card-title align-items-start flex-column'>Node Group Schedule
                            </h3>

                        </div>
                    </div>




                </div>

                <div className='d-flex overflow-auto h-55px'>
                    <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                        <li className='nav-item'>
                            <Link
                                className={
                                    `nav-link text-active-primary me-6 ` +
                                    (location.pathname === '/cluster-schedule/schedular' && 'active')
                                }
                                to='schedular'
                            >
                                Schedules
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className={
                                    `nav-link text-active-primary me-6 ` +
                                    (location.pathname === '/cluster-schedule/Events' && 'active')
                                }
                                to='/cluster-schedule/Events'
                            >
                                Events
                            </Link>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
    )
}

export { ScheduleHeader }