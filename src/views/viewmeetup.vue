<template>
 <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>รายละเอียด Meetup {{title}}</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout row wrap>
  <v-carousel hide-controls>
    <v-img
          :src="dataviews.picture"
          height="350px"
        >
        </v-img>
  </v-carousel>
  <br/>
      <v-flex xs12>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
             <h1> {{ dataviews.name }} </h1>
                <br/>
               <h3> วันที่จัดงาน: {{ dataviews.mt_date }} </h3>
                <br/>
                <h3>เวลา: {{ dataviews.mt_time }}</h3>
                <br/>
                <h3>สถานที่: {{ dataviews.location }}</h3>
                <br/>
                 รายละเอียด: {{ dataviews.detail }}
                 <br/>
          <v-btn color="error" to="/login" v-if="!$store.state.isUserLoggedIn">กรุณา login หากสนใจหรือเข้าร่วม meetup</v-btn>
         <v-btn color="error" to="#" v-if="$store.state.isUserLoggedIn" @click="create(dataviews.uuid)" >เข้าร่วม</v-btn>
            </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import viewcourse from '@/services/guest'
import MeetupService from '@/services/MeetupService'
export default {
  data: () => ({
    dataviews: []
  }),  
async mounted () {
    const uuidss = this.$store.state.route.params.uuids
    try {
      let temp = await viewcourse.Meetups(uuidss).then((res) => { return res })
      this.dataviews = temp.data.data
      console.log(dataviews.data)
    } catch (error) {
      console.log(error)
    }
  },  methods: {
    async create (uuid) {
      try {
        const response = await MeetupService.Register(uuid, this.$store.getters.token)
        console.log(response)
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message, 'success')
          this.$router.push({
            name: 'myclassroom'
          })
        } else {
          this.$swal('ผิดพลาด!', response.data.message, 'error')
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async getData () {
      try {
        const response = await MeetupService.getOwn(this.$store.getters.token)
        return response
      } catch (error) {
        return error
      }
    }
  }
}
</script>

<style>

</style>
