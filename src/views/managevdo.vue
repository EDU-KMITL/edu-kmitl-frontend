<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>การจัดการวีดีโอ</v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
         <v-btn fab dark color="indigo"
          :to="{
              name: 'addvdo',
              params: {
                uuid: this.$store.state.route.params.uuid
              }
            }"
          light
          medium
          absolute
          right
          middle
          >
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in video" :key="course.name">
      <v-card>
        <div class="video-container">
    <div class="video-placeholder">
      <div class="video-placeholder-cover">
         <youtube
        :video-id = "course.link"
        >
    </youtube>
      </div>
    </div>
        </div>
        <v-card-title >
          <div>
            <div class="headline">{{course.name}}</div><br>
            <span class="grey--text">{{course.uuid}}</span><br>
            <span >รายละเอียด {{course.detail}}</span><br>
            <v-btn color="info">  <span >สถานะ {{course.status}}</span>
                 </v-btn>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="error" @click="del(course.id)">ลบคอร์ส</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import VideoServices from '@/services/VideoServices'
import axios from 'axios'
export default {
  data () {
    return {
      video: []
    }
  },
  async mounted () {
    const viewId = this.$store.state.route.params.uuid
    try {
      let temp = await VideoServices.Getvdo(viewId,this.$store.getters.token).then((res) => { return res })
      this.video = temp.data.data
      console.log(this.video)
    } catch (error) {
      console.log(error)
    }
  },
    methods: {
    async del(id) {
      try {
        const response = await VideoServices.Del({
          vid: id
        }, this.$store.getters.token);
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message,'success')
           let temp = await VideoServices.Getvdo(this.$store.state.route.params.uuid,this.$store.getters.token).then((res) => { return res })
           this.video = temp.data.data
          this.$router.push({
            name: 'managevdo'
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
  width: 100%;
  height: 100%;
}
</style>
