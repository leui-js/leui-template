import { axiosIns as axios } from '@axios'
import { AxiosResponse } from 'axios'

interface OaCommonAPI {
  [key: string]: string
}


// oa/hr_java/open/get_basic_info.json?user_min_list=dustinliang
const apiList: OaCommonAPI = {
  session: 'api/user/session',
  avatar: 'okr/get_co_token',
  basicInfo: 'hr_java/open/get_basic_info',
  hrInfo: 'okr/get_company_info_detail',
}

export const oaAPI = new Proxy(apiList, {
  get: (target: OaCommonAPI, prop: string | symbol) => {
    const api: string = target[prop as keyof OaCommonAPI]
    if (api)

      // return `${API_BASE}${api}.json`
      return `${api}.json`

    return 'unknown-api'
  },
})

export const checkLogin = async () => {
  try {
    const { mid, min } = await axios.get(oaAPI.session).then(fetchFirstItem)

    localStorage.setItem('mid', mid)
    localStorage.setItem('min', min)

    return mid
  }
  catch (e) {
    console.error('请求API失败', e)
  }
}


export const fetchFirstItem = (rawResponse: AxiosResponse) => {
  const { data: rows } = rawResponse
  return rows[0]
}


// export const oaAPI = oaAPI
