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
            <span className='menu-icon me-0'>
              {
                fontIcon === 'FaCloud' &&
                <FaCloud />
              }
              {
                fontIcon === 'FaAnchor' &&
                <FaAnchor />
              }

              {
                fontIcon === 'FaDocker' &&
                <FaDocker />
              }

              {
                fontIcon === 'FaServicestack' &&
                <FaServicestack />
              }

              {
                fontIcon === 'FaHubspot' &&
                <FaHubspot />
              }

              {
                fontIcon === 'ImFileText2' &&
                <ImFileText2 />
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
