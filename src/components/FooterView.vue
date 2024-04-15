<template>

  <v-footer class="d-flex flex-column"
  absolute
  app>
  <v-divider
  class="pb-6"
  v-if="$vuetify.display.smAndDown">
</v-divider>
<v-row 
  justify="center"
  class="hidden-md-and-up" 
  >
      <v-btn
      v-for="item in menuItems"
      :key="item.title"
      :to="item.path"
      density="default"
      rounded
      variant="text"
      size="small"
      class="hidden-sm-and-down text-decoration-none d-flex my-6"
      v-ripple.center
      style=";"
      >
      {{ item.title }}
      </v-btn>
    
    <v-spacer></v-spacer>
  </v-row>
    <div class="px-4  text-center w-90">
      All Rights Reserved<sup> <v-icon class="mr-2" size="small">mdi mdi-copyright</v-icon></sup> {{ new Date().getFullYear() }} <strong>Ottush Delights</strong>
    </div>
  </v-footer>
  </template>

  <script>
  export default {
    name: 'FooterView',
    props: {
    menuItems:{
      type: Array
    },
    iconItems:{
      type: Array
    }
  },
  };
  </script>

  <style>

.v-footer {
  padding: 0 0 !important;
}
.bgTop{
  background-color:#111111;
}
.bgMidum{
  background-color:#1F1F1F;
}
</style>
