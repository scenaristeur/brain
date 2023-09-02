<template>
  <div class="home">
    <b-container fluid>
<b-row>
<b-col cols="6">A</b-col>
<b-col cols="6">B</b-col>

</b-row>
      </b-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
