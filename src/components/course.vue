<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Course ของฉัน </v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.picture"
    >
      <v-card>
        <v-img
          :src="course.picture"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.name}}</div><br>
            <span class="grey--text">รหัสวิชา {{course.uuid}}</span><br>
            <span >รายละเอียด {{course.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewvideo" >เข้าห้องเรียน</v-btn>
          <v-btn flat color="error" >ลบคอร์ส</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import CourseService from '@/services/CourseService'
import axios from 'axios'
export default {
  data () {
    return {
      courses: []
    }
  },
  mounted () {

    var vm = this
    axios
      .get('https://edu-kmitl-backend.herokuapp.com/apis/mymeetup-get')
      .then(function(response) {
          vm.courses = response.data.data 
        }
      )
    console.log(vm.courses)
    vm.$forceUpdate()
  }
}

</script>
