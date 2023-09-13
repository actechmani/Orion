/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, } from 'react-redux';
import aws from '../../../../assets/cluster/aws.svg';
import gcp from '../../../../assets/cluster/gcp.svg';
import azure from '../../../../assets/cluster/azure.svg';

function OverviewCluster() {
    const navigate = useNavigate();
    const { clusterDetailedInformation } = useSelector((state: any) => state.cluster);
    console.log("clusterDetailedInformation", clusterDetailedInformation);

    const getCloudImage = (cloud) => {
        switch (cloud) {
            case "azure":
                return <img src={azure} alt='azure' />
            case "aws":
                return <img src={aws} alt='azure' />
            case "gcp":
                return <img src={gcp} alt='azure' />
        }
    }

    return (
        <div className='card mb-5 mb-xl-10'>
            <div className='card-body pt-9 pb-0'>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                    <div className='me-7 mb-4'>
                        <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                            {getCloudImage(clusterDetailedInformation.cloudType)}
                            <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                        </div>
                    </div>

                    <div className='flex-grow-1'>
                        <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                            <div className='d-flex flex-column'>
                                <div className='d-flex align-items-center mb-2'>
                                    <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                                        {clusterDetailedInformation.name}
                                    </a>
                                    <a>
                                        <KTIcon iconName='verify' className='fs-1 text-primary' />
                                    </a>
                                </div>

                                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                                    <a

                                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                                    >
                                        <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                                        {clusterDetailedInformation.accountId}
                                    </a>

                                    <a
                                        href='#'
                                        className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                                    >
                                        <KTIcon iconName='sms' className='fs-4 me-1' />
                                        {clusterDetailedInformation?.tags?.OWNEREMAIL}
                                    </a>
                                </div>
                            </div>

                            <div className='d-flex my-4'>
                                <a  onClick={() => navigate('/cluster-service')} className='btn btn-sm btn-primary me-2' id='kt_user_follow_button'>
                                    <KTIcon iconName='check' className='fs-3 d-none' />

                                    <span className='indicator-label'>Cluster List</span>
                                    <span className='indicator-progress'>
                                        Please wait...
                                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                    </span>
                                </a>

                            </div>
                        </div>

                        <div className='d-flex flex-wrap flex-stack'>
                            <div className='d-flex flex-column flex-grow-1 pe-8'>
                                <div className='d-flex flex-wrap'>
                                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                                        <div className='d-flex align-items-center'>
                                            
                                            <div className='fs-2 fw-bolder text-align-center'>{clusterDetailedInformation?.k8sVersion}</div>
                                        </div>

                                        <div className='fw-bold fs-6 text-gray-400'>Kubernetes Version</div>
                                    </div>

                                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <div className='fs-2 fw-bolder'>{clusterDetailedInformation?.region}</div>
                                        </div>

                                        <div className='fw-bold fs-6 text-gray-400'>region</div>
                                    </div>

                                   
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export { OverviewCluster }