import Api from '@/services/Api'

export default{
  Creact (course, token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/coures/add', course, config)
  },
  Courses (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('user/manage/coures', config)
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
    return Api().post('/user/manage/coures/delete', post, config)
  }
}
