<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div style="position: relative;">
          <div :style="{ height: $vuetify.display.smAndDown ? '100%' : '50%', background: backgroundStyle, opacity: opacitySyle}">
            <video
              ref="videoPlayer"
              src="./vid2.mp4"
              width="50%"
              height="100%" 
              loop
              muted
              autoplay
              @error="handleVideoError"  
              @loadedmetadata="handleVideoLoaded"
            ></video>
          </div>
          <div v-if="showLoading" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <v-progress-circular
              indeterminate
              color="primary"
              size="64"
            ></v-progress-circular>
          </div>
          <div v-if="showOverlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <h2 style="color: white; font-size: 24px; font-weight: bold;">Ottush delight</h2>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <h2>What we do</h2>
      </v-col>
      <v-spacer cols="2"></v-spacer>
    </v-row>
    <v-row>
      <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
        <v-carousel 
          height="auto"
          hide-delimiters
          @change="handleCarouselChange"
          next-icon="mdi-arrow-right"
         prev-icon="mdi-arrow-left"
         style="background: transparent;"
        >
          <v-carousel-item
            v-for="(item, index) in carouselItems"
            :key="index"
            :src="item.src"
            :aspect-ratio="item.aspectRatio"
            height="50%"
            width="100%"
            draggable="true"
            
          >
            <template v-if="item.type === 'image'">
              <v-img :src="item.src" :aspect-ratio="item.aspectRatio" style="object-fit: cotain;" />
            </template>
            <template v-else-if="item.type === 'video'">
              <video
              ref="videoPlayer"
              :src="item.src"
              :aspect-ratio="item.aspectRatio"
              loop
              muted
              preload="auto"
              style="width: 100%; height: 100%; object-fit: contain;"
            ></video>
            </template>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <!-- </v-row>
      <v-row> -->
        <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
        <div class="text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae ab porro deserunt tempore ad beatae error magni hic. Omnis autem explicabo aperiam. Ullam corporis harum eveniet. Corrupti, cumque qui!</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      showLoading: false,
      showOverlay: true,
      carouselItems: [
        { type: 'image', src: "/attendants.jpg", aspectRatio: 16 / 9 },
        { type: 'video', src: "./cocktail.mp4", aspectRatio: 16 / 9 },
        { type: 'image', src: "/popcorn.jpg", aspectRatio: 16 / 9 },
        { type: 'image', src: "/services.jpg", aspectRatio: 16 / 9 },
        { type: 'video', src: "./gifts.mp4", aspectRatio: 16 / 9 }
      ],
      videoHeight: '50%', 
      backgroundStyle: '#101010',
      opacitySyle: '0.5'
    };
  },
  mounted() {
    // Check screen size on mount and set the initial height
    // this.setVideoHeight();
    // Listen for window resize events to adjust height accordingly
    window.addEventListener('resize', this.setVideoHeight);
  },
  beforeUnmount() {
    // Remove event listener to prevent memory leaks
    window.removeEventListener('resize', this.setVideoHeight);
  },
  methods: {
    handleVideoError() {
      this.showLoading = false; // Hide loading bar
      this.showOverlay = true; // Show overlay text
    },    handleCarouselChange() {
      // Pause the video when switching carousel items
      const videoPlayer = this.$refs.videoPlayer;
      if (videoPlayer && videoPlayer.tagName === 'VIDEO') {
        videoPlayer.pause();
      }
    },
    // setVideoHeight() {
    //   this.videoHeight = $vuetify.display.smAndDown ? '70%' : '50%';
    // },
    handleVideoLoaded() {
      this.showLoading = false; // Hide loading indicator once the video is loaded
    },
}
}
</script>

<style scoped>
</style>
