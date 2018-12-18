import Api from '@/services/Api'

export default{
  Meetup () {
    return Api().get('/meetup')
  },
  Coures () {
    return Api().get('/coures')
  },
  Coures (viewId) {
    return Api().get('/coures/' + viewId)
  }
}
