import React from 'react';
import { Card, Row, Col, Tab, Tabs, Button } from 'react-bootstrap';
import _get from 'lodash/get';
import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { viewClusterInitialState } from './constants';
import { IoIosArrowBack } from 'react-icons/io';
import Overview from './component/Overview';
import Details from './component/Details';
import NodeGroups from './component/NodeGroups';
import ClusterActivity from './component/ClusterActivity';
import { getClusterSchedule, getClusterInfo } from '../../../store/reducer/clusterReducer';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { BasicTabs } from '../demo'

function ViewCluster() {
    const navigate = useNavigate();
    const locality = useLocation();
    const [clusterid, setClusterId] = React.useState();
    const dispatch = useDispatch();
    const [state, setState] = React.useState(viewClusterInitialState);
    const [activeTabName, setActiveTabName] = React.useState<any>('overView');
    const { clusterDetailedInformation } = useSelector((state: any) => state.cluster);

    React.useEffect(() => {
        console.log("locality", locality)
        if (locality?.state?.cluster !== null) {
            dispatch(getClusterInfo(locality?.state?.cluster?.id));
            setClusterId(locality?.state?.cluster?.id);
        }
        if (locality?.state?.recommendNamespaceDetails !== undefined) {
            dispatch(getClusterInfo(locality?.state?.recommendNamespaceDetails?.clusterId));
            setClusterId(locality?.state?.recommendNamespaceDetails?.clusterId);
        }
    }, [locality, clusterid]);
    React.useEffect(() => {
        dispatch(getClusterSchedule());
    }, []);
    React.useEffect(() => {
        console.log("clusterDetailedInformation", clusterDetailedInformation)
        if (!_isEmpty(clusterDetailedInformation)) setState(_cloneDeep(clusterDetailedInformation));
    }, [clusterDetailedInformation, locality]);


    return (
        <div className="mt-4 mx-4">
            <Card>
                <Card.Header>
                    <span className='d-flex justify-content-between align-items-center'>
                        <IoIosArrowBack
                            size={20}
                            style={{ marginRight: '20px', marginBottom: '5px' }}
                            onClick={() => navigate('/cluster-service')}
                        // onClick={() => history.push('/cluster-service')}
                        />
                    </span>

                    <h4 className="d-flex justify-content-between align-items-center d-inline-block">Cluster: {locality?.state?.cluster?.name}</h4>
                </Card.Header>
                <Card.Body>

                    <BasicTabs />
                    <Tabs
                        className="mb-3"
                        onSelect={(tabName) => {
                            setActiveTabName(tabName);
                            // localStorage.setItem('activeCluster', tabName);
                        }}
                    >
                        <Tab eventKey="overView" title="Overview">
                            {activeTabName === 'overView' && <Overview clusterDetails={state} />}
                        </Tab>
                        <Tab eventKey="details" title="Details">
                            {activeTabName === 'details' && <Details clusterDetails={state} />}
                        </Tab>
                        <Tab eventKey="nodeGroups" title="Node Groups">
                            {activeTabName === 'nodeGroups' && <NodeGroups />}
                        </Tab>
                        <Tab eventKey={'activity'} title={'Cluster Activity'}>
                            {activeTabName === 'activity' && (
                                <ClusterActivity clusterDetailedInformation={clusterDetailedInformation} />
                            )}
                        </Tab>
                        <Tab eventKey={'helmActivities'} title={'Helm Activities'}>
                            {activeTabName === 'helmActivities' && (
                                <div>test2</div>
                                // <HelmActivities clusterDetailedInformation={clusterDetailedInformation} />
                            )}
                        </Tab>
                        <Tab eventKey={'clusterCost'} title={'Cluster Cost'}>
                            {activeTabName === 'clusterCost' && (
                                <div>test3</div>
                                // <CostManagement clusterDetailedInformation={clusterDetailedInformation} />
                            )}
                        </Tab>

                        <Tab eventKey="recommendations" title="Recommendations">
                            {activeTabName === 'recommendations' && (
                                <div>test4</div>
                                // <Recommendations clusterId={clusterid} clusterDetails={state} />
                            )}
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ViewCluster