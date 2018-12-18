import Api from '@/services/Api'

export default{
  Meetup () {
    return Api().get('/meetup')
  },
  Coure () {
    return Api().get('/coures')
  },
  Coures (viewId) {
    return Api().get('/coures/' + viewId)
  },
  Search (credentials) {
    return Api().post('/search', credentials)
  }
}
