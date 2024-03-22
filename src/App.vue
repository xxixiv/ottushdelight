<template>
  <v-app>
    <v-main>
      <NavBar />
    
        <RouterView />
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


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar,
  },
}
</script>
