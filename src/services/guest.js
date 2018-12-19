import Api from '@/services/Api'

export default{
  Meetup () {
    return Api().get('/meetup')
  },
  Coure () {
    return Api().get('/coures')
  }, 
  Meetups (viewId) {
    return Api().get('/meetup/' + viewId)
  },
  Coures (viewId) {
    return Api().get('/coures/' + viewId)
  },
  Search (credentials) {
    return Api().post('/search', credentials)
  },
  Activate (tokens) {
    return Api().get('/activate/' + tokens)
  }
}
