<template>
  <v-footer class="d-flex flex-column"
  absolute
  app>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Ottush Delights</strong>
    </div>
  </v-footer>
  </template>

  <script>
  export default {
    name: 'FooterView', 
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
