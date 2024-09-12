import type { AxiosResponse } from 'axios'
import axios from 'axios'

const baseURL = '//openmoa.oa.fenqile.com/oa/'

export interface ResultRow {

  // 如果还有其他字段，也可以在这里定义
  [key: string]: string | number | boolean | string[]
}

interface OAResponseData {
  retcode: number
  retmsg: string
  result_rows: ResultRow[]
}

type ResData = OAResponseData | ResultRow[]

enum API_RET_CODES {
  notLogin = 19002028,
  success = 0,
}

export const axiosIns = axios.create({
  baseURL,
  timeout: 0,
  withCredentials: true,

  // You can add your headers here
  // ================================
  // headers: { 'X-Custom-Header': 'foo' },
})

const onLoginFail = (code: number, msg: string) => {
  console.error(code, msg)
  localStorage.removeItem('mid')

  location.replace(`//passport.oa.fenqile.com/?url=${(encodeURIComponent(location.href))}`)
}

// ℹ️ Add response interceptor to handle 40x response
axiosIns.interceptors.response.use((response: AxiosResponse<ResData, any>) => {
  try {
    const respData = response.data as OAResponseData
    const { retcode, retmsg, result_rows: resRows } = respData
    const code = Number(retcode)
    if (code === API_RET_CODES.success) {
      // 这里强行修改 response.data 属性,上放置处理后的数据
      response.data = resRows as ResultRow[]

      return response
    }
    else if (code === API_RET_CODES.notLogin) {
      onLoginFail(retcode, retmsg)
    }

    return Promise.reject(new Error(retmsg))
  }
  catch (e) {
    return Promise.reject(e)
  }
},
(error: any) => {
  // Handle error
  if (error?.response?.status > 400) {
    // Remove "mid" from localStorage
    localStorage.removeItem('mid')

    // If 401 response returned from api
    // router.push('/login')
  }
  else {
    return Promise.reject(error)
  }
})

// export default axiosIns
