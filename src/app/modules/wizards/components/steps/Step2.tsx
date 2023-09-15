import React, {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {
  const teamname = [
    {
      id: 1,
      name: 'MDM',
    },
    {
      id: 2,
      name: 'Platform',
    },
    {
      id: 3,
      name: 'QA',
    },
    {
      id: 4,
      name: 'Ops',
    },
    {
      id: 5,
      name: 'Engineering',
    },
  ]

  return (
    <div className='w-100 mb-0 '>
      <div className='pb-0 pb-lg-5 mt-0'>
        <h2 className='fw-bolder text-dark'>Which team do you belong to?</h2>
      </div>

      <div className='mb-0 fv-row'>
        <label className='d-flex align-items-center form-label mb-2 text-gray-700'>
          Specify Team
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your team size to help us setup your billing'
          ></i>
        </label>

        <div className='container w-100 p-0'>
          <div className='row' data-kt-buttons='true'>
            {teamname.map((name, id: any) => (
              <div className={id === 4 ? 'col-12 px-19 mb-1' : 'col-6 mb-7'} key={id}>
                <div className={id === 4 ? 'px-20' : ''}>
                  <div className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'>
                    <Field
                      type='radio'
                      className='btn-check'
                      name='accountTeamSize'
                      value={name.name}
                      id={`kt_account_team_size_select_${name.id}`}
                    />
                    <label id={`kt_account_team_size_select_${name.id}`}>
                      <span className='fw-bold text-gray-600'>{name.name}</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step2}
