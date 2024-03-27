<template>
  <v-app>
    <v-main>
      <NavBar />
    
        <RouterView />
      <FooTer />
    </v-main>
  </v-app>
</template>
<style>
body{
  margin: 0;
}
</style>
<script>

import NavBar from './components/NavBar.vue';
import FooTer from './components/FooterView.vue';

export default {
  name: 'App',

  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    NavBar,
    FooTer
  },
}
</script>
