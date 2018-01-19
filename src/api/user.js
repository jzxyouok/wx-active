const fetch = require('../utils/fetch')

/**
 * 绑定用户
 * @param  {String} code
 * @return {Promise}   包含抓取任务的Promise
 */
export function bindUser (code) {
  const params = { code }
  return fetch('api/v1/login', params).then(res => res.data.result.addressComponent.city)
}
