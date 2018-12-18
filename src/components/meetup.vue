<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Meetup ของฉัน</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="mt in meetups" :key="mt.Meetup.name"
    >
      <v-card>
        <v-img
          :src="mt.Meetup.picture"
          height="350px"
        >
        </v-img>


        <v-card-title >
          <div>
            <div class="headline">{{mt.Meetup.name}}</div><br>
            <span class="grey--text">วันที่ {{mt.Meetup.mt_date}}</span><br>
            <span class="grey--text">เวลา {{mt.Meetup.mt_time}}</span><br>
            <span class="grey--text">สถานที่ {{mt.Meetup.location}}</span><br>
            <span >รายละเอียด {{mt.Meetup.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewmeetup">view รายละเอียด</v-btn>
           <v-btn flat color="error" @click="Delete(mt.Meetup.uuid)">ลบ meetup</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import MeetupService from '@/services/MeetupService'
import axios from 'axios'
export default {
  data () {
    return {
      meetups: []
    }
  },
async  mounted () {
      try {
        const response = await MeetupService.getMeetup(this.$store.getters.token).then((res) => { return res })
        this.meetups = response.data.data
        console.log(response.data.data)
      } catch (error) {
        return error
      }
  }, 
  methods: {
    async Delete(uuid) {
      try {
        const response = await MeetupService.Delmeetup(uuid, this.$store.getters.token);
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message,'success')
           let temp = await MeetupService.getMeetup(this.$store.getters.token).then((res) => { return res })
           this.meetups = temp.data.data
          this.$router.push({
            name: 'myclassroom'
          })
        }else{
          this.$swal('ผิดพลาด!', response.data.message,'error')
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
