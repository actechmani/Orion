import React from 'react';
import { Row, Col } from 'react-bootstrap';
import _get from 'lodash/get';
import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _findIndex from 'lodash/findIndex';
import _concat from 'lodash/concat';


const Overview = ({ clusterDetails }) => {
    console.log("clusterDetails", clusterDetails)
    const { cloudType, env, k8sVersion, bluePrintDetails, name, accountId, region } = clusterDetails;
    return (
        <React.Fragment>
            <Row sm={12} className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Cluster Name:
                </Col>
                <Col className="font-size-16">
                    <span className=" badge-danger py-1 px-2">{name}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Cloud:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{cloudType}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Account:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{accountId}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Region:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{region}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Kubernetes Version:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{_isEmpty(k8sVersion) ? 'Not Defined' : k8sVersion}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Blueprint:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{_get(bluePrintDetails, 'name', '')}</span>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={2} sm={6} className="font-size-16">
                    Environment:
                </Col>
                <Col className="font-size-16">
                    <span className="badge-dark py-1 px-2">{env}</span>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Overview;
