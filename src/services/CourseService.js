import Api from '@/services/Api'

export default{
  Creact (course, token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/course-creact', course, config)
  },
  getOwn (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/course-get', null, config)
  },
  setPermission (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('user/upgrade', config)
  },
  Regis (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/coures/register/'+ uuid, config)
  },
  Del (post,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('users/course-del', post, config)
  }
}
