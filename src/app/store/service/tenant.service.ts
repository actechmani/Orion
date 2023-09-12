import { HTTPRequestHandler } from '../../utils/http';
import { Apis } from './apiEndpoint';


const fetchTenantAPI = async () => {
    const response = await HTTPRequestHandler.post(Apis.tenant.list, {});
    return response;
};


export { fetchTenantAPI }