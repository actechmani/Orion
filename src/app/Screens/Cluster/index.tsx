import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { KTCard, KTCardBody } from '../../../_metronic/helpers'
import { UsersListPagination } from '../../modules/apps/user-management/users-list/components/pagination/UsersListPagination'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'

function ClusterGridPreview() {

  const head = [{
    id: 1,
    title: "id",
    data: "1"
  },
  {
    id: 2,
    title: "name",
    data: "mark"
  },

  {
    id: 3,
    title: "age",
    data: 13
  },

  ]

  return (
    <>
      <PageTitle>Cluster</PageTitle>
      <KTCard>
        <UsersListHeader />
        <KTCardBody className='py-4'>
          <div className='table-responsive'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            >
              <thead>
                <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                  {head.map((column: any) => (
                    <th>{column.title}</th>
                  ))}

                </tr>
              </thead>
              <tbody className='text-gray-600 fw-bold' >
                {head.length > 0 ? (
                  head.map((row: any, i) => (
                    <td className='text-start min-w-100px'>{row.data}</td>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>
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