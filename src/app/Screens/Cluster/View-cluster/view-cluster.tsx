import React from 'react';
import { Card, Row, Col, Tab, Tabs, Button } from 'react-bootstrap';
import _get from 'lodash/get';
import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { viewClusterInitialState } from './constants';
import { IoIosArrowBack } from 'react-icons/io';
import Overview from './component/Overview';
import Details from './component/Details';
import NodeGroups from './component/NodeGroups';
import ClusterActivity from './component/ClusterActivity';
import { getClusterSchedule, getClusterInfo } from '../../../store/reducer/clusterReducer';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { BasicTabs } from '../demo';
import { OverviewCluster } from './overview';
import { Link, useLocation } from 'react-router-dom'

function ViewCluster() {
    const navigate = useNavigate();
    const locality = useLocation();
    const [clusterid, setClusterId] = React.useState();
    const dispatch = useDispatch();
    const [active, setActive] = React.useState<any>('detail')

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
            <OverviewCluster />

            <Card>
              
                <Card.Body>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap mb-5'>
                            <li key="detail"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("detail")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "detail" && 'active')}>
                                    Details
                                </a>

                            </li>

                            <li key="nodegroup"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("nodegroup")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "nodegroup" && 'active')}>
                                    Node Groups
                                </a>

                            </li>
                            <li key="clusteractivity"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("clusteractivity")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "clusteractivity" && 'active')}>
                                    Cluster Activity
                                </a>
                            </li>

                            <li key="helmactivity"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("helmactivity")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "helmactivity" && 'active')}>
                                    Helm Activities
                                </a>
                            </li>

                            <li key="clustercost"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("clustercost")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "clustercost" && 'active')}>
                                    Cluster Cost
                                </a>
                            </li>

                            <li key="recommand"
                                className={`nav-item`}
                            >
                                <a onClick={() => setActive("recommand")} className={
                                    `nav-link text-active-primary me-6 ` +
                                    (active === "recommand" && 'active')}>
                                    Recommendations
                                </a>
                            </li>

                        </ul>
                    </div>

                    {active === 'detail' && <Details clusterDetails={state} />}
                    {active === 'nodegroup' && <NodeGroups />}
                    {active === 'clusteractivity' && (
                        <ClusterActivity clusterDetailedInformation={clusterDetailedInformation} />
                    )}

                    {active === 'helmactivity' && (
                        <div>test2</div>
                        // <HelmActivities clusterDetailedInformation={clusterDetailedInformation} />
                    )}

                    {active === 'clustercost' && (
                        <div>test3</div>
                        // <CostManagement clusterDetailedInformation={clusterDetailedInformation} />
                    )}

                    {active === 'recommand' && (
                        <div>test4</div>
                        // <Recommendations clusterId={clusterid} clusterDetails={state} />
                    )}

                  
                </Card.Body>
            </Card>
        </div>
    );
}
export default ViewCluster