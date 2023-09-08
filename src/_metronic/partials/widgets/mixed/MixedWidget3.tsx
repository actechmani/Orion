/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { dashboardData } from './constant'
import { FaAws } from 'react-icons/fa'
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
type Props = {
  className: string

}

const CardDesign: React.FC<Props> = ({ className }) => {

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
  console.log("dashboardData", dashboardData);
  return (

    <div >
      <div className='col-md-12  '>
        <div className='row'>
          {dashboardData.map((dashboard, id: any) => (
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4  pb-3' key={id} >

              <div className={`card ${className} `} style={{ height: "100%" }}>

                <div className='card-body p-0'>

                  <div

                    className={`mixed-widget-12-chart card-rounded-bottom  `}
                  > <img className=" card-rounded-top w-100 h-100" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" /></div>

                  <div className='card-rounded bg-body mt-n10 position-relative card-px py-10'>

                    <div className='row g-0 mb-7'>
                      <div className='fs-2 fw-bold text-gray-800'>   {dashboard.name}</div>

                      {Array.isArray(dashboard.text) ? (
                        dashboard.text.map((content, id): any => (
                          <React.Fragment key={id}>
                            {dashboard?.name === "Cloud Management service" ? (
                              <span style={{ color: '#8f52ebff' }}>
                                {cloudTech(content)}

                              </span>
                            ) : (
                              <div className='row ' style={{ margin: "10px 0px" }}>
                                <div className='col-md-7'>
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
                        dashboard.text
                      )}




                    </div>


                  </div>

                </div>

              </div>


            </div>

          ))}
        </div>
      </div>
    </div >

  )
}


export { CardDesign }
