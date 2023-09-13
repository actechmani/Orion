/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { checkIsActive, KTIcon, WithChildren } from '../../../helpers'
import { useLayout } from '../../core'
import { BiSolidDashboard } from 'react-icons/bi'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  className?: string
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

            {icon && aside.menuIcon === 'svg' && (
              <>
                <span className='menu-icon '>
                  <KTIcon iconName={icon} className='fs-2' />
                </span>
              </>

            )}
            {fontIcon ? (
              <div>
                <span className='menu-icon me-0   '>

                  {fontIcon === 'BiSolidDashboard' &&

                    <BiSolidDashboard size={20} />

                  }


                </span>
                <div style={{ fontSize: "10px" }} className='d-flex justify-content-center'>  {bsTitle}</div>
              </div>
            ) : (
              <span className='menu-title'>{title}</span>
            )}

          </Link>
          {children}
        </>
      )
      }
    </div >

  )
}

export { AsideMenuItem }
