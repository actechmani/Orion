import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import _get from 'lodash/get'

export class HttpInterceptor {
  private _request: AxiosInstance

  constructor(baseUrl: string) {
    this._request = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
    })
    this._configInterceptRequest()
    this._configInterceptResponse()
  }

  private _configInterceptResponse = () => {
    this._request.interceptors.response.use(this._handleSuccess, this._handleError)
  }

  private _configInterceptRequest = () => {
    this._request.interceptors.request.use(this._requestCallBack)
}

//     this._request.interceptors.request.use(this._requestCallBack)
//   }

  private _requestCallBack(config: any): any {
    config.headers = {
      accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('okta-token')}`,
      'Access-Control-Allow-Origin': '*',
      'x-tenant-id': localStorage.getItem('tenantId') || null,
      ...config.headers, // Preserve existing headers
    }
    return config
  }

  private _handleSuccess = (res: AxiosResponse): AxiosResponse => {
    return res
  }

  private _showModal = (title: string, message: string): void => {
    const modalElement = document.createElement('div')
    modalElement.classList.add('modal')
    modalElement.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
        </div>
        <div class="modal-body">
          <p class="text-center">${message}</p>
        </div>
      </div>
    `

    document.body.appendChild(modalElement)
  }

  private _handleError = (error: any): Promise<any> => {
    switch (error.response?.status) {
      case 401:
        if (!localStorage.getItem('tenantId')) {
          this._showModal('Error', 'Tenant Id is Empty, please contact admin')
          break
        } else {
          window.localStorage.clear()
          this.redirectTo('/')
          break
        }

      default:
        break
    }
    return Promise.reject(error)
  }

  private redirectTo = (path: string): void => {
    window.location.href = path
  }

  getRequest = (): AxiosInstance => this._request
}

