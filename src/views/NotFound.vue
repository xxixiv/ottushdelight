
<template>
  <v-container fluid class="container">
    <v-row class="containerRow" align-content="center" justify="center" text-align="center">
    <p style="font-weight: 800;">
      <span class="" style="font-size: 8rem; font-weight:500">404</span>
      <br>
      Ooops!!! You've arrived on a wrong link, You're missing out on the fun!
      <br>
      <v-col offset-sm="3" md="5">
        <v-btn variant="outlined" to="/">Back to Homepage</v-btn>
      </v-col>    
    </p>
  </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    var container = document.getElementsByClassName('containerRow')[0];
    window.onmousemove = function(e){
      var x = e.clientX, y = e.clientY;
      container.style.backgroundPositionX = x + 'px';
      container.style.backgroundPositionY = y + 'px';
    }
  }
}

</script>

<style scoped>
.container {
background: linear-gradient(45deg, #706C61, #945600);
height: 100vh;
}
.containerRow{
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('~/public/404.png'),#0f0f0f;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .5);
  border-radius: 10px;
}
span {
  animation: floatText 4s ease-in-out infinite;
}
@keyframes floatText {
  0%
   {
    transform: translateY(0);
   }

   50%
   {
    transform: translateY(-2.4rem);
   }
}
</style>