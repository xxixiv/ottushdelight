<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div style="position: relative;">
          <div style="background: #101010; opacity: 0.5;">
            <video
              ref="videoPlayer"
              src="./vid2.mp4"
              width="100%" 
              loop
              muted
              autoplay
              @error="handleVideoError"
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
      <v-spacer cols="2"></v-spacer>
      <v-col cols="1">
        <h2>What we do</h2>
      </v-col>
      <v-spacer cols="2"></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-carousel 
          height="300"
          progress
          hide-delimiters
          @change="handleCarouselChange"
         
        >
          <v-carousel-item
            v-for="(item, index) in carouselItems"
            :key="index"
            :src="item.src"
            :aspect-ratio="item.aspectRatio"
            
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
      <v-col>
        <div>
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
      ]
    };
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
    }
}
}
</script>

<style scoped>
</style>
