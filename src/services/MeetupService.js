import Api from '@/services/Api'

export default{
  Creact (meetup, token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/meetup/add', meetup, config)
  },
  getOwn (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('user/manage/meetup', config)
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
    return Api().post('/user/manage/meetup/delete', post, config)
  }
}
