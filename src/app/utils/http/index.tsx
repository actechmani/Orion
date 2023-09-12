import { HttpInterceptor } from './httpInterceptor';

const baseURL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${process.env.REACT_APP_API_BASE_URL}/`;

export class HTTPRequestHandler {
    static request = new HttpInterceptor(baseURL).getRequest();

    static get = (url, headers = {}) => HTTPRequestHandler.request.get(url, headers);

    static post = (url, payload, headers = {}) => HTTPRequestHandler.request.post(url, payload, headers);

    static put = (url, payload, headers = {}) => HTTPRequestHandler.request.put(url, payload, headers);

    static delete = (url, headers = {}) => HTTPRequestHandler.request.delete(url, headers);

    static patch = (url, payload, headers = {}) => HTTPRequestHandler.request.patch(url, payload, headers);

    static head = (url, headers = {}) => HTTPRequestHandler.request.head(url, headers);

    static redirectTo = (path) => {
        document.location = path;
    };
}
