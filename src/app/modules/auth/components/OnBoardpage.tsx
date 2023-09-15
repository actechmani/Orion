import {Horizontal} from '../../wizards/components/Horizontal'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {ImGift} from 'react-icons/im'

function OnBoardpage() {
  return (
    <div className='card mb-5 mb-xl-10 p-5 mt-0'>
      <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100 '>
        <div
          className='d-flex  flex-lg-row-fluid w-lg-50 order-1 order-lg-2  bgi-size-cover bgi-position-center'
          style={{backgroundImage: `url(${toAbsoluteUrl('/media/orionImage/manageuser.png')})`}}
        ></div>
        <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 order-2 order-lg-1'>
          <div className='d-flex flex-center flex-column flex-lg-row-fluid p-0  '>
            <Horizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoardpage
