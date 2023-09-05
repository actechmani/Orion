import { FC } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { checkIsActive, WithChildren } from '../../../helpers'
import { useLayout } from '../../core'
import { FaCloud, FaAnchor, FaServicestack, FaHubspot, FaDocker } from 'react-icons/fa'
import { ImFileText2 } from 'react-icons/im';

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
  bsTitle?: string
}

const AsideMenuItemWithSubMain: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet,
  bsTitle,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)
  const { config } = useLayout()
  const { aside } = config
  return (
    <div
      className={clsx('menu-item py-3', { 'here show': isActive })}
      data-kt-menu-trigger='click'
      data-kt-menu-placement='right-start'
    >
      <OverlayTrigger
        placement='right'
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => (
          <Tooltip id='button-tooltip' {...props}>
            {bsTitle}
          </Tooltip>
        )}
      >
        <span className='menu-link menu-center'>
          {fontIcon && aside.menuIcon === 'font' && (
            <span className='menu-icon me-0 '>
              {
                fontIcon === 'FaCloud' &&
                <FaCloud size={20}/>
              }
              {
                fontIcon === 'FaAnchor' &&
                <FaAnchor size={20}/>
              }

              {
                fontIcon === 'FaDocker' &&
                <FaDocker size={20}/>
              }

              {
                fontIcon === 'FaServicestack' &&
                <FaServicestack size={20}/>
              }

              {
                fontIcon === 'FaHubspot' &&
                <FaHubspot size={20}/>
              }

              {
                fontIcon === 'ImFileText2' &&
                <ImFileText2 size={20}/>
              }



            </span>
          )}
        </span>
      </OverlayTrigger>
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
