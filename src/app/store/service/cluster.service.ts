import { HTTPRequestHandler } from '../../utils/http';
import { Apis } from './apiEndpoint';
import _get from 'lodash/get';

const fetchClusterAPI = async () => {
    const response = await HTTPRequestHandler.post(Apis.cluster.list, {});
    return response;
};

const getAllClusterSchedules = (payload = {}) => HTTPRequestHandler.post(Apis.clusterSchedule.list, payload);

const getClusterDetailedInformation = (payload = {}) =>
    HTTPRequestHandler.get(`${Apis.cluster.root}/${payload}?includeScheduleInfo=true`);

const postClusterInformation = (payload = {}) => HTTPRequestHandler.post(Apis.cluster.refresh, payload);

const getNodeGroupActivities = (payload) => HTTPRequestHandler.post(Apis.clusterSchedule.nodeGroupActivity, payload);


export { fetchClusterAPI, getAllClusterSchedules, getClusterDetailedInformation, postClusterInformation, getNodeGroupActivities }