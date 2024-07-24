<template>
 <v-container>
  <v-row>
        <v-lazy 
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col cols="12">
            <v-toolbar-title style="font-family: lofty; font-size: 25px" class="my-4">Who we are</v-toolbar-title>
        </v-col>
        </v-lazy>
        </v-row>
        <v-row>
      <v-col>
        <div>
          <p>Welcome to Ottush Delight Ltd., a creative and versatile brand dedicated to serving hygienically-prepared and beautifully garnished cocktails at events of all sizes, ensuring each sip is a delightful experience.
            <br>
            We also specialize in drinks management services and offer bespoke mocktail designs, bottled mocktails, as well as a variety of treats including popcorn, candy floss, and chocolate fountain, all designed to enhance corporate, social, and intimate events.
            <br>
            At Ottush Delight, we are driven by our passion for crafting unforgettable experiences, guided by our core values of creativity and uncompromising quality. Our dedicated team is committed to elevating the art of mixology, ensuring that each cocktail we serve is a masterpiece of flavour and presentation.
            <br>
            Our diverse range of products and services are tailored to meet the unique needs of our clients. Whether it's a wedding celebration, a private gathering, a lively festival, or a professional corporate event, Ottush Delight is here to exceed your expectations.
            <br>
            Join the ranks of our satisfied clients who enjoy perfectly curated menus for every occasion. Discover how our services can elevate your next event and leave a lasting impression.
          </p>
        </div>
    </v-col>
  </v-row>
  <v-row>
    <v-lazy v-show="false"
    :min-height="auto"
    :options="{'threshold':0.7}"
    transition="slide-x-reverse-transition"
  >
    <v-col cols="12">
        <v-toolbar-title style="font-family: lofty; font-size: 23px" class="my-5">The Ottush Journey</v-toolbar-title>
    </v-col>
    </v-lazy>
  </v-row>
  <v-lazy v-show="false"
  :min-height="auto"
  :options="{'threshold':0.7}"
  transition="slide-y-reverse-transition"
>
  <v-row>
    <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
    <v-img transition="expand" class="sm-px-10" src="/Ottush 0.jpg" lazy-src="/Ottush 0.jpg" width="400">
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-col>
  <v-col>
    <v-lazy 
    :min-height="auto"
    :options="{'threshold':0.7}"
    transition="slide-x-reverse-transition"
  >
    <v-col cols="12">
        <v-list-item-subtitle style=" font-size: 18px" class="my-5">Hi, I'm</v-list-item-subtitle>
    </v-col>
    </v-lazy>
  </v-col>
    <v-col v-show="false" v-for="(items, index) in cardItems" :key="index" cols="12" sm="6" md="4" lg="3">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" color="grey-lighten-4" max-width="400" v-bind="props">
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" cover>
            <v-expand-transition>
              <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2" style="height: 100%;">
                {{ items.position }}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-6">
            <h3 class="text-h4 font-weight-light text-orange mb-2">
              {{ items.person }}
            </h3>
            <div class="font-weight-light text-h6 mb-2">
              {{ items.skill }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
  </v-lazy>
 </v-container>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      cardItems: [
        { src: '', person: 'person 1', skill: 'skill 1', position: 'GM' },
        { src: '', person: 'person 2', skill: 'skill 2', position: 'CEO' },
        { src: '', person: 'person 3', skill: 'skill 3', position: 'AGM' },
        { src: '', person: 'person 4', skill: 'skill 4', position: 'DGM' }
      ]
    }
  }
}
</script>
