<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>My Meetup</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-btn fab dark color="indigo"
          to="/createmeetup"
          light
          medium
          absolute
          right
          middle
          >
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="mu in meetups" :key="mu.name">
      <v-card>
        <v-img
          :src="mu.picture"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{mu.name}}</div><br>
            <span class="grey--text">วันที่ {{mu.mt_date}}</span><br>
            <span class="grey--text">เวลา {{mu.mt_time}}</span><br>
            <span class="grey--text">สถานที่ {{mu.location}}</span><br>
            <span >รายละเอียด {{mu.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/managemeetup/edit">แก้ไขรายละเอียด meetup</v-btn>
           <v-btn flat color="error" >ลบ Meetup</v-btn>
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
  methods: {
    async getData () {
      try {
        const response = await MeetupService.getOwn(this.$store.getters.token)
        return response
      } catch (error) {
        return error
      }
    }
  },
  mounted () {
    let config = {
      headers: { 'Authorization': 'bearer ' + this.$store.getters.token }
    }
    var vm = this
    axios
      .post('https://edu-kmitl-backend.herokuapp.com/apis/users/meetup-get', null, config)
      .then(function(response) {
          //console.log(response.data.data)
          vm.meetups = response.data.data
        }
      )
    console.log(vm.meetups)
    vm.$forceUpdate()
  }
}
</script>
