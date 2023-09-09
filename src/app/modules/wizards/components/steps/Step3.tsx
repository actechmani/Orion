import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

const Step3: FC = () => {
  const planname = [{
    id: 1,
    name: "Cluster Management",
    icon: "icon"
  },
  {
    id: 2,
    name: "Environment Management",
    icon: "icon"
  },
  {
    id: 3,
    name: "Service Catalog",
    icon: "icon"
  },

  ]
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>What are you planning
          to use this app for?</h2>


      </div>

      <div className='mb-10 fv-row'>

        {planname.map((name, id: any) => (
          <div className='row mb-2' data-kt-buttons='true'>

            <div className='col' >
              <Field
                type='radio'
                className='btn-check'
                name='accountTeamSize'
                value={name.name}
                id={`kt_account_team_size_select_${id}`}
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
                htmlFor={`kt_account_team_size_select_${id}`}
              >
                <span className='fw-bolder fs-3'>{name.name}</span>
              </label>
            </div>




          </div>
        ))}
      </div>


    </div>
  )
}

export { Step3 }
