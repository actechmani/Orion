import axios from 'axios';

const fetchTenantAPI = async () => {
    const response = await axios.get("https://api.publicapis.org/entries");
    return response;
};


export { fetchTenantAPI }