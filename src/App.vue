<template>
  <v-app theme="dark">
    <v-main>
      <div :style="{ }">
      <NavBar :menuItems="menuItems" :iconItems="iconItems" />
      <v-expand-transition>
        <RouterView />
      </v-expand-transition>
      <FooTer :menuItems="menuItems" :iconItems="iconItems"/>
      <v-progress-linear
      v-if="isLoading"
      :active="isLoading"
      color="primary"
      height="2"
    ></v-progress-linear>
  </div>
    </v-main>
  </v-app>
</template>
<style>
.fade-enter {
  opacity: 0;
}

.fade-ente-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
<script>

import '@fortawesome/fontawesome-free/css/all.css'
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
          {icon: 'mdi:mdi-instagram', a: 'https://www.instagram.com/ottushdelight/'},
          {icon: 'mdi:mdi-whatsapp', a: 'https://wa.me/2348137928778?text=Hi%20I\'m%20interested%20in%20using%20your%20services'},
          { icon: 'mdi:mdi-email', a: 'mailto:Ottushdelight@gmail.com' },
          { icon: 'fa-brands fa-tiktok', a: 'https://www.tiktok.com/@ottushdelight' },
          { icon: 'mdi:mdi-phone', a: 'tel:+2348137928778' }
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
