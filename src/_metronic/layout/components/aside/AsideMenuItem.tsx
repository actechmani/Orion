/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { checkIsActive, KTIcon, WithChildren } from '../../../helpers'
import { useLayout } from '../../core'
import { BiSolidDashboard  } from 'react-icons/bi'
import { FaCloud, } from 'react-icons/fa'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  className?: string
  hasBullet?: boolean
  bsTitle?: string
  outside?: boolean
}

const AsideMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  className,
  bsTitle,
  outside = false,
  hasBullet = false,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)
  const { config } = useLayout()
  const { aside } = config;


  return (
  
      <div className={clsx('menu-item', isActive && 'here show', className)}>
        {outside ? (
          <a
            href={to}
            target='_blank'
            className={clsx('menu-link menu-center', { active: isActive })}
          >
            {fontIcon && aside.menuIcon === 'font' && (
              <span className='menu-icon me-0'>
                <i className={clsx('bi', fontIcon, 'fs-2')}></i>
              </span>
            )}
          </a>
        ) : (
          <>
            <Link
              className={clsx('menu-link menu-center', { active: isActive })}
              to={to}
              data-bs-toggle='tooltip'
              data-bs-trigger='hover'
              data-bs-dismiss='click'
              data-bs-placement='right'
              data-bs-original-title={bsTitle}
            >
              {hasBullet && (
                <span className='menu-bullet'>
                  <span className='bullet bullet-dot'></span>
                </span>
              )}
              {icon && aside.menuIcon === 'svg' && (
                <span className='menu-icon'>
                  <KTIcon iconName={icon} className='fs-2' />
                </span>
              )}
              {fontIcon ? (
                <span className='menu-icon me-0'>
                  {fontIcon === 'BiSolidDashboard' &&
                    <BiSolidDashboard size={20} />
                  }
                  {
                    fontIcon === 'FaCloud' &&
                    <FaCloud size={20}/>
                  }


                 </span>
              ) : (
                <span className='menu-title'>{title}</span>
              )}
            </Link>
            {children}
          </>
        )}
      </div>
 
  )
}

export { AsideMenuItem }
