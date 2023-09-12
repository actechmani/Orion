import React from 'react';
import { Card, Form, Table } from 'react-bootstrap';
import _map from 'lodash/map';
import _get from 'lodash/get';

// import Pagination from 'components/Pagination';
import { ACTIVITY_COLUMNS } from '../constant';
import { useDispatch } from 'react-redux';
import { nodeGroupActivitiesSaga } from '../../../../../../store/reducer/clusterReducer';
// import { showWarning } from 'service/notifications/action';

const Activity = ({ clusterDetailedInformation, nodeGroupActivities, nodeGroupName }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    let PageSize = 10; //limit or perPage
    const dispatch = useDispatch();
    const [clusterActivites, setClusterActivities] = React.useState({});

    const [currentPage, setCurrentPage] = React.useState(1);
    const results = _get(clusterActivites, 'results', []);
    const paginationInfo = _get(clusterActivites, 'paginationInfo', {});

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
                    key2: nodeGroupName,
                },
                sortBy: {
                    desc: ['registerAt'],
                },
            };
            const { data } = await nodeGroupActivitiesSaga({ type: 'cluster/sagaNodeGroupActivitiesSuccess', payload: payload });
            setClusterActivities(data);
        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
    };
    React.useEffect(() => {
        initializeRequest();
    }, [clusterDetailedInformation, nodeGroupName]);

    React.useEffect(() => {
        let intervalId;
        if (isSwitchOn) {
            console.log('started');
            intervalId = setInterval(async () => {
                await initializeRequest();
            }, 20000);
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isSwitchOn]);

    const updateActivities = async (currentPage) => {
        const payload = {
            pageRequest: {
                page: currentPage - 1,
                size: PageSize,
            },
            sortBy: {
                desc: ['registerAt'],
            },
            searchFilters: {
                key1: clusterDetailedInformation.id,
                key2: nodeGroupName,
            },
        };
        try {
            const { data } = await nodeGroupActivitiesSaga({ type: 'cluster/sagaNodeGroupActivitiesSuccess', payload: payload });
            setClusterActivities(data);
        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
    };

    return (
        <React.Fragment>
            <Card.Body>
                <div className="d-flex justify-content-end">
                    <Form.Check
                        type="switch"
                        checked={isSwitchOn}
                        id="custom-switch"
                        onChange={(e) => {
                            setIsSwitchOn(e.target.checked);
                        }}
                    />
                    <span> Auto Refresh</span>
                </div>
                {results.length > 0 ? (
                    <React.Fragment>
                        <Table responsive className="table align-middle table-nowrap table-check">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    {_map(ACTIVITY_COLUMNS, ({ name, key }) => (
                                        <th scope="col" key={key}>
                                            {name}
                                        </th>
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
                                            <td>{node.description}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-end p-3">
                            {/* <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={paginationInfo.totalRecords ? paginationInfo.totalRecords : 0}
                                pageSize={PageSize}
                                onPageChange={(page) => updateActivities(page).then(() => setCurrentPage(page))}
                            /> */}
                        </div>
                    </React.Fragment>
                ) : (
                    <div style={{ textAlign: 'center' }}>No Data Found</div>
                )}
            </Card.Body>
        </React.Fragment>
    );
};

export default Activity;
