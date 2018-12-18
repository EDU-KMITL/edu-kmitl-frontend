<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>To Be Teacher</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
       <v-flex xs12>
         <center><h1>ยืนยันข้อมูลเพื่อขอสิทธิ์</h1></center>
       </v-flex>
     <v-layout align-center justify-center>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="creact">ยินยอมเพื่อเพิ่มสิทธิ์เป็นผู้สอน</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import CourseService from '@/services/CourseService'
export default {
  methods: {
    async creact () {
      try {
        const response = await CourseService.setPermission(this.$store.getters.token)
        if (response.data.success) {
          console.log(response)
          this.$swal('สำเร็จ!', response.data.message, 'success')
          this.$store.dispatch("setRole", 'TEACHER')
          this.$router.push({
            name: 'createcourse'
          })
        } else {
          this.$swal('ผิดพลาด!', response.data.message, 'error')
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
