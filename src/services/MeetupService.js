import Api from '@/services/Api'

export default{
  Creact (meetup, token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/meetup-creact', meetup, config)
  },
  getOwn (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/meetup-get', null, config)
  },
  Regis (post,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/meetup-regis', post, config)
  },
  Del (post,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/meetup-del', post, config)
  }
}
