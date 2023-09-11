import * as request from '../../utils/http';
import {Apis} from './apiEndpoint';


const fetchTenantAPI = async () => {
    const response = await request.default.post(Apis.tenant.list, {});
    console.log("response", response)
    return response;
};


export { fetchTenantAPI }