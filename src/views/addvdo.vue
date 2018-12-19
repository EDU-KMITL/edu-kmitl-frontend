<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>ADD Video</v-toolbar-title>
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
        v-model="title">
       </v-text-field>
        <v-text-field
         prepend-icon="add_to_photos"
        name="link"
        label="ลิ้งวีดีโอ"
        type="text"
        v-model="link">
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
          value="รายละเอียด: "
          v-model="Description"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="creact">ADD Video</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import VideoServices from "@/services/VideoServices";
export default {
  data () {
    return {
      uuid: this.$store.state.route.params.uuid,
      title: '',
      link: '',
      Description: ''
    }
  },
  methods: {
    async creact () {
      try {
        const response = await VideoServices.Add({
          uuid: this.uuid,
          name: this.title,
          detail: this.Description,
          link: this.link
        },this.$store.getters.token);
        console.log(response)
        if (response.data.success) {
          this.$swal('สำเร็จ!', response.data.message , 'success')
          this.$router.push({
            name: "managevdo"
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
