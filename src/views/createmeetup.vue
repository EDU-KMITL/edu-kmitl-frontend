<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Create Meetup</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout align-center justify-center>
    <v-flex d-flex xs12 sm6>
      <v-form>
        <v-text-field
         prepend-icon="email"
        name="title"
        label="ชื่องาน Meetup"
        type="text"
        v-model="title">
       </v-text-field>
      <v-text-field
       prepend-icon="date_range"
       name="date"
        label="วันที่จัดงาน"
        type="date"
        v-model="date"></v-text-field>
        <v-text-field
       prepend-icon="query_builder"
       name="time"
        label="เวลางาน Meetup ex.09.00-12.00 น."
        type="text"
        v-model="time"></v-text-field>
        <v-text-field
       prepend-icon="room"
       name="location"
        label="สถานที่จัดงาน"
        type="text"
        v-model="location"></v-text-field>
        <v-text-field
         prepend-icon="add_to_photos"
        name="picture"
        label="ลิ้งภาพ"
        type="text"
        v-model="picture">
       </v-text-field>
        </v-form>
    </v-flex>
     <v-flex d-flex xs12 sm6 >
        <v-textarea
          solo
          name="detail"
          label="รายละเอียดงาน"
          value="รายละเอียด: "
          v-model="detail"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="creact">Create Meetup</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import MeetupService from '@/services/MeetupService'
export default {
  data () {
    return {
      title: '',
      date: '',
      time: '',
      location: '',
      picture: '',
      detail: ''
    }
  },
  methods: {
    async creact () {
      try {
        const response = await MeetupService.Creact({
          name: this.title,
          detail: this.detail,
          picture: this.picture,
          mt_date: this.date,
          mt_time: this.time,
          location: this.location
        }, this.$store.getters.token)
        console.log(response)
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message, 'success')
          this.$router.push({
            name: 'managemeetup'
          })
        } else {
          this.$swal('ผิดพลาด!', response.data.message, 'error')
        }
      } catch (error) {
      }
    }
  }
}
</script>
