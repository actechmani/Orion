import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
// import CustomScrollbars from 'components/CustomScrollbars';

const Details = ({ clusterDetails }) => {

    const { metadata, instances, tags } = clusterDetails;
    return (
        <Row>
            <Col md={8}>
                <Card>
                    <Card.Header>
                        <h4>Metadata</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className='text-muted'>
                            {_isEmpty(metadata) ? (
                                <h5 className='text-center'>No data Available</h5>
                            ) : (
                                // <CustomScrollbars style={{ maxWidth: '100vw', minHeight: 400 }}>
                                //     <pre>{JSON.stringify(metadata, null, 2)}</pre>
                                // </CustomScrollbars>
                                <pre>{JSON.stringify(metadata, null, 2)}</pre>
                            )}
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h4>Instance</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className='text-muted'>
                            {_isEmpty(instances) ? (
                                <h5 className='text-center'>No data Available</h5>
                            ) : (
                                // <CustomScrollbars style={{ maxWidth: '100vw', minHeight: 400 }}>
                                //     <pre>{JSON.stringify(instances, null, 2)}</pre>
                                // </CustomScrollbars>
                                <pre>{JSON.stringify(instances, null, 2)}</pre>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Header>
                        <h4>Tags</h4>
                    </Card.Header>
                    <Card.Body>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    _map(tags, (key, value) => (
                                        <tr key={value}>
                                            <td> {value}</td>
                                            <td> {key}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Details;
