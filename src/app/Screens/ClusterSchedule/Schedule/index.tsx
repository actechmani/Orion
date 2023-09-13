import { KTIcon } from '../../../../_metronic/helpers';

const SchedularGrid = () => {
    return (<>

        <div className={`card`}>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                </h3>
                <div className='card-toolbar'>
                    <a href='#' className='btn btn-sm btn-light-primary'>
                        <KTIcon iconName='plus' className='fs-2' />
                        Add Schedule
                    </a>
                </div>
            </div>

            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table align-middle gs-0 gy-4'>
                        <thead>
                            <tr className='fw-bold text-muted bg-light'>
                                <th className='ps-4 min-w-150px rounded-start'> Schedule Name</th>
                                <th className='min-w-125px'>Cron Pattern</th>
                                <th className='min-w-125px'>Node Groups	</th>
                                <th className='min-w-150px'>Last Run</th>
                                <th className='min-w-150px'>Next Schedule	</th>
                                <th className='min-w-150px'>Modified By</th>
                                <th className='min-w-150px'> Modified At</th>
                                <th className='min-w-100px   rounded-end'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="text-center">
                                    Schedule-1 s

                                </td>
                                <td>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>10-10-2023</span>

                                </td>
                                <td>

                                    <span className='badge badge-light-primary fs-7 fw-semibold'>Cluster1.1</span>
                                </td>

                                <td>

                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>10-10-2023</span>
                                </td>

                                <td>

                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>10-10-2023</span>
                                </td>
                                <td>
                                    <span className='badge badge-light-primary fs-7 fw-semibold'>Balasubranmanian</span>
                                </td>
                                <td>

                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>10-10-2023</span>
                                </td>
                                <td className='text-start'>

                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                    >
                                        <KTIcon iconName='pencil' className='fs-3' />
                                    </a>
                                    <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                        <KTIcon iconName='trash' className='fs-3' />
                                    </a>
                                </td>
                            </tr>

                        </tbody>

                    </table >

                </div >
            </div >
        </div >
    </>)
}

export { SchedularGrid }