/* eslint-disable*/
<template>
  <!-- <div class="nav">
      <v-img
      class="logoImg"
      :width="300"
      aspect-ratio="1/1"
      cover
      src="@/assets/logo.png">
      </v-img>
    
  </div> -->
  <v-navigation-drawer v-model="sidebar" app
  class="d-md-none"
  floating
  temporary
  > 
  <router-link to="/">
    <v-img
    v-if="theme.global.current.value.dark" 
    src="@/assets/logo.png" 
    to="/" style="cursor: pointer"
    class="logoImg ml-n5"
    :min-width="300"
    cover>
    </v-img> 
    <v-img 
      v-else 
      src="@/assets/logo b-bg.png"
      to="/" style="cursor: pointer"
    class="logoImg ml-n5"
    :min-width="300"
    cover></v-img>
  </router-link>
    <div class="mt-n16">
  <v-list
    density="compact"
    nav
    v-for="item in menuItems"
    :key="item.title"
    >
    <v-hover
    v-slot="{ isHovering, props }"
    open-delay="200">
    <v-list-item
        class="mb-2 font-weight-bold text-center text-subtitle-1 text-md-subtite-2"
        :to="item.path"
        :class="{ 'on-hover': isHovering }"
        :elevation="isHovering ? 8 : 1"
        :color="isHovering ? 'amber-lighten-2' : undefined"
        v-bind="props"
        v-ripple.center
        >
       {{ item.title }}
       <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular v-if="!allImagesLoaded" color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
      </v-list-item>
    </v-hover>
    </v-list>
  </div>
    <v-row justify="space-around"
    class="pt-8">
    <v-btn v-for="(icons, index) in iconItems" :key="index" class="sm-ml-n4 icon-btn" :href="icons.a" style=" background: transparent!important" target="_blank" rel="noopener noreferrer">
        <v-icon :icon="icons.icon" size="medium"  class="" style="cursor: pointer;"></v-icon>
    </v-btn>
    </v-row>

    <v-footer absolute
    app><div class="px-4  text-center w-100"> <strong>Ottush Delights</strong><sup> <v-icon class="mr-2" size="small">mdi mdi-copyright</v-icon></sup>
    </div></v-footer>
  
  </v-navigation-drawer>

  <v-app-bar app
  height="80">
  <router-link to="/"
  class="">
      <div 
      class="img">
      <v-img 
      v-if="theme.global.current.value.dark" 
      src="@/assets/logo.png" 
      :width="320"
      aspect-ratio="1/1"
      class="logoImg ml-n8" 
      transition="slide-y-transition" 
      to="/" 
      style="cursor: pointer"></v-img>
      <v-img 
      v-else 
      src="@/assets/logo b-bg.png" 
      to="/" 
      style="cursor: pointer" 
      :width="320" 
      aspect-ratio="1/1"
      class="logoImg ml-n8" 
      transition="slide-y-transition"></v-img>
      </div>
      </router-link> 

      <div class="d-none d-md-flex flex-grow-1  justify-content-center">
    <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        density="compact"
        rounded
        size="large"
        class="hidden-sm-and-down text-decoration-none mr-3"
        v-ripple.center
        >
        <v-hover
        v-slot="{ isHovering, props }"
        open-delay="150"
        >
        <v-toolbar-items
        class="font-weight-bold text-center text-subtitle-1 text-md-subtite-2"
        :class="{ 'on-hover': isHovering }"
        :elevation="isHovering ? 16 : 2"
        :color="isHovering ? 'amber-lighten-2' : undefined"
        v-bind="props"
        outlined
       >
        {{ item.title }}
        </v-toolbar-items>
      </v-hover>
      </v-btn>
      </div>
    <!-- <v-app-bar-nav-icon @click="sidebar = !sidebar">
      <transition name="fade">
        <template v-if="sidebar">
          <v-icon>mdi-close</v-icon>
        </template>
        <template v-else>
          <v-icon>mdi-menu</v-icon>
        </template>
      </transition>
    </v-app-bar-nav-icon> -->
    <v-row 
    justify="center"
    align-content="center"
    class="d-none d-sm-flex">
    <v-btn v-for="(icons, index) in iconItems" :key="index" class="sm-ml-n7 md-pr-0" :href="icons.a" style=" text-decoration: none;" target="_blank" rel="noopener noreferrer">
      <!-- <a :href="icons.a" target="_blank" rel="noopener noreferrer" style=""> -->
        <v-icon :icon="icons.icon" size="large"  class="" style="cursor: pointer;"></v-icon>
      <!-- </a> -->
    </v-btn>
    <v-spacer></v-spacer>
    </v-row>
    <v-lazy 
      :min-height="auto"
      :options="{'threshold':0.7}"
      transition="slide-x-reverse-transition"
    >
    <v-btn @click="toggleTheme" style="transition: step-end;" >
      <v-icon>mdi:mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-lazy>
    <div class="d-md-none d-flex ml-4 toggle" 
    @click="toggleclass" 
    :class="{ 'act': sidebar }">
      <span></span>
      <span></span>
      <span></span>
</div>
  </v-app-bar>
  
</template>

<style scoped>
.img.v-img.logoImg {
  /* Default size */
  width: 250px!important; /* Adjust as needed */

  /* Media query for smaller screens */
  @media screen and (max-width: 300px) {
    width: 100px!important; /* Adjust the size for smaller screens */
  }
}

.v-btn.icon-btn {
  background: transparent !important;
  box-shadow: none !important;

  @media screen and (max-width: 768px) {
      /* Adjust the size of icons for smaller screens */
      font-size: 10px!important;
  }
}

.on-hover{
  color: #FFD54F;
  background-color: rgba(#fff, 0.8);
}
.toggle{
  transform: scale(50%);
  position: relative;
  width: 75px;
  height: 70px;
  background: transparent;
   box-shadow: 0 10px 20px rgba(92, 92, 92, 0.08);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 101;
}

.toggle span{
position: absolute;
width: 40px;
height: 4px;
background: v-bind("theme.global.current.value.dark ? 'white' : 'black'");
transition: color 0.5s;
border-radius: 4px;
transition: 0.5s;
}

.toggle span:nth-child(1){
transform: translateY(-15px);
width: 25px;
left: 15px;
}

.toggle.act span:nth-child(1){
width: 40px;
transform: translateY(0px) rotate(45deg);
transition-delay: 0.125s;
}


.toggle span:nth-child(2){
transform: translateY(15px);
width: 15px;
left: 15px;
}

.toggle.act span:nth-child(2){
width: 40px;
transform: translateY(0px) rotate(315deg);
transition-delay: 0.25s;
}

.toggle.act span:nth-child(3){
transform: translateX(60px);
}

</style>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'NavBar',
  props: {
    menuItems:{
      type: Array
    },
    iconItems:{
      type: Array
    }
  },
  setup() {
    const theme = useTheme()
    return { theme }
  },

  data(){
    return {
      sidebar: false,
    }
  },
  methods: {
    toggleclass() {
      this.sidebar = !this.sidebar;
    },
    toggleTheme() {
      this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark'
    },
   // handleResize() {
     // window.location.reload();
    //},
  },
  emitIconItems() {
      this.$emit('icon-items', this.IconItems);
    },
  //
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
