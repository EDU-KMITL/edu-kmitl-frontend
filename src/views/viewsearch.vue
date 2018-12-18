<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Seach</v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in searchs" :key="course.picture"
    >
      <v-card>
        <v-img
          :src="course.picture"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.name}}</div><br>
            <span class="grey--text">รหัสวิชา {{course.uuid}}</span><br>
            <span >รายละเอียด {{course.detail}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat :to =" {
              name: 'viewcourse',
              params: {
                viewId: course.uuid
              }
            }">view</v-btn>
          <v-btn flat color="purple" @click="create(course.uuid)" v-if="$store.state.isUserLoggedIn">ลงทะเบียนเรียน</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import CourseService from '@/services/CourseService'
import search from '@/services/guest'
export default {
  data () {
    return {
      searchs: []
    }
  },
  async mounted () {
    const searchss = this.$store.state.route.params.search
    try {
      let response = search.Search({
        search: searchss
      })
      let temp = await response.then((res) => { return (res.data) })
      this.searchs = temp.data[0]
    } catch (error) {
      this.error = error.response.data.error
    }
  },
  methods: {
    async create (uuid) {
      try {
        const response = await CourseService.Regis({
          uuid: uuid
        }, this.$store.getters.token)
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
