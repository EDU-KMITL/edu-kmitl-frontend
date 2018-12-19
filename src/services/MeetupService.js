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
  getMeetup (token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('user/meetup', config)
  },
  Register (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/meetup/register/'+ uuid, config)
  },
  editmeetup (edit,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/meetup/edit', edit , config)
  }, 
  Delmeetup (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('user/meetup/delete/'+ uuid, config)
  },
  Del (post,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().post('/user/manage/meetup/delete', post, config)
  }
}
