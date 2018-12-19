import Api from '@/services/Api'

export default{
  Add (vdo, token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/video/add', vdo, config)
  },
  Getvdo (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/manage/vdieo/'+ uuid, config)
  },
  Del (post,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/video/delete', post, config)
  }
}