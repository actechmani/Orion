/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { toAbsoluteUrl } from '../../../helpers'

type Props = {
  id: number
  className: string
  image: string
  title: string
  description: string
}

const StatisticsWidget1: React.FC<Props> = ({ className, image, id, title, description }) => {
  const logoname: string = "logo" + id;
  console.log("logoname", logoname)

  return (
    <div
      className={`card bgi-no-repeat ${className}`}

    >
      {/* begin::Body */}
      <div className='card-body'>
        <img src={image[logoname]} />
        <a href='#' className='card-title ms-3 fw-bold text-muted text-hover-primary fs-5'>
          {title}
        </a>

        <p
          className='text-dark-75 mt-3 fw-semibold fs-5 m-0' 
          style={{minHeight:'40%'}}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <hr />
        <div>
          <a href="#">View Integration</a>

        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export { StatisticsWidget1 }
