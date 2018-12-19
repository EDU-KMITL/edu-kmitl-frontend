<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Edit Meetup</v-toolbar-title>
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
        v-model="dataviews.name">
       </v-text-field>
      <v-text-field
       prepend-icon="date_range"
       name="date"
        label="วันที่จัดงาน"
        type="date"
        v-model="dataviews.mt_date"></v-text-field>
        <v-text-field
       prepend-icon="query_builder"
       name="time"
        label="เวลางาน Meetup ex.09.00-12.00 น."
        type="time"
        v-model="dataviews.mt_time"></v-text-field>
        <v-text-field
       prepend-icon="room"
       name="location"
        label="สถานที่จัดงาน"
        type="text"
        v-model="dataviews.location"></v-text-field>
        <v-text-field
         prepend-icon="add_to_photos"
        name="picture"
        label="ลิ้งภาพ"
        type="text"
        v-model="dataviews.picture">
       </v-text-field>
        </v-form>
    </v-flex>
     <v-flex d-flex xs12 sm6 >
        <v-textarea
          solo
          name="detail"
          label="รายละเอียดงาน"
          value="รายละเอียด: "
          v-model="dataviews.detail"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="save">Save Meetup</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import viewcourse from '@/services/guest'
import MeetupService from '@/services/MeetupService'
export default {
  data: () => ({
    dataviews: []
    
  }),
  async mounted () {
    const uuidss = this.$store.state.route.params.uuids
    try {
      let temp = await viewcourse.Meetups(uuidss).then((res) => { return res })
      this.dataviews = temp.data.data
      console.log(dataviews.data)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async save () {
      try {
        const response = await MeetupService.editmeetup({
         name: document.querySelector("input[name=title]").value,
         detail: document.querySelector("textarea[name=detail]").value,
         picture: document.querySelector("input[name=picture]").value,
         mt_date: document.querySelector("input[name=date]").value,
         mt_time: document.querySelector("input[name=time]").value,
         location: document.querySelector("input[name=location]").value
        },this.$store.getters.token);
        console.log(response)
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message , 'success')
          this.$router.push({
            name: "managemeetup"
          })
        }else{
          this.$swal('ผิดพลาด!', response.data.message , 'error')
        }
        } catch (error) {
      }
    }
  }
}

</script>
