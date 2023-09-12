// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Offcanvas, Row, Col, Form } from 'react-bootstrap';
// import _get from 'lodash/get';
// import InputFormText from 'components/Forms/TextField';
// import InputFormTextArea from 'components/Forms/TextArea';
// import { updateNodeGroupConfiguration } from 'service/clusterservice/action';
// import { useDispatch } from 'react-redux';

// const EditNodeGroup = ({ nodeGroup, show, handleClose, clusterDetails }) => {
//     const {
//         control,
//         watch,
//         formState: { errors },
//         handleSubmit,
//     } = useForm();
// const [nodeGroupError,setNodeGroupError]=useState(false);
//     const dispatch = useDispatch();
//      const { name, maxSize, minSize } = nodeGroup;

//     const onUpdateNodeGroup = (formProps) => {

//         if (minSize == formProps.minSize && maxSize == formProps.maxSize ) {
//             setNodeGroupError(true)
//             return;
//         }
    
//         else {
//             setNodeGroupError(false)
//             const payload = {
//                 status: 'Updated',
//                 comments: formProps.comments,
//                 max: +formProps.maxSize,
//                 min: +formProps.minSize,
//                 nodeGroupName: formProps.name,
//                 projected: true,
//                 clusterId: _get(clusterDetails, 'id', null),
//             };
//             dispatch(updateNodeGroupConfiguration(payload));
//         }

//     };
//     return (
//         <Offcanvas show={show} onHide={handleClose} placement="end">
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Edit Node Group</Offcanvas.Title>
              
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//             {nodeGroupError ? <p  style={{color:"#bd362f"}}>Please modify min or max value for update</p>:""}

//                 <form onSubmit={handleSubmit(onUpdateNodeGroup)}>
//                     <Row className="mb-3">
//                         <Col>
//                             <InputFormText
//                                 type="text"
//                                 control={control}
//                                 labelName="Name"
//                                 name={'name'}
//                                 defaultValue={name}
//                                 errors={errors}
//                                 disabled
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="mb-3">
//                         <Col md={6}>
//                             <InputFormText
//                                 type="number"
//                                 control={control}
//                                 min={0}
//                                 max={watch("maxSize")}
//                                 name={'minSize'}
//                                 labelName="Min"
//                                 defaultValue={minSize}
//                                 errors={errors}
//                                 rules={{
//                                     required: 'Enter min',
//                                     max:"Dummy"
//                                 }}
//                             />
//                         </Col>
//                         <Col md={6}>
//                             <InputFormText
//                                 type="number"
//                                 control={control}
//                                 min={watch('minSize')}
//                                 max={200}
//                                 name={'maxSize'}
//                                 labelName="Max"
//                                 defaultValue={maxSize}
//                                 errors={errors}
//                                 rules={{
//                                     required: 'Enter max',
//                                     min:"Summy1"
//                                 }}
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="mb-3">
//                         <Col>
//                             <Form.Group>
//                                 <Form.Label>
//                                     Justification{' '}
//                                     <span
//                                         style={{
//                                             color: 'red',
//                                         }}
//                                     >
//                                         *
//                                     </span>
//                                     :
//                                 </Form.Label>
//                                 <InputFormTextArea
//                                     type="text"
//                                     control={control}
//                                     name={'comments'}
//                                     // labelName="Comments"
//                                     errors={errors}
//                                     defaultValue={_get(nodeGroup, 'comments', '')}
//                                     rules={{
//                                         required: 'Enter comments',
//                                     }}
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <div className="mb-3">
//                         <label className="form-check-label text-purple" htmlFor="flexSwitchCheckChecked">
//                             Note: Desired size is managed by Cluster Autoscaler.

//                         </label>
//                     </div>
//                     <div>
//                         <button className="btn btn-primary" type="submit">
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </Offcanvas.Body>
//         </Offcanvas>
//     );
// };


// export default EditNodeGroup;
