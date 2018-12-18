<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Edit Course</v-toolbar-title>
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
         prepend-icon="face"
        name="title"
        label="ชื่อเรื่อง"
        type="text"
        v-model="dataview.name">
       </v-text-field>
        <v-text-field
         prepend-icon="add_to_photos"
        name="picture"
        label="ลิ้งภาพ"
        type="text"
        v-model="dataview.picture">
       </v-text-field>
 <!--      <v-text-field
       prepend-icon="add_to_photos"
       name="image"
        label="อัพโหลดไฟล์ภาพ"
        type="file"
        @change="onFileChange"
        v-model="image"></v-text-field>-->
        </v-form> 
    </v-flex>
     <v-flex d-flex xs12 sm6 >
        <v-textarea
          solo
          name="Description"
          label="รายละเอียด"
          value= "รายละเอียด"
          v-model="dataview.detail"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="save">Save Course</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import viewcourse from '@/services/guest'
import CourseService from '@/services/CourseService'
export default {
  data: () => ({
    dataview: [],
    title: '',
    Description: '',
    picture: ''
    
  }),
  async mounted () {
    const uuids = this.$store.state.route.params.uuid
    try {
      let temp = await viewcourse.Coures(uuids).then((res) => { return res })
      this.dataview = temp.data.data
      console.log(dataview)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async save () {
      try {
        const response = await CourseService.editcourse({
          name: document.querySelector("input[name=title]").value,
          detail: document.querySelector("textarea[name=Description]").value,
          picture: document.querySelector("input[name=picture]").value
        },this.$store.getters.token);
        console.log(response)
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message , 'success')
          this.$router.push({
            name: "managecourse"
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
