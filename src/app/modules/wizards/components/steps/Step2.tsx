import React, { FC } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'

const Step2: FC = () => {
  const teamname = [{
    id: 1,
    name: "MDM",
  },
  {
    id: 2,
    name: "Platform",
  },
  {
    id: 3,
    name: "QA",
  },
  {
    id: 4,
    name: "Ops"
  },
  {
    id: 5,
    name: "Engineering"
  }
  ]

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Which team do you belong to?</h2>


      </div>

      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Specify Team
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your team size to help us setup your billing'
          ></i>
        </label>

        <div className='row mb-2' data-kt-buttons='true'>
          {teamname.map((name, id: any) => (
            <div className='col' key={id}>
              <Field
                type='radio'
                className='btn-check'
                name='accountTeamSize'
                value={name.name}
                id={`kt_account_team_size_select_${name.id}`}
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
                id={`kt_account_team_size_select_${name.id}`}
              >
                <span className='fw-bolder fs-3'>{name.name}</span>
              </label>
            </div>
          ))}



        </div>


      </div>


    </div>
  )
}

export { Step2 }
