<template>
  <v-app>
    <v-main>
      <NavBar />
    
        <RouterView />
      <FooTer />
      <v-progress-linear
      v-if="isLoading"
      :active="isLoading"
      color="primary"
      height="2"
    ></v-progress-linear>
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
      isLoading: false
    }
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true; // Show loading bar when navigating
      next();
    });

    this.$router.afterEach(() => {
      this.isLoading = false; // Hide loading bar when navigation is complete
    });
  },
  components: {
    NavBar,
    FooTer
  },
}
</script>
