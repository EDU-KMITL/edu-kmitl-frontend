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
        :video-id = "youtubeID"
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
          <v-toolbar-title>วีดีโอห้อง {{ title }} </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar ripple @click="nextvideo">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
      <v-flex xs12>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
             <h1> {{ title }} </h1>
                <br/>
               <h3> รหัสวิชา: {{ number }} </h3>
                <br/>
                <h3>อาจารย์ประจำวิชา: {{ professor }}</h3>
                <br/>
                 รายละเอียด: {{ Abstract }}
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
      video: []
    }
  },
  async mounted () {
    const viewId = this.$store.state.route.params.uuid
    try {
      let temp = await VideoServices.Showvdo(viewId,this.$store.getters.token).then((res) => { return res })
      this.video = temp.data.data
      console.log(this.video)
    } catch (error) {
      console.log(error)
    }
  },
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
