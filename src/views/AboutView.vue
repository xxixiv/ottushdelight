<template>
 <v-container>
  <v-row>
        <v-lazy 
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col cols="12">
            <v-toolbar-title style="font-family: lofty; font-size: 40px" class="pl-6">Who we are</v-toolbar-title>
        </v-col>
        </v-lazy>
        </v-row>
        <v-row>
      <v-col>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae laborum non aliquam odit obcaecati ab, laudantium delectus alias consequuntur, distinctio facere iste totam ex ullam provident esse veniam nihil.
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti facere saepe quidem incidunt neque dolorem, commodi unde laborum, corrupti laboriosam ullam corporis. Ducimus reprehenderit dolorum soluta sunt quis facere magnam!
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque corporis quis cupiditate, quo, rem similique repellendus quibusdam assumenda molestias, cum nobis nisi enim dolorem aut eos perferendis iste quia debitis?
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora reprehenderit, quae aperiam a dolore assumenda iste beatae alias culpa soluta nemo consequuntur delectus suscipit rem. Debitis nostrum quam dolores?
            <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloremque ex, natus deserunt placeat, magnam nihil quibusdam provident molestias, voluptatibus aperiam nostrum facilis repellat ipsa deleniti voluptatum! Iure, ab placeat.
          </p>
        </div>
    </v-col>
  </v-row>
  <v-row>
    <v-toolbar-title>
      Meet The Team
    </v-toolbar-title>
  </v-row>
  <v-row>
    <v-col v-for="(items, index) in cardItems" :key="index" cols="12" sm="6" md="4" lg="3">
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
