/* eslint-disable react/jsx-no-target-blank */
import { AsideMenuItemWithSubMain } from './AsideMenuItemWithSubMain'
import { AsideMenuItem } from './AsideMenuItem';

export function AsideMenuMain() {

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        title='Dashboard'
        fontIcon='BiSolidDashboard'
        bsTitle='Dashboard'
        className='py-3'
      />

      <AsideMenuItemWithSubMain to='/' title='Environments' fontIcon='FaCloud' bsTitle='Environment'>
        <AsideMenuItem to='environment' title='Environments' bsTitle='Environment' hasBullet={true} />
        <AsideMenuItem to='env-schedule' title='Environment Schedule' bsTitle='Environment Schedule' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/' title='K8s Clusters' fontIcon='FaAnchor' bsTitle='K8s Clusters'>
        <AsideMenuItem to='cluster-service' title='Cluster' bsTitle='Cluster' hasBullet={true} />
        <AsideMenuItem to='cluster-schedule' title='Node Groups Schedule' bsTitle='Node Group Schedule' hasBullet={true} />
        <AsideMenuItem to='foundation-components' title='Foundations Component' bsTitle='Foundations Component' hasBullet={true} />
        <AsideMenuItem to='dashboard' title='WorkLoads' bsTitle='WorkLoads' hasBullet={true} />
        <AsideMenuItem to='blueprint' title='Blueprint' bsTitle='Blueprint' hasBullet={true} />
        <AsideMenuItem to='global-cluster-service' title='Cluster Global View' bsTitle='Cluster Global View' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/' title='Images' fontIcon='FaDocker' bsTitle='Images'>
        <AsideMenuItem to='image-service-ubi' title='UBI Image Service' bsTitle='UBI Image Service' hasBullet={true} />
        <AsideMenuItem to='image-service' title='Docker Image Service' bsTitle='Docker Image Service' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/' title='Services' fontIcon='FaServicestack' bsTitle='Services'>
        <AsideMenuItem to='service' title='Services' bsTitle='Services' hasBullet={true} />
      </AsideMenuItemWithSubMain>

      <AsideMenuItemWithSubMain to='/' title='Ops Hub' fontIcon='FaHubspot' bsTitle='Ops Hub'>
        <AsideMenuItem to='/error/404' title='Create Action' bsTitle='Create Action' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Self Servie' bsTitle='Self Servie' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Service History' bsTitle='Service History' hasBullet={true} />

      </AsideMenuItemWithSubMain>


      <AsideMenuItemWithSubMain to='/' title='Admin Settings' fontIcon='RiSettings3Fill' bsTitle='Admin Settings'>
        <AsideMenuItem to='entitlements' title='Access Management' bsTitle='Access Management' hasBullet={true} />
        <AsideMenuItem to='audit-trail' title='Audit Trail' bsTitle='Audit Trail' hasBullet={true} />
        <AsideMenuItem to='app-configuration' title='Application Configuration' bsTitle='Application Configuration' hasBullet={true} />
      </AsideMenuItemWithSubMain>

    </>
  )
}
