import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Card, Form, Table } from 'react-bootstrap';
import _map from 'lodash/map';
import _get from 'lodash/get';

// import Pagination from 'components/Pagination';

import { nodeGroupActivityInfo } from '../../../../../store/reducer/clusterReducer';
// import { showWarning } from 'service/notifications/action';
import { ACTIVITY_COLUMNS } from './constants';
import { useDispatch, useSelector } from 'react-redux';

const ClusterActivity = ({ clusterDetailedInformation }) => {
    console.log("activity page ??????")

    let PageSize = 10; //limit or perPage
    const dispatch = useDispatch();
    const [clusterActivites, setClusterActivities] = React.useState({});
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const [currentPage, setCurrentPage] = React.useState(1);
    const results = _get(clusterActivites, 'results', []);
    const paginationInfo = _get(clusterActivites, 'paginationInfo', {});
    const { clusterActivity } = useSelector((state: any) => state.cluster);


    const instanceRef: any = React.createRef();
    const initializeRequest = async () => {
        instanceRef.current = 'ACTIVE';
        try {
            const payload = {
                pageRequest: {
                    page: currentPage - 1,
                    size: PageSize,
                },
                searchFilters: {
                    key1: clusterDetailedInformation.id,
                },
                sortBy: {
                    desc: ['registerAt'],
                },
            };
            dispatch(nodeGroupActivityInfo({ type: "cluster/sagaNodeGroupActivitiesSuccess", payload: payload }));

        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
    };

    React.useEffect(() => {
        setClusterActivities(clusterActivity);
    }, [clusterActivity])

    React.useEffect(() => {
        let intervalId;
        if (isSwitchOn) {
            console.log("started")
            intervalId = setInterval(async () => {
                await initializeRequest();
            }, 20000);

        }
        else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId)
        }

    }, [isSwitchOn]);
    React.useEffect(() => {
        try {
            initializeRequest();
        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
    }, [clusterDetailedInformation]);

    const updateActivities = async (currentPage) => {
        const payload = {
            'pageRequest': {
                'page': currentPage - 1,
                'size': PageSize,
            },
            'sortBy': {
                desc: ['registerAt'],
            },
            'searchFilters': {
                key1: clusterDetailedInformation.id,
            },
        };
        try {
            dispatch(nodeGroupActivityInfo({ type: '', payload: payload }));

        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
    };

    return (

        <React.Fragment>
            <div className='card-body'>
                <div className="d-flex justify-content-end">
                    <Form.Check
                        type="switch"
                        checked={isSwitchOn}
                        id="custom-switch"
                        onChange={e => { setIsSwitchOn(e.target.checked) }}
                    />
                    <span> Auto Refresh</span>
                </div>
                <Table responsive className='table align-middle table-nowrap table-check'>
                    <thead className='table-light'>
                        <tr>
                            <th scope='col'>#</th>
                            {_map(ACTIVITY_COLUMNS, ({ name, key }) => (
                                <th scope='col' key={key}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {_map(results, (node, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{node.type}</td>
                                    {/* <td>{node.description}</td> */}
                                    <td>{node.registerAt}</td>
                                    <td>{node.description ? node.description : ''}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className='d-flex justify-content-end p-3'>
                    {/* <Pagination
                        className='pagination-bar'
                        currentPage={currentPage}
                        totalCount={paginationInfo.totalRecords
                            ? paginationInfo.totalRecords
                            : 0
                        }
                        pageSize={PageSize}
                        onPageChange={(page) => updateActivities(page).then(() => setCurrentPage(page))}
                    /> */}
                </div>
            </div>

        </React.Fragment>


    );

};

export default ClusterActivity;