<template>
  <div class="home">

    <Slider/>
    <br>
    <Panalcourse/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Panalcourse from '@/components/Panalcourse.vue'

export default {
  name: 'home',
  components: {
    Slider,
    Panalcourse
  }
}
</script>
