<template>
<v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>การยืนยัน Video </v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex xs12>
         <center><h1>การยืนยัน Video ของท่าน</h1></center>
         <center><h2><div class="colorh2">{{dataview.message}}</div></h2></center>
          <center><h3>ยินดีต้อนรับเข้าสู่ Education Community KMITL</h3></center>
       </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import AdminServices from '@/services/AdminServices'
export default {
  data: () => ({
    dataview: null
  }),
  async mounted () {
    const tokens = this.$store.state.route.params.tokens
    try {
      let temp = await AdminServices.Approve(tokens).then((res) => { return res })
      console.log(temp.data)
      this.dataview = temp.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.colorh2{
   color:orangered
}
</style>
