import Api from '@/services/Api'

export default{
  Approve (tokens) {
    return Api().get('/admin/'+tokens +'/approve')
  },
  Reject (tokens) {
    return Api().get('/admin/'+tokens +'/reject')
  }
}