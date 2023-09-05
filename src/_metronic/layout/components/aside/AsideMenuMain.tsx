/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItemWithSubMain } from './AsideMenuItemWithSubMain'
import { AsideMenuItem } from './AsideMenuItem';

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        title='Dashboard'
        fontIcon='biHome'
        bsTitle='Dashboard'
        className='py-3'
      />

      <AsideMenuItemWithSubMain to='/environment' title='Environments' fontIcon='FaCloud' bsTitle='Environment'>
        <AsideMenuItem to='/environment' title='Environments' bsTitle='Environment' hasBullet={true} />
        <AsideMenuItem to='/env-schedule' title='Environment Schedule' bsTitle='Environment Schedule' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/error' title='K8s Clusters' fontIcon='FaAnchor' bsTitle='K8s Clusters'>
        <AsideMenuItem to='/error/404' title='Cluster' bsTitle='Cluster' hasBullet={true} />
        <AsideMenuItem to='/error/404' title='Node Groups Schedule' bsTitle='Node Group Schedule' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Foundations Component' bsTitle='Foundations Component' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='WorkLoads' bsTitle='WorkLoads' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Blueprint' bsTitle='Blueprint' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Cluster Global View' bsTitle='Cluster Global View' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/error' title='Images' fontIcon='FaDocker' bsTitle='Images'>
        <AsideMenuItem to='/error/404' title='UBI Image Service' bsTitle='UBI Image Service' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Docker Image Service' bsTitle='Docker Image Service' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/error' title='Services' fontIcon='FaServicestack' bsTitle='Services'>
        <AsideMenuItem to='/error/404' title='Services' bsTitle='Services' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/error' title='Ops Hub' fontIcon='FaHubspot' bsTitle='Ops Hub'>
        <AsideMenuItem to='/error/404' title='Create Action' bsTitle='Create Action' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Self Servie' bsTitle='Self Servie' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Service History' bsTitle='Service History' hasBullet={true} />

      </AsideMenuItemWithSubMain>


      <AsideMenuItemWithSubMain to='/settings' title='Admin Settings' fontIcon='ImFileText2' bsTitle='Admin Settings'>
        <AsideMenuItem to='/settings' title='Access Management' bsTitle='Access Management' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Audit Trail' bsTitle='Audit Trail' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Application Configuration' bsTitle='Application Configuration' hasBullet={true} />
      </AsideMenuItemWithSubMain>

    </>
  )
}
