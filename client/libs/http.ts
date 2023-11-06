// interface Options {
//   headers?: { [key: string]: string }
//   body?: any
// }
// interface Response<T> {
//   code: number
//   data: T
//   msg: string
// }
// const host = 'http://localhost:8000/'
// async function get<T>(url: string, options: Options = {}): Promise<Response<T>> {
//   const response = await fetch(`${host}${url}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       ...options.headers,
//     },
//     method: 'GET',
//   })

//   if (!response.ok)
//     throw new Error(response.statusText)

//   const contentType = response.headers.get('content-type')
//   if (contentType && contentType.includes('application/json')) {
//     return response.json()
//   }
//   else {
//     return {
//       code: response.status,
//       data: response.text(),
//       msg: response.statusText,
//     } as Response<T>
//   }
// }

// async function post<T>(url: string, data: any, options: Options = {}): Promise<Response<T>> {
//   const response = await fetch(`${host}${url}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       ...options.headers,
//     },
//     method: 'POST',
//     body: JSON.stringify(data),
//   })

//   if (!response.ok)
//     throw new Error(response.statusText)

//   const contentType = response.headers.get('content-type')
//   if (contentType && contentType.includes('application/json')) {
//     return response.json()
//   }
//   else {
//     return {
//       code: response.status,
//       data: response.text(),
//       msg: response.statusText,
//     } as Response<T>
//   }
// }

// async function uploadFile<T>(url: string, file: File, options: Options = {}): Promise<Response<T>> {
//   const formData = new FormData()
//   formData.append('file', file, encodeURI(file.name))

//   const response = await fetch(`${host}${url}`, {
//     headers: {
//       ...options.headers,
//     },
//     method: 'POST',
//     body: formData,
//   })

//   if (!response.ok)
//     throw new Error(response.statusText)

//   const contentType = response.headers.get('content-type')
//   if (contentType && contentType.includes('application/json')) {
//     return response.json()
//   }
//   else {
//     return {
//       code: response.status,
//       data: response.text(),
//       msg: response.statusText,
//     } as Response<T>
//   }
// }

// export {
//   get,
//   post,
//   uploadFile,
// }
