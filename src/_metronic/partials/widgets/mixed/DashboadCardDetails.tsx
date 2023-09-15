/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {dashboardData} from './constant'
import {FaAws} from 'react-icons/fa'
import {SiGooglecloud} from 'react-icons/si'
import {SiMicrosoftazure} from 'react-icons/si'
import {toAbsoluteUrl} from '../../../helpers'
import {useNavigate} from 'react-router-dom'
type Props = {
  className: string
}

const CardDesign: React.FC<Props> = () => {
  const navigate = useNavigate()
  const cloudTech = (tech) => {
    switch (tech) {
      case 'AWS':
        return <FaAws size={40} />
      case 'GCP':
        return <SiGooglecloud size={40} />
      case 'Azure':
        return <SiMicrosoftazure size={40} />
    }
  }
  // const fontstyle = {marginLeft: '15px', color: 'grey', fontSize: '13px', minHeight: '130px'}
  const fontstyle = {
    marginLeft: '3px',
    marginRight: '3px',
    color: 'grey',
    fontSize: '13px',
    minHeight: '110px',
    maxHeight: '110px',
    height: '110px',
    marginBottom: '2px',
    overflow: 'hidden',
  }

  return (
    <div className='col-md-12  '>
      <div className='row'>
        {dashboardData.map((dashboard, id: any) => (
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4  pb-3' key={id}>
            <div className='card '>
              <img
                className='card-img-top w-100'
                src={toAbsoluteUrl(dashboard.image)}
                style={{height: '120px'}}
              />
              <div className='card-body p-0'>
                <h5
                  className='card-title pt-1 d-flex flex-row align-items-center justify-content-center'
                  style={{height: '35px'}}
                >
                  {dashboard.name}
                </h5>
                <div style={fontstyle} className='fw-bold text-gray-500 pt-0'>
                  {Array.isArray(dashboard.text) ? (
                    dashboard.text.map((content, id): any => (
                      <React.Fragment key={id}>
                        {dashboard?.name === 'Cloud Management service' ? (
                          <span style={{color: '#8f52ebff'}} className='mt-3 mx-3'>
                            {cloudTech(content)}
                          </span>
                        ) : (
                          <div className='row mt-5' style={{margin: '10px 0px'}}>
                            <div className='col-md-7 '>
                              <div> {content.label} </div>
                            </div>
                            <div className='col-md-5'>
                              <span
                                style={{
                                  color: 'white',
                                  borderRadius: '5px',
                                  padding: '5px',
                                  backgroundColor: '#8f52ebff',
                                }}
                              >
                                {content.value}{' '}
                              </span>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <p className='py-3'>{dashboard.text}</p>
                  )}
                </div>
                <div style={{marginTop: '0px', marginRight: '10px', marginBottom: '15px'}}>
                  <button
                    className='btn btn-primary btn-sm float-end p-1 mb-2'
                    onClick={() => navigate(dashboard.navigation)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export {CardDesign}
