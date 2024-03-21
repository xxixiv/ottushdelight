<!-- <template>
    <v-container>
    <div v-for="item in iconItems"
    :key="item.key"
    class="section">
        <v-icon
        :color="item.color"
        :icon="item.icon"
        :size="item.size"
        class="layer img"
        :data-speed="speed"
      ></v-icon>
    </div>
    <h2 class="layer h2">Oops the {{ resource }} you're looking for isn't here </h2>
    <RouterLink to="/" class="layer">Back to homepage</RouterLink>
</v-container>
</template>

<script>
    export default {
        name : 'NotFound',
    data(){
    return {
        iconItems: [
            {icon: 'mdi-popcorn', color: 'green', size: '40', speed: '-5'},
            {icon:' mdi-food-fork-drink', color: 'green-darken-2', size: '20', speed: '5'},
            {icon: 'mdi-food-off', color: 'blue', size: '40', speed: '-2'},
            {icon: 'mdi-cup', color: 'yellow', size: '20', speed: '8'},
            {icon: 'mdi-food', color: 'red', size: '40', speed: '-9'},
            {icon: 'mdi-food-off', color: 'blue', size: '40', speed: '6'},
            {icon: 'mdi-cup-off', color: 'orange', size: '40', speed: '-7'},
            {icon: 'mdi-cup', color: 'yellow', size: '20', speed: '-5'},
            {icon: 'mdi-popcorn', color: 'green', size: '40', speed: '7'},
            {icon: 'mdi-cup-off', color: 'orange', size: '40', speed: '5'},
    ],
}
},
mounted() {
    document.addEventListener("mousemove", this.parallax);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.parallax);
  },
  methods: {
    parallax(event) {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = parseInt(layer.getAttribute('data-speed'));
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }
};
</script>

<style scoped>

</style> -->


<!-- <template>
  <div class="parallax-container" @mousemove="updatePosition">
    <v-img
      class="parallax-image"
      :src="imageSrc"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    ></v-img>
  </div>
</template>

<script>
export default {
  name : 'NotFound',
  data() {
    return {
      x: 0,
      y: 0,
      imageSrc: './flyer.jpg'
    };
  },
  methods: {
    updatePosition(event) {
      const { clientX, clientY } = event;
      const rect = event.target.getBoundingClientRect();
      this.x = (clientX - rect.left - rect.width / 2) / 10;
      this.y = (clientY - rect.top - rect.height / 2) / 10;
    }
  }
};
</script>

<style scoped>
.parallax-container {
  width: 100%;
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
  perspective: 1000px;
}

.parallax-image {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-out;
}
</style> -->


<template>
  <div class="section">
    <p>
      Ooops!!! You've arrived on a wrong link, You're missing out on the fun!
      <br>
      <RouterLink to="/" style="padding: 30%">Back to Homepage</RouterLink>
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.section{
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
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