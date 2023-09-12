import { FC } from 'react'
import { Link } from 'react-router-dom'

import { toAbsoluteUrl } from '../../../helpers'
import { useOktaAuth } from '@okta/okta-react'

const HeaderUserMenu: FC = () => {
  const { oktaAuth } = useOktaAuth();

  const logoutOcta = async () => {
    console.log("window.origin", window.origin)
    try {
      window.sessionStorage.clear();
      window.localStorage.clear();
      await oktaAuth.signOut();

    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
          </div>
          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>sbalasubramaniyan</span>
            </div>
          </div>
        </div>
      </div>
      <div className='separator my-2'></div>
      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>
      <div className='menu-item px-5 my-1'>
        <Link to='/settings' className='menu-link px-5'>
          Account Settings
        </Link>
      </div>
      <div className='menu-item px-5'>
        <button onClick={logoutOcta} className='menu-link px-5'>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
