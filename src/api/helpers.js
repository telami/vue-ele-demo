import axios from 'axios'

const RESPONSE_SUCCESS = 0

export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { error, data } = res.data
      if (error === RESPONSE_SUCCESS) {
        return data
      }
    }).catch(() => {

    })
  }
}
