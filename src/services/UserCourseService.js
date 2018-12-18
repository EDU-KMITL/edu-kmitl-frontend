import Api from '@/services/Api'

export default{
  Coures ( token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/coures', config)
  },  
  Register (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/coures/register/'+ uuid, config)
  },  
  Delete (uuid,token) {
    let config = {
      headers: { 'Authorization': 'bearer ' + token }
    }
    return Api().get('/user/coures/delete/'+ uuid, config)
  }
}
