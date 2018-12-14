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
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.title"
    >
      <v-card>
        <v-img
          :src="course.image"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.title}}</div><br>
            <span class="grey--text">วันที่ {{course.date}}</span><br>
            <span class="grey--text">เวลา {{course.time}}</span><br>
            <span class="grey--text">สถานที่ {{course.location}}</span><br>
            <span >รายละเอียด {{course.Abstract}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewmeetup">view รายละเอียด</v-btn>
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
    var vm = this
    axios
      .get('http://localhost:3000/apis/mymeetup-get')
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
