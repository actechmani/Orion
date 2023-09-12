// import React from 'react';
// import { Offcanvas, Row, Col, Form } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';

// import _map from 'lodash/map';
// import _concat from 'lodash/concat';
// import _get from 'lodash/get';
// import _findIndex from 'lodash/findIndex';

// import { useLocation } from 'react-router-dom';
// import ReactSelect from 'react-select';

// import { DEFAULT_SCHEDULES_PROPERTIES } from 'screens/Cluster/ViewCluster/constants';
// import { cronParserWithTimeZone, PST_TIMEZONE } from 'utils/libs/schedular';
// import { deleteClusterScheduleInformation, updateClusterScheduleInformation } from 'service/clusterservice/action';



// const ScheduleNode = ({ nodeGroup, show, handleClose, clusterDetails }) => {

//     const [clusterScheduleForSelectionBox, setClusterScheduleForSelectionBox] = React.useState([]);
//     const { clusterSchedules } = useSelector(({ clusterServiceReducer }) => clusterServiceReducer);
//     const dispatch = useDispatch();
//     const history = useLocation();
//     const [schedule, setSchedule] = React.useState({});


//     const { name } = nodeGroup;

//     React.useEffect(() => {
//         setClusterScheduleForSelectionBox(
//             _map(clusterSchedules, (itm) => ({
//                 ...itm,
//                 label: itm.name,
//                 value: itm.id,
//             })),
//         );
//     }, [clusterSchedules]);

//     React.useEffect(() => {
//         const newClusteredSchedules = _map(clusterSchedules, (clusterSchedule) => ({
//             ...clusterSchedule,
//             label: clusterSchedule.name,
//             value: clusterSchedule.name,
//         }));
//         setClusterScheduleForSelectionBox(_concat(DEFAULT_SCHEDULES_PROPERTIES, newClusteredSchedules));
//     }, [clusterSchedules]);


//     React.useEffect(() => {
//         if (clusterSchedules.length > 0 && nodeGroup.scheduleId) {
//             const clusterScheduleIdx = _findIndex(
//                 clusterSchedules,
//                 (scm) => scm.id === nodeGroup.scheduleId,
//             );
//             if (clusterScheduleIdx !== -1) {
//                 clusterSchedules[clusterScheduleIdx].label = clusterSchedules[clusterScheduleIdx].name;
//                 clusterSchedules[clusterScheduleIdx].value = clusterSchedules[clusterScheduleIdx].name;
//                 const sleepExpression = _get(clusterSchedules[clusterScheduleIdx], 'sleep.cronExpression', null);
//                 const awakeExpression = _get(clusterSchedules[clusterScheduleIdx], 'awake.cronExpression', null);
//                 clusterSchedules[clusterScheduleIdx].detailedCronExpression = `Sleeps at ${cronParserWithTimeZone(
//                     sleepExpression,
//                     PST_TIMEZONE,
//                 )}, Awakes at ${cronParserWithTimeZone(awakeExpression, PST_TIMEZONE)} `;
//                 setSchedule(clusterSchedules[clusterScheduleIdx]);
//             }
//         }
//     }, [clusterSchedules]);

//     const updateClusterSchedule = () => {
//         if (schedule.id === 'NO_SCHEDULE') {
//             dispatch(deleteClusterScheduleInformation({
//                 clusterId: clusterDetails.id,
//                 nodegroupName: name,
//                 scheduleId: _get(nodeGroup, 'scheduleId', null),
//             }));

//         } else {
//             dispatch(updateClusterScheduleInformation({
//                 clusterId: clusterDetails.id,
//                 nodegroupName: name,
//                 scheduleId: schedule.id,
//             }));
//         }
//     };
//     const onScheduleChange = (e) => {
//         if (e.value === 'CREATE_SCHEDULE')
//             history.push('/cluster-schedule', null);
//         const sleepExpression = _get(e, 'sleep.cronExpression', null);
//         const awakeExpression = _get(e, 'awake.cronExpression', null);
//         e.detailedCronExpression = `Sleeps at ${cronParserWithTimeZone(sleepExpression, PST_TIMEZONE)}, Awakes at ${cronParserWithTimeZone(awakeExpression, PST_TIMEZONE)} `;
//         setSchedule(e);
//     };


//     return (
//         <Offcanvas show={show} onHide={handleClose} placement='end'>
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Schedule Node Group</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//                 <form>
//                     <Row className='mb-3'>
//                         <Col>
//                             <Form.Control
//                                 disabled
//                                 name={'groupName'} type={'text'} defaultValue={name} />
//                         </Col>
//                     </Row>
//                     <div className='mb-3'>
//                         <ReactSelect
//                             name={'schedule'}
//                             options={clusterScheduleForSelectionBox}
//                             onChange={onScheduleChange}
//                             isMulti={false}
//                             defaultValue={schedule}
//                         />
//                     </div>
//                     <div>
//                         <button className='btn btn-primary' type='button' onClick={() => updateClusterSchedule()}>
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </Offcanvas.Body>
//         </Offcanvas>
//     );
// };

// export default ScheduleNode;
