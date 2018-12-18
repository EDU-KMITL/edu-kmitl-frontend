<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Meetup</v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="mt in meetups" :key="mt.name"
    >
      <v-card>
        <v-img
          :src="mt.picture"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{mt.name}}</div><br>
            <span class="grey--text">วันที่ {{mt.mt_date}}</span><br>
            <span class="grey--text">เวลา {{mt.mt_time}}</span><br>
            <span class="grey--text">สถานที่ {{mt.location}}</span><br>
            <span >รายละเอียด {{mt.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewmeetup">view</v-btn>
          <v-btn flat color="purple" v-if="$store.state.isUserLoggedIn" @click="create(mt.uuid)">เข้าร่วม</v-btn>
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
  mounted () {
    var vm = this
    axios
      .get('https://edu-kmitl-backend.herokuapp.com/apis/meetup')
      .then(function (response) {
        vm.meetups = response.data.data
        console.log(vm.meetups)
      }
      )
    console.log(vm.meetups)
    vm.$forceUpdate()
  },

  methods: {
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
