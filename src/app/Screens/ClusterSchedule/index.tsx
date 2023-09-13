import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { toAbsoluteUrl, KTIcon } from '../../../_metronic/helpers'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { ScheduleHeader } from './ScheduleHeader'
import { SchedularGrid } from './Schedule'
import { EventGrid } from './Schedule/Events'



const ClusterSchedule = () => {
  return (
    <>
      <PageTitle>Cluster Schedule</PageTitle>

      <Routes>
        <Route
          element={
            <>
              <ScheduleHeader />
              <Outlet />
            </>
          }
        >
          <Route
            path='schedular'
            element={
              <>
                <PageTitle >Schedular</PageTitle>
                <SchedularGrid />
              </>
            }
          />
          <Route
            path='Events'
            element={
              <>
                <PageTitle >Events</PageTitle>
                {/* <EventGrid
                /> */}
                <SchedularGrid />
              </>
            }
          />
        </Route>
        <Route index element={<Navigate to='/cluster-schedule/schedular' />} />

      </Routes>

    </>
  )
}

export default ClusterSchedule