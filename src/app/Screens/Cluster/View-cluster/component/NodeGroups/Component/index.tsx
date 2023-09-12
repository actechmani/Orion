// import React from 'react';

// import _get from 'lodash/get';
// import _isEmpty from 'lodash/isEmpty';
// import _includes from 'lodash/includes';

// import EditNodeGroup from './EditNodeGroup';
// import ScheduleNode from './ScheduleNode';

// import { BsCalendarPlus, BsFillMoonFill, BsAlarm } from 'react-icons/bs';
// import { TiEdit } from 'react-icons/ti';
// import { useDispatch } from 'react-redux';
// import SweetAlert from 'react-bootstrap-sweetalert';

// import { updateNodeGroupStatus } from 'service/clusterservice/action';
// import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// const Action = ({ nodeGroup, clusterDetails }) => {
//     const dispatch = useDispatch();

//     const [showEdit, setShowEdit] = React.useState(false);
//     const [showSchedule, setShowSchedule] = React.useState(false);
//     const [alterConfiguration, setAlertConfiguration] = React.useState({
//         isShowAlertPopup: false,
//         alterType: false,
//         message: '',
//         confirmBtnText: '',
//     });

//     const updateNodeGroupState = (status) => {
//         const payload = {
//             status,
//             nodeGroupName: nodeGroup.name,
//             clusterId: clusterDetails.id,
//         };
//         dispatch(updateNodeGroupStatus(payload));
//     };
//     const onConfirm = () => {
//         updateNodeGroupState(alterConfiguration.alterType);
//         setAlertConfiguration({
//             isShowAlertPopup: false,
//             alterType: 'Moon',
//             message: '',
//             confirmBtnText: '',
//         });
//     };

//     const onConfirmationModel = (status) =>
//         setAlertConfiguration({
//             isShowAlertPopup: true,
//             alterType: status,
//             message: status === 'Sleep' ? 'Are you Sure to Sleep the NodeGroup' : 'Are You Sure to Start the NodeGroup',
//             confirmBtnText: status === 'Sleep' ? 'Sleep NodeGroup' : 'Start NodeGroup',
//         });

//     const nodeGroupStatus = _get(nodeGroup, 'status', '');
//     const isButtonDisabled = _get(clusterDetails, 'env', '') !== 'qa' || _get(clusterDetails, 'orionOps', '') != true;
//     _isEmpty(nodeGroupStatus) || _includes(['Pending', 'PendingSleep', 'PendingAwake', 'PendingEdit'], nodeGroupStatus);
//     const renderTooltip = (props) => (
//         <Tooltip id="button-tooltip" {...props}>
//             Not managed by Orion
//         </Tooltip>
//     );
//     return (
//         <React.Fragment>
//             <div>
//                 <div>
//                     <Button variant="primary" className="mx-2" onClick={(e) => setShowEdit(true)}>
//                         <TiEdit size={15} />
//                     </Button>

//                     {_get(nodeGroup, 'status', 'Active') === 'Active' ? (
//                         <OverlayTrigger
//                             placement="top"
//                             delay={{ show: 250, hide: 400 }}
//                             overlay={isButtonDisabled ? renderTooltip : <span></span>}
//                         >
//                             <span className="d-inline-block">
//                                 <Button
//                                     variant="danger"
//                                     disabled={isButtonDisabled}
//                                     onClick={() => onConfirmationModel('Sleep')}
//                                 >
//                                     <BsFillMoonFill size={15} />
//                                 </Button>
//                             </span>
//                         </OverlayTrigger>
//                     ) : (
//                         <OverlayTrigger
//                             placement="top"
//                             delay={{ show: 250, hide: 400 }}
//                             overlay={isButtonDisabled ? renderTooltip : <span></span>}
//                         >
//                             <span className="d-inline-block">
//                                 <Button
//                                     variant="danger"
//                                     disabled={isButtonDisabled}
//                                     onClick={() => onConfirmationModel('Awake')}
//                                 >
//                                     <BsAlarm size={10} />
//                                 </Button>
//                             </span>
//                         </OverlayTrigger>
//                     )}
//                     <OverlayTrigger
//                         placement="top"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={isButtonDisabled ? renderTooltip : <span></span>}
//                     >
//                         <span className="d-inline-block">
//                             <Button
//                                 variant="primary"
//                                 className="mx-2"
//                                 disabled={isButtonDisabled}
//                                 onClick={(e) => setShowSchedule(true)}
//                             >
//                                 <BsCalendarPlus size={10} />
//                             </Button>
//                         </span>
//                     </OverlayTrigger>
//                 </div>
//             </div>
//             {showEdit && (
//                 <EditNodeGroup
//                     clusterDetails={clusterDetails}
//                     nodeGroup={nodeGroup}
//                     show={showEdit}
//                     handleClose={(e) => setShowEdit(false)}
//                 />
//             )}
//             {showSchedule && (
//                 <ScheduleNode
//                     clusterDetails={clusterDetails}
//                     nodeGroup={nodeGroup}
//                     show={showSchedule}
//                     handleClose={(e) => setShowSchedule(false)}
//                 />
//             )}

//             {
//                 <SweetAlert
//                     warning
//                     showCancel
//                     show={alterConfiguration.isShowAlertPopup}
//                     confirmBtnText={alterConfiguration.confirmBtnText}
//                     confirmBtnBsStyle="danger"
//                     title=""
//                     onConfirm={onConfirm}
//                     onCancel={() =>
//                         setAlertConfiguration({
//                             ...alterConfiguration,
//                             isShowAlertPopup: false,
//                         })
//                     }
//                     focusCancelBtn
//                 >
//                     {alterConfiguration.message}
//                 </SweetAlert>
//             }
//         </React.Fragment>
//     );
// };

// export default Action;
