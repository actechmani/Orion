import axios from 'axios';
import _get from 'lodash/get';

export class HttpInterceptor {
  _request: any = null;

  constructor(baseUrl) {
    this._request = axios.create({
      baseURL: baseUrl,
    });
    this._configInterceptRequest();
    this._configInterceptResponse();
  }

  _configInterceptResponse = () => {
    this._request.interceptors.response.use(this._handleSuccess, this._handleError);
  };

  _configInterceptRequest = () => {
    this._request.interceptors.request.use(this._requestCallBack);
  };

  _requestCallBack = (config) => {
    config.headers = {
      accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('okta-token')}`,
      'Access-Control-Allow-Origin': '*',
      'x-tenant-id': localStorage.getItem('tenantId') || null,
      'x-user-id': localStorage.getItem('x-userId') || null,
    };
    return config;
  };

  _handleSuccess = (res) => {
    return res;
  };

  _showModal = (title: string, message: string) => {

    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    modalElement.innerHTML = `
          <div class="modal-content">
            <div class="modal-header">
              <h3 >${title}</h3>
            </div>
            <div class="modal-body">
              <p class="text-center">${message}</p>
            </div>
          </div>
        `;

    document.body.appendChild(modalElement);
  };

  _handleError = (error) => {
    switch (error.response?.status) {
      case 401:
        if (sessionStorage.getItem('tenantId')?.length == 0) {
          this._showModal('Error', _get(error, 'message', 'Tenant Id is Empty, please contact admin'));
          break;
        }
        else {
          // window.sessionStorage.clear()
          // this.redirectTo(document, '/');
          break;
        }

      case 400:
        console.log("400 log");
        console.log(error);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  getRequest = () => this._request;
}
