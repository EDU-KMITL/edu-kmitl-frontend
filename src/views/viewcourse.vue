<template>
 <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>รายละเอียดคอร์ส {{ dataview.name }}</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout row wrap>
     <v-flex xs12 sm5 md3>
        <v-card dark >
          <v-card-text>
      <div class="video-container">
    <div class="video-placeholder">
      <div class="video-placeholder-cover">
        <youtube
        :video-id = "youtubeID"
        >
    </youtube>
      </div>
      </div>
      </div>
         <v-btn color="error" to="/login" v-if="!$store.state.isUserLoggedIn">กรุณา login เพื่อลงเรียนคอร์ส</v-btn>
         <v-btn color="error" to="#" v-if="$store.state.isUserLoggedIn" @click="create(dataview.uuid)" >ลงเรียนคอร์สนี้</v-btn>
    </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
             <h1> {{ dataview.name }} </h1>
                <br/>
               <h3> รหัสวิชา: {{ dataview.uuid }} </h3>
                <br/>
               {{ dataview.detail }}
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
import UserCourseService from '@/services/UserCourseService'
export default {
  data: () => ({
    dataview: null
  }),
  async mounted () {
    const viewId = this.$store.state.route.params.viewId
    try {
      let temp = await viewcourse.Coures(viewId).then((res) => { return res })
      this.dataview = temp.data.data
    } catch (error) {
      console.log(error)
    }
  },
    methods: {
    async create (uuid) {
      try {
        const response = await UserCourseService.Register(uuid, this.$store.getters.token)
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
    }
  }
}
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
