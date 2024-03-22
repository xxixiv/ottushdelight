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

    <v-img
    to="/" style="cursor: pointer"
    class="logoImg"
    :min-width="300"
    cover
    src="@/assets/logo b-bg.png">
    </v-img> 
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
      </v-list-item>
    </v-hover>
    </v-list>
  </div>
    <v-row justify="space-around"
    class="pl-2 pt-8">
      <v-icon
        icon="mdi-facebook"
        size="medium"
      ></v-icon>
  
      <v-icon
        icon="mdi-instagram"
        size="medium"
      ></v-icon>
  
      <v-icon
        icon="mdi-whatsapp"
        size="medium"
      ></v-icon>
  
      <v-icon
        icon="mdi-email"
        size="medium"
      ></v-icon>
  
      <v-icon
        icon="mdi-phone"
        size="medium"
      ></v-icon>
    </v-row>
  
  </v-navigation-drawer>

  <v-toolbar app
  height="100">
        <v-img
        class="logoImg sm-ml-n6"
        :min-width="120"
        :max-width="250"
        aspect-ratio="1/1"
        cover
        to="/" style="cursor: pointer"
        src="@/assets/logo b-bg.png">
        </v-img>
    <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        density="compact"
        rounded
        size="x-large"
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
    class="">
  <v-btn
     v-for="(icons, index) in IconItems"
    :key="index"
    class="sm-ml-n1"
    >
         <v-icon
        :icon="icons.icon"
        size="small"
        :a="icons.a"
        class=""
        style="cursor: pointer;"
      ></v-icon>
  </v-btn>
      <!-- 
         justify="space-between"
    class="md-ml-12"
   ><v-icon
      icon="mdi-facebook"
      size="medium"
      class=""
      a="https://facebook.com"
    ></v-icon>

    <v-icon
      icon="mdi-instagram"
      size="medium"
      class=""
    ></v-icon>

    <v-icon
      icon="mdi-whatsapp"
      size="medium"
      class=""
    ></v-icon>

    <v-icon
      icon="mdi-email"
      size="medium"
      class=""
    ></v-icon>

    <v-icon
      icon="mdi-phone"
      size="medium"
      class="pr-10"
    ></v-icon> -->
    </v-row>
    <div class="d-md-none d-flex toggle" 
    @click="toggleclass" 
    :class="{ 'act': sidebar }">
      <span></span>
      <span></span>
      <span></span>
</div>
  </v-toolbar>
  
</template>

<style scoped>
.on-hover{
  color: #FFD54F;
  background-color: rgba(#fff, 0.8);
}
.toggle{
  transform: scale(50%);
  position: relative;
  width: 80px;
  height: 80px;
  background: transparent;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
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
background:#fff;
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

export default {
  name: 'NavBar',
  data(){
    return {
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'home' },
          //{ title: 'Our Packages', path: '/packages'},
          { title: 'About us', path: '/about' },
          { title: 'Contact Us', path: '/contact' },
          { title: 'Our Services', path: '/services' },
          //{ title: 'Portfolio', path: '/portfolio' },
     ],
     IconItems: [
          {icon: 'mdi-facebook', a: 'https://facebook.com' },
          {icon: 'mdi-instagram', a: 'https://instagram.com'},
          {icon: 'mdi-whatsapp', a: 'https://whatsapp.com'},
          {icon: 'mdi-email', a: 'https//gmail.com', type: 'email'},
          {icon: 'mdi-phone', a: '+2345879088', type: 'tel'}
     ],
     logoimages: [
      {src: "@/assets/logo b-bg.png", theme: "light"},
      {src: "@/assets/logo.png", theme: "dark"}
     ]
    }
  },
  methods: {
    toggleclass() {
      this.sidebar = !this.sidebar;
    },
    handleResize() {
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
