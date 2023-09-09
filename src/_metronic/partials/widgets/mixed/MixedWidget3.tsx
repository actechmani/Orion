/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { dashboardData } from './constant'
import { FaAws } from 'react-icons/fa'
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { toAbsoluteUrl } from '../../../helpers';
type Props = {
  className: string

}

const CardDesign: React.FC<Props> = () => {

  const cloudTech = (tech) => {
    switch (tech) {
      case "AWS":
        return <FaAws size={40} />
      case "GCP":
        return <SiGooglecloud size={40} />
      case "Azure":
        return <SiMicrosoftazure size={40} />

    }
  }
  const fontstyle = { marginLeft: "15px", color: "grey", fontSize: "13px", minHeight: "130px" }

  return (


    <div className='col-md-12  '>
      <div className='row'>
        {dashboardData.map((dashboard, id: any) => (
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4  pb-3' key={id} >

            <div className='card  mb-5 mb-xl-8  '  >

              <div className="card-body p-0">

                <div className={`mixed-widget-12-chart card-rounded-bottom  `} >
                  <img className=" card-rounded-top w-100  " src={toAbsoluteUrl('/media/orionImage/cluster.png')} />
                </div>

                <div className='card-rounded bg-body mt-n10 position-relative card-px py-5  ' style={{ height: "100%" }} >


                  <div className='row g-0'  >
                    <div className='flex-grow-1 '>

                      <a href='#' className='text-dark fw-bold text-hover-primary fs-4 text-center'>
                        {dashboard.name}
                      </a>

                      <div style={fontstyle} >
                        {Array.isArray(dashboard.text) ? (
                          dashboard.text.map((content, id): any => (
                            <React.Fragment key={id}>
                              {dashboard?.name === "Cloud Management service" ? (
                                <span style={{ color: '#8f52ebff' }} className=' mx-5'  >

                                  {cloudTech(content)}

                                </span>
                              ) : (
                                <div className='row mt-5' style={{ margin: "10px 0px" }}>
                                  <div className='col-md-7 '>
                                    <div > {content.label} </div>
                                  </div>
                                  <div className='col-md-5'>
                                    <span style={{ color: "white", borderRadius: "5px", padding: "5px", backgroundColor: "#8f52ebff" }}>{content.value} </span>
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          ))
                        ) : (
                          <p className='py-3' >{dashboard.text}</p>

                        )}
                      </div>
                    </div>



                  </div>



                </div>


              </div>

            </div>


          </div>

        ))}
      </div>
    </div>

  )
}


export { CardDesign }
