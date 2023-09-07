// import HttpInterceptor from './httpInterceptor'

// const baseURL = `${process.env.API_URL}:${process.env.API_PORT}/${process.env.API_BASE_URL}/`

// export default class HTTPRequestHandler {
//   static request = new HttpInterceptor(baseURL).getRequest()

//   static get = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.get(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })

//   static post = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.post(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })

//   static put = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.put(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })
//   static delete = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.delete(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })

//   static patch = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.patch(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })

//   static head = (
//     url: string,
//     payload?: any, // Define the payload type or use 'any' if it can vary
//     headers: Record<string, string> = {}
//   ): Promise<any> =>
//     HTTPRequestHandler.request.head(url, {
//       data: payload, // Pass the payload as 'data' property
//       headers: headers, // Pass the headers as 'headers' property
//     })

//   static redirectTo = (path) => {
//     document.location = path
//   }
// }
