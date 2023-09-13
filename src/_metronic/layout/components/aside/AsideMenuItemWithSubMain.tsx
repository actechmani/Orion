import { FC } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { checkIsActive, WithChildren } from '../../../helpers'
import { useLayout } from '../../core'
import { FaCloud, FaAnchor, FaServicestack, FaHubspot, FaDocker } from 'react-icons/fa'
import { RiSettings3Fill } from 'react-icons/ri';

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  bsTitle?: string
}

const AsideMenuItemWithSubMain: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  bsTitle,
  fontIcon,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)
  const { config } = useLayout()
  const { aside } = config
  console.log("isActive", isActive)
  return (
    <div
      className={clsx('menu-item py-3', { 'here show': isActive })}
      data-kt-menu-trigger='hover'
      data-kt-menu-placement='right-start'
    >

      <span className='menu-link menu-center'>
        {fontIcon && (
          <span className='menu-icon me-0 '>
            {
              fontIcon === 'FaCloud' &&
              <FaCloud size={20} ></FaCloud>


            }

            {
              fontIcon === 'FaAnchor' &&
              <FaAnchor size={20} />
            }

            {
              fontIcon === 'FaDocker' &&
              <FaDocker size={20} />
            }

            {
              fontIcon === 'FaServicestack' &&
              <FaServicestack size={20} />
            }

            {
              fontIcon === 'FaHubspot' &&
              <FaHubspot size={20} />
            }

            {
              fontIcon === 'RiSettings3Fill' &&
              <RiSettings3Fill size={20} />
            }



          </span>

        )}
      </span>
      <span style={{ fontSize: "10px" }} className='d-flex justify-content-center'>  {bsTitle}</span>
      <div
        className={clsx('menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4', {
          'menu-active-bg': isActive,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export { AsideMenuItemWithSubMain }
