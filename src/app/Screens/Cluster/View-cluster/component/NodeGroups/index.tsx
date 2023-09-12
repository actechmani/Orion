import React from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import _map from 'lodash/map';
import _get from 'lodash/get';
import { clusterRefreshInformationSaga, getAllClusterInfoSaga, nodeGroupActivitiesSaga } from '../../../../../store/reducer/clusterReducer';

// import Action from './Component/Action';
import { ACTIVITY_FORM_INITIAL_STATE, NODE_GROUP_INSTANCES, nodeGroupColumn, STATUS_BADGE_COLOR } from './constant';

import _isEmpty from 'lodash/isEmpty';
import _cloneDeep from 'lodash/cloneDeep';
// import Pagination from 'components/Pagination';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
// import { showWarning } from 'service/notifications/action';
import Activity from './Activity';

const NodeGroups = () => {
    let PageSize = 10; //limit or perPage
    const { clusterDetailedInformation } = useSelector((state: any) => state.cluster);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalGroup, setTotalGroup] = React.useState(0);

    const searchRef = React.useRef<any>(null);
    const [searchStr, setSearchStr] = React.useState('');
    const [nodeGroupDetails, setNodeGroupDetails] = React.useState(ACTIVITY_FORM_INITIAL_STATE);
    const dispatch = useDispatch();
    const [nodeGroupName, setNodeGroupName] = React.useState('');

    const { isShowNodeGroupDetails, nodeGroupInfo, nodeGroupInstances, activities, nodeGroupActivities } =
        nodeGroupDetails;

    const refreshClusterDetails = async () => {
        const payload = {
            clusterName: _get(clusterDetailedInformation, 'name', null),
            accountId: _get(clusterDetailedInformation, 'accountId', null),
            env: _get(clusterDetailedInformation, 'env', null),
            region: _get(clusterDetailedInformation, 'region', null),


        }
        await dispatch(
            clusterRefreshInformationSaga({ type: "cluster/sagaClusterInfoSuccess", payload: payload }),
        );

        const id = clusterDetailedInformation.id
        await dispatch(
            getAllClusterInfoSaga({ type: "cluster/sagaClusterInfoSuccess", payload: id }),
        );
    };
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalGroup / PageSize); i++) {
        pageNumbers.push(i);
    }

    const nodeGroupData = React.useMemo(() => {
        let computedAsg = clusterDetailedInformation?.asg;

        if (searchStr) {
            computedAsg = computedAsg.filter((todo) => todo.name.toLowerCase().includes(searchStr.toLowerCase()));
        }

        setTotalGroup(computedAsg?.length);

        //Current Page slice
        return computedAsg?.slice((currentPage - 1) * PageSize, (currentPage - 1) * PageSize + PageSize);
    }, [clusterDetailedInformation.asg, currentPage, searchStr]);

    const resetCluster = () => {
        searchRef.current.value = '';
        setCurrentPage(1);
        setSearchStr('');
    };
    const keyEnter = () => {
        const searchValue = searchRef.current.value;
        if (searchValue.length >= 3) {
            setSearchStr(searchValue);
        } else {
            if (searchValue === '') {
                setSearchStr('');
            } else {
                // setLoader(false);
            }
        }
        setCurrentPage(1);
    };
    const getNodeInfoDetails = async (nodeWithInfo) => {
        const payload = {
            searchFilters: {
                key1: clusterDetailedInformation.id,
                key2: nodeWithInfo.name,
            },
            sortBy: {
                desc: ['registerAt'],
            },
        };
        try {
            setNodeGroupName(nodeWithInfo.name);
            const { data } = await nodeGroupActivitiesSaga({ type: "cluster/sagaNodeGroupActivitiesSuccess", payload: payload });
            setNodeGroupDetails(
                _cloneDeep({
                    ...nodeGroupDetails,
                    isShowNodeGroupDetails: true,
                    nodeGroupInfo: data,
                    nodeGroupInstances: _get(nodeWithInfo, 'instances', []),
                    activities: _get(nodeWithInfo, 'activities', []),
                    nodeGroupActivities: {
                        ...data,
                    },
                }),
            );
            return;
        } catch (e) {
            // dispatch(showWarning({ message: 'Activity Info Response not reachable' }));
        }
        setNodeGroupDetails({
            isShowNodeGroupDetails: true,
            nodeGroupInfo: nodeWithInfo,
            nodeGroupInstances: _get(nodeWithInfo, 'instances', []),
            activities: _get(nodeWithInfo, 'activities', []),
            nodeGroupActivities: {
                paginationInfo: {
                    totalPages: 0,
                    totalRecords: 0,
                },
                results: [],
            },
        });
    };

    React.useEffect(() => {
        resetCluster();
    }, [clusterDetailedInformation]);

    return (
        <React.Fragment>
            {isShowNodeGroupDetails ? (
                <>
                    <Card>
                        <Card.Header>
                            <div className="justify-content-between d-flex align-items-center">
                                <h4 className="card-title ">{nodeGroupName ? nodeGroupName : 'NodeGroup Details'}</h4>
                                <div className="dropdown">
                                    <button
                                        className={'btn btn-primary btn-sm mx-2'}
                                        onClick={() => refreshClusterDetails()}
                                    >
                                        <AiOutlineReload />
                                    </button>
                                    <button
                                        className={'btn btn-primary btn-sm mx-2'}
                                        onClick={() => setNodeGroupDetails(ACTIVITY_FORM_INITIAL_STATE)}
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="container-fluid width: 100% ">
                                <div className="row mt-3">
                                    <div className="col">
                                        <span>Node Group Name :</span>
                                        <span>{nodeGroupName}</span>
                                    </div>
                                    <div className="col">
                                        <span>Node Count :</span>
                                        <span>{nodeGroupInstances.length}</span>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <span>k8s Version :</span>
                                        <span>{clusterDetailedInformation.k8sVersion}</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Instances</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Body>
                                        <span>
                                            <input
                                                style={{ margin: '0 0 20px 10px' }}
                                                type="text"
                                                placeholder="Search..."
                                                ref={searchRef}
                                            />
                                            <button
                                                className={'btn btn-primary btn-sm mx-2'}
                                                onClick={() => keyEnter()}
                                            >
                                                <FaSearch />
                                            </button>
                                        </span>
                                        {nodeGroupInstances.length !== 0 ? (
                                            <Table responsive className="table align-middle table-nowrap table-check">
                                                <thead className="table-light">
                                                    <tr>
                                                        {_map(NODE_GROUP_INSTANCES, ({ name, key }) => (
                                                            <th scope="col" key={key}>
                                                                {name}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {_map(nodeGroupInstances, (node, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>{node.instanceId}</td>
                                                                <td>{node.instanceType}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        ) : (
                                            <div style={{ textAlign: 'center' }}>No Data Found</div>
                                        )}
                                        <div className="d-flex justify-content-end p-3">
                                            {/* <Pagination
                                                className="pagination-bar"
                                                currentPage={currentPage}
                                                totalCount={
                                                    clusterDetailedInformation &&
                                                        clusterDetailedInformation?.asg?.length
                                                        ? clusterDetailedInformation?.asg?.length
                                                        : 0
                                                }
                                                pageSize={PageSize}
                                                onPageChange={(page) => setCurrentPage(page)}
                                            /> */}
                                        </div>
                                    </Card.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Activities</Accordion.Header>
                                <Accordion.Body>
                                    <Activity
                                        clusterDetailedInformation={clusterDetailedInformation}
                                        nodeGroupName={nodeGroupName}
                                        nodeGroupActivities={nodeGroupActivities}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* <Accordion.Item eventKey='2'> */}
                            {/*     <Accordion.Header>CloudActivities</Accordion.Header> */}
                            {/*     <Accordion.Body> */}
                            {/*         <Card.Body> */}
                            {/*             /!* <span> */}
                            {/*         <input */}
                            {/*             style={{margin: '0 0 20px 10px'}} */}
                            {/*             type='text' */}
                            {/*             placeholder='Search...' */}
                            {/*             ref={searchRef} */}
                            {/*         /> */}
                            {/*         <button className={'btn btn-primary btn-sm mx-2'} */}
                            {/*                 onClick={() => keyEnter()}> */}
                            {/*             <FaSearch/> */}
                            {/*         </button> */}
                            {/*     </span>*!/ */}
                            {/*             {activities.length !== 0 ? */}
                            {/*                 <Table responsive className='table align-middle table-nowrap table-check'> */}
                            {/*                     <thead className='table-light'> */}
                            {/*                     <tr> */}
                            {/*                         /!* {_map(NODE_GROUP_INSTANCES, ({ name, key }) => ( *!/ */}
                            {/*                         /!*     <th scope='col' key={key}>{name}</th> *!/ */}
                            {/*                         /!* ))} *!/ */}
                            {/*                         <th>start time</th> */}
                            {/*                         <th>end time</th> */}
                            {/*                         <th>cause</th> */}
                            {/*                         <th>details</th> */}
                            {/*                         <th>description</th> */}
                            {/*                     </tr> */}
                            {/*                     </thead> */}

                            {/*                     <tbody> */}
                            {/*                     {_map(activities, (node, idx) => { */}
                            {/*                         return (<tr key={idx}> */}
                            {/*                             <td>{node.startTime}</td> */}
                            {/*                             <td>{node.endTime}</td> */}
                            {/*                             <td>{node.cause}</td> */}
                            {/*                             <td>{node.details}</td> */}
                            {/*                             <td>{node.description}</td> */}
                            {/*                         </tr>); */}
                            {/*                     })} */}
                            {/*                     </tbody> */}
                            {/*                 </Table> */}
                            {/*                 : <div style={{textAlign: 'center'}}>No Data Found</div>} */}
                            {/*             <div className='d-flex justify-content-end p-3'> */}
                            {/*                 <Pagination */}
                            {/*                     className='pagination-bar' */}
                            {/*                     currentPage={currentPage} */}
                            {/*                     totalCount={clusterDetailedInformation && clusterDetailedInformation?.asg?.length */}
                            {/*                         ? clusterDetailedInformation?.asg?.length */}
                            {/*                         : 0 */}
                            {/*                     } */}
                            {/*                     pageSize={PageSize} */}
                            {/*                     onPageChange={(page) => setCurrentPage(page)} */}
                            {/*                 /> */}
                            {/*             </div> */}
                            {/*         </Card.Body> */}
                            {/*     </Accordion.Body> */}
                            {/* </Accordion.Item> */}
                        </Accordion>
                    </Card>
                </>
            ) : (
                <Card>
                    <Card.Header>
                        <div className="justify-content-between d-flex align-items-center">
                            <h4 className="card-title">Node Groups ({clusterDetailedInformation?.asg?.length})</h4>
                            <div className="dropdown">
                                <span>
                                    <input
                                        // onInput={keyDown}
                                        type="text"
                                        placeholder="Search..."
                                        ref={searchRef}
                                    />
                                    <button className={'btn btn-primary btn-sm mx-2'} onClick={() => keyEnter()}>
                                        <FaSearch />
                                    </button>
                                </span>

                                <button
                                    className={'btn btn-primary btn-sm mx-2'}
                                    onClick={() => refreshClusterDetails()}
                                >
                                    <AiOutlineReload />
                                </button>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive className="table align-middle table-nowrap table-check">
                            <thead className="table-light">
                                <tr>
                                    {_map(nodeGroupColumn, ({ name, key }) => (
                                        <th scope="col" key={key}>
                                            {name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {_map(nodeGroupData, (nodeGroup, key) => {
                                    const NextSchedule =
                                        'awakeNextRun' in nodeGroup || 'sleepNextRun' in nodeGroup ? (
                                            <React.Fragment key={key}>
                                                <span className="d-block">
                                                    <b> Sleep</b>:{' '}
                                                    {nodeGroup.sleepNextRun === null ? 'NA' : nodeGroup.sleepNextRun}
                                                </span>
                                                <span className="d-block">
                                                    <b>Wake</b>:{' '}
                                                    {nodeGroup.awakeNextRun === null ? 'NA' : nodeGroup.awakeNextRun}
                                                </span>
                                            </React.Fragment>
                                        ) : (
                                            'NA'
                                        );
                                    return (
                                        <tr key={nodeGroup.name}>
                                            <td className="link-primary" onClick={() => getNodeInfoDetails(nodeGroup)}>
                                                {' '}
                                                {nodeGroup.name}{' '}
                                            </td>
                                            <td>
                                                {nodeGroup?.instanceType ? <div>{nodeGroup.instanceType}</div> : ''}
                                            </td>
                                            <td>{nodeGroup.minSize}</td>
                                            <td>{nodeGroup.maxSize}</td>
                                            <td>{nodeGroup.desiredSize}</td>
                                            {/* <td>{nodeGroup.projectedMin}</td> */}
                                            {/* <td>{nodeGroup.projectedMax}</td> */}
                                            <td>
                                                <span
                                                    className={STATUS_BADGE_COLOR[_get(nodeGroup, 'status', 'Pending')]}
                                                >
                                                    {_isEmpty(_get(nodeGroup, 'status', ''))
                                                        ? 'NA'
                                                        : _get(nodeGroup, 'status', 'Pending')}
                                                </span>
                                            </td>
                                            <td>{NextSchedule}</td>
                                            <td>NA</td>
                                            <td>NA</td>
                                            <td>
                                                {/* <Action
                                                    clusterDetails={clusterDetailedInformation}
                                                    nodeGroup={nodeGroup}
                                                /> */}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-end p-3">
                            {/* <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={
                                    clusterDetailedInformation && clusterDetailedInformation?.asg?.length
                                        ? clusterDetailedInformation?.asg?.length
                                        : 0
                                }
                                pageSize={PageSize}
                                onPageChange={(page) => setCurrentPage(page)}
                            /> */}
                        </div>
                    </Card.Body>
                </Card>
            )}
        </React.Fragment>
    );
};

export default NodeGroups;
