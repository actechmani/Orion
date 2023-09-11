import * as request from '../../utils/http';
import { Apis } from './apiEndpoint';


const fetchClusterAPI = async () => {
    const response = await request.default.post(Apis.cluster.list, {});
    console.log("response", response)
    return response;
};


export { fetchClusterAPI }