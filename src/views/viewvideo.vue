<template>
 <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>ห้องเรียน {{title}}</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout row wrap>
     <v-flex xs7 >
        <v-card dark >
          <v-card-text>
          <div class="video-container">
    <div class="video-placeholder">
      <div class="video-placeholder-cover">
        <youtube
        :video-id = "videos[0].link"
        >
    </youtube>
      </div>
    </div>
          </div>
    </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 >
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>วีดีโอห้อง {{ videos[0].name }} </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item) in videos">
            <v-list-tile :key="item.id" avatar ripple @click="nextvideo">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.detail }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.name }}</v-list-tile-action-text>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
      <v-flex xs12>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
             <h1> {{ videos[0].name }} </h1>
                <br/>
                 รายละเอียด: {{ videos[0].detail }}
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
import VideoServices from '@/services/VideoServices'
export default {
  data () {
    return {
      videos: [],
      linkvdo: ''
    }
  },
  async mounted () {
    const viewId = this.$store.state.route.params.viewId

    try {
      let temp = await VideoServices.Showvdo(viewId,this.$store.getters.token).then((res) => { return res })
      this.videos = temp.data.data
      console.log(temp.data.data)
    } catch (error) {
      console.log(error)
    }
  },  
  methods: {
    nextvideo () {
      this.$router.push({
        name: 'viewvideo'
      })
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
