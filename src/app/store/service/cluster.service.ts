import { HTTPRequestHandler } from '../../utils/http';
import { Apis } from './apiEndpoint';
import _get from 'lodash/get';


const getAllClusterServices = (payload = {}) => HTTPRequestHandler.post(Apis.cluster.list, payload);

const getAllClusterSchedules = (payload = {}) => HTTPRequestHandler.post(Apis.clusterSchedule.list, payload);

const getClusterDetailedInformation = (payload = {}) =>
    HTTPRequestHandler.get(`${Apis.cluster.root}/${payload}?includeScheduleInfo=true`);

const postClusterInformation = (payload = {}) => HTTPRequestHandler.post(Apis.cluster.refresh, payload);

const getNodeGroupActivities = (payload) => HTTPRequestHandler.post(Apis.clusterSchedule.nodeGroupActivity, payload);


export { getAllClusterServices, getAllClusterSchedules, getClusterDetailedInformation, postClusterInformation, getNodeGroupActivities }