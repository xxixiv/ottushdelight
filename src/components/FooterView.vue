<template>
  <v-divider></v-divider>

  <v-footer class="d-flex flex-column"
  absolute
  app>
  <v-row 
  justify="center"
  class="hidden-md-and-up" 
  no-gutters>
    <v-col>
      <p>Navigation</p>
      <v-btn
      v-for="item in menuItems"
      :key="item.title"
      :to="item.path"
      density="compact"
      rounded
      variant="plain"
      size="small"
      class="hidden-sm-and-down text-decoration-none d-table"
      v-ripple.center
      >
      {{ item.title }}
      </v-btn>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
    <div class="px-4 py-2 text-center w-100">
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
