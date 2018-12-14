<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>My Course</v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
         <v-btn fab dark color="indigo"
          to="/createcourse"
          light
          medium
          absolute
          right
          middle
          >
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.name">
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
          <v-btn flat to="/managecourse/edit" >แก้ไขคอร์ส</v-btn>
          <v-btn flat color="error" @click="del(course.uuid)">ลบคอร์ส</v-btn>
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
    let config = {
      headers: { 'Authorization': 'bearer ' + this.$store.getters.token }
    }
    var vm = this
    axios
      .post('https://edu-kmitl-backend.herokuapp.com/apis/users/course-get', null, config)
      .then(function(response) {
          vm.courses = response.data.data 
        }
      )
    console.log(vm.courses)
    vm.$forceUpdate()
  },
    methods: {
    async del(uuid) {
      try {
        const response = await CourseService.Del({
          uuid: uuid
        }, this.$store.getters.token);
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message,'success')
          this.$router.push({
            name: "home"
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
