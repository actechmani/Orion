import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  const planname = [
    {
      id: 1,
      name: 'Cluster Management',
      icon: 'fas fa-user-cog',
    },
    {
      id: 2,
      name: 'Environment Management',
      icon: 'fas fa-user-cog',
    },
    {
      id: 3,
      name: 'Service Catalog',
      icon: 'fas fa-book-open',
    },
  ]

  return (
    <div className='w-100 p-1'>
      <div className='pb-5 pb-lg-11 '>
        <h2 className='fw-bolder text-dark'>What are you planning to use this app for?</h2>
      </div>

      <div className='mb-15  fv-row d-flex flex-column align-items-center'>
        {planname.map((name, id: any) => (
          <div className='row mb-2 w-400px' data-kt-buttons='true'>
            <div className='btn btn-outline btn-outline-dashed btn-outline-default w-100 mb-0  '>
              <div className='d-flex flex-start'>
                <i
                  className={` d-flex flex-row justify-content-center ${name.icon}` + ` me-5 pt-2`}
                ></i>
                <Field
                  type='radio'
                  className='btn-check'
                  name='accountTeamSize'
                  value={name.name}
                  id={`kt_account_team_size_select_${id}`}
                />
                <label htmlFor={`kt_account_team_size_select_${id}`}>
                  <span className='fw-bold text-gray-600'>{name.name}</span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export {Step3}
