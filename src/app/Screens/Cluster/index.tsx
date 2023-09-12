import React, { useEffect, useState } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { KTCard, KTCardBody, KTIcon } from '../../../_metronic/helpers'
import { UsersListPagination } from '../../modules/apps/user-management/users-list/components/pagination/UsersListPagination'
import { useSelector, useDispatch } from 'react-redux';
import { getClusterList } from '../../store/reducer/clusterReducer'
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import _round from 'lodash/round';
import _isNumber from 'lodash/isNumber';
import aws from '../../../assets/cluster/aws.svg';
import gcp from '../../../assets/cluster/gcp.svg';
import azure from '../../../assets/cluster/azure.svg';
import moment from 'moment';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillEdit, AiFillEye, AiOutlineReload } from 'react-icons/ai';


function ClusterGridPreview() {
  let PageSize = 10; //limit or perPage
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { clusterList } = useSelector((state: any) => state.cluster);

  useEffect(() => {
    dispatch(getClusterList());
    console.log("clusterList", clusterList)
  }, [dispatch])

  const getCloudImage = (cloud) => {
    switch (cloud) {
      case "azure":
        return <img width="30" height="30" src={azure} alt='azure' />
      case "aws":
        return <img width="30" height="30" src={aws} alt='azure' />
      case "gcp":
        return <img width="30" height="30" src={gcp} alt='azure' />
    }
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <ol style={{ textAlign: "left" }}>
        <li>Schedule Sleep </li>
        <li>View number of instances</li>
        <li>View Node Groups</li>
        <li>View Helm Activities</li>
        <li>View Cluster Cost</li>
        <li>View Recommendations</li>
      </ol>


    </Tooltip>
  );



  return (
    <>
      <PageTitle>Cluster</PageTitle>
      <KTCard>

        <div className='card-header border-0 pt-6'>
          <div className='card-title'>
            {/* begin::Search */}
            <div className='d-flex align-items-center position-relative my-1'>
              <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
              <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control form-control-solid w-250px ps-14'
                placeholder='Search user'
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* end::Search */}
          </div>
          {/* begin::Card toolbar */}
          <div className='card-toolbar'>
            {/* begin::Group actions */}
            <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
              {/* <UsersListFilter /> */}



              {/* begin::Add user */}
              <button type='button' className='btn btn-primary' >
                <KTIcon iconName='plus' className='fs-2' />
                Add Cluster
              </button>
              {/* end::Add user */}
            </div>
            {/* end::Group actions */}
          </div>
          {/* end::Card toolbar */}
        </div>


        <KTCardBody className='py-4'>
          <div className='table-responsive'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            >
              <thead>
                <tr className='text-start text-muted fw-bolder fs-7  gs-0'>
                  <th>#</th>
                  <th>Cluster Name</th>
                  <th>Cloud</th>
                  <th>Environment</th>
                  <th>Region</th>
                  <th>Account Id</th>
                  <th>Version</th>
                  <th>Cost</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Manage</th>
                </tr>


              </thead>
              <tbody className='text-gray-600 fw-bold' >
                {clusterList.length > 0 ? (
                  clusterList.map((cluster: any, idx) => (
                    <tr key={idx}>
                      <td > {idx + 1 + (PageSize * (currentPage - 1))} </td>
                      <td> {_get(cluster, 'name', '')} </td>
                      <td> {getCloudImage(_get(cluster, 'cloudType', ''))} </td>
                      <td> {_get(cluster, 'env', '')}</td>
                      <td>
                        <span
                          className='ctext-wrap text-pink fw-bolder font-size-14'>
                          {_get(cluster, 'region', '')}
                        </span>
                      </td>
                      <td>

                        <span>
                          <OverlayTrigger overlay={<Tooltip >{_get(cluster, 'accountId', '')}</Tooltip>}>
                            <span >
                              {`${_get(cluster, 'accountId', '').slice(0, 5)} ...`}
                            </span>
                          </OverlayTrigger>
                        </span>

                      </td>
                      <td>
                        <code>{_get(cluster, 'k8sVersion', '')}</code>
                      </td>
                      <td>
                        {"$" + _round(
                          _isNumber(_get(cluster, 'avgCostFairShare', 0)) ? _get(cluster, 'avgCostFairShare', 0) : 0,
                        ).toFixed(2)}
                      </td>
                      <td>

                        <span
                        // className={classNames(`fw-600 px-2 badge fs-12 ${_get(cluster, 'status', '') === 'ACTIVE'
                        //   ? 'bd-started'
                        //   : 'bd-cancel'
                        //   }`)}
                        >
                          {_isEmpty(_get(cluster, 'status', ''))
                            ? 'PENDING'
                            : _get(cluster, 'status', '')}
                        </span>
                      </td>


                      <td>
                        {moment(_get(cluster, 'createdAt', '')).format("MM-DD-YYYY")}
                      </td>

                      <td>
                        <div className='dropdown'>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <NavLink to="/view-cluster-information" state={{ cluster: cluster }} className='btn btn-outline-purple btn-sm'><AiFillEye /></NavLink>

                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>


                  ))
                ) : (
                  <tr>
                    <td colSpan={11}>
                      <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                        No matching records found
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <UsersListPagination />
        </KTCardBody>
      </KTCard>
    </>
  )
}

export default ClusterGridPreview