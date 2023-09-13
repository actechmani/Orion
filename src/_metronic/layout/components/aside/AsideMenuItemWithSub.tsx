import { FC } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { checkIsActive, WithChildren } from '../../../helpers'
import { useLayout } from '../../core'
import Icons from '../../Icons'

type Props = {
  to: string
  title: string
  icon?: string 
}

const AsideMenuItemWithSub: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)
  const { config } = useLayout()
  const { aside } = config
  const IconComponent = Icons[icon]

  return (
    <div
      className={clsx('menu-item', { 'here show': isActive }, 'menu-accordion')}
      data-kt-menu-sub='accordion'
      data-kt-menu-trigger='click'
    >


      <span className='menu-link'>
        <span className='menu-icon text-black'>
          <IconComponent />
        </span>


        <span className='menu-title'>{title}</span>
        <span className='menu-arrow'></span>
      </span>
      <div className={clsx('menu-sub menu-sub-accordion', { 'menu-active-bg': isActive })}>
        {children}
      </div>
    </div>
  )
}

export { AsideMenuItemWithSub }
