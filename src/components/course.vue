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
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.Course.picture"
    >
      <v-card>
        <v-img
          :src="course.Course.picture"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.Course.name}}</div><br>
            <span class="grey--text">รหัสวิชา {{course.Course.uuid}}</span><br>
            <span >รายละเอียด {{course.Course.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewvideo" >เข้าห้องเรียน</v-btn>
          <v-btn flat color="error" @click="Delete(course.Course.uuid)">ลบคอร์ส</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import UserCourseService from '@/services/UserCourseService'
import axios from 'axios'
export default {
  data () {
    return {
      courses: []
    }
  },
async  mounted () {
      try {
        const response = await UserCourseService.Coures(this.$store.getters.token).then((res) => { return res })
        this.courses = response.data.data
        console.log(response)
      } catch (error) {
        return error
      }
  },
    methods: {
    async Delete(uuid) {
      try {
        const response = await UserCourseService.Delete( uuid, this.$store.getters.token);
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message,'success')
           let temp = await UserCourseService.Coures(this.$store.getters.token).then((res) => { return res })
           this.courses = temp.data.data
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
