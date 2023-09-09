
import { Horizontal } from '../../wizards/components/Horizontal'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'


function OnBoardpage() {
  return (


    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>

      <div
        className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
        style={{ backgroundImage: `url(${toAbsoluteUrl('/media/orionImage/manageuser.png')})` }}
      >


        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>

          <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
            Fast, Efficient and Productive
          </h1>

          <div className='text-white fs-base text-center'>
            In this kind of post,{' '}
            <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
              the blogger
            </a>
            introduces a person they’ve interviewed <br /> and provides some background information
            about
            <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
              the interviewee
            </a>
            and their <br /> work following this is a transcript of the interview.
          </div>
        </div>
      </div>
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50   order-2 order-lg-1'>

        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>

          <Horizontal />

        </div>

      </div>
    </div>


  )
}

export default OnBoardpage