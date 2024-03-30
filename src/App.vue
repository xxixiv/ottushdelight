<template>
  <v-app>
    <v-main>
      <NavBar :menuItems="menuItems" :iconItems="iconItems" />
    
        <RouterView />
      <FooTer :menuItems="menuItems" :iconItems="iconItems"/>
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
      isLoading: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'home' },
          //{ title: 'Our Packages', path: '/packages'},
          { title: 'About us', path: '/about' },
          { title: 'Contact Us', path: '/contact' },
          { title: 'Our Services', path: '/services' },
          //{ title: 'Portfolio', path: '/portfolio' },
     ],
     iconItems: [
          {icon: 'mdi-facebook', a: 'https://facebook.com' },
          {icon: 'mdi-instagram', a: 'https://instagram.com'},
          {icon: 'mdi-whatsapp', a: 'https://whatsapp.com'},
          { icon: 'mdi-email', a: 'mailto:example@example.com' },
          { icon: 'mdi-phone', a: 'tel:+2345879088' }
     ],
     
     logoimages: [
      {src: "@/assets/logo b-bg.png", theme: "light"},
      {src: "@/assets/logo.png", theme: "dark"}
     ]
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
