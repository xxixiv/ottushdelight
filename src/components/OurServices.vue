<template>
  <v-container fluid>
    <v-row justify="center" class="mx-9">
      <v-lazy 
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col style="justify-content:center!important" cols="12">
            <h5 style="font-family:bare; font-size:20px" class=" my-6">Our Works</h5>
        </v-col>
        </v-lazy>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="12" xs="12" lg="4" v-for="(service, index) in services" :key="index">
        <v-card class="service-card" outlined @mouseover="hovered = index" @mouseleave="hovered = null">
          
          <template v-if="service.type === 'image'">
            <v-img :src="service.content" height="500" cover> <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template></v-img>
          </template>
          <template v-else-if="service.type === 'video'">
            <v-card>
            <div>
              <video
              class="video-container"
                id="myVideo"
                width="100%"
                height="500"
                :src="service.content"
                @ended="resetIcon"
              ></video>
              <v-btn 
              class="centered-btn"
              @click="toggleVideo" 
              icon
              :class="{ 'visible-btn': showBtn }">
                <v-icon>{{ playIcon }}</v-icon>
              </v-btn>
            </div>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
            </v-card>
          </template>
          
          <v-card-title>{{ service.name }}</v-card-title>
          <v-card-text>{{ service.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify-md="center">
      <v-lazy
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col cols="12">
            <h5 style="font-family:bare; font-size:20px" class="pl-6 my-6">Our Drinks Gallery</h5>
        </v-col>
        </v-lazy>
    </v-row>
    <v-slide-y-reverse-transition>
    <v-row class="px-3">
      <v-col class="d-flex child-flex">
        <v-btn
                plain
                class="mr-n9 arrow-icon"
              @click="scrollImages('left')"
              v-if="$vuetify.display.mdAndUp"
              >
              <v-icon>mdi:mdi-chevron-left</v-icon>
            </v-btn>
         
        <v-infinite-scroll  
        :height="getInfiniteScrollHeight()" 
        :onLoad="loadImages" 
        :direction="getInfiniteScrollDirection()"
         class="d-flex scroll-container">
          <v-img
            v-for="(image, index) in images"
            :key="index"
            :lazy-src="image.url"
            :src="image.url"
            :width="getImageWidth()"
            aspect-ratio="1"
            class="bg-grey-lighten-2"
            cover
          >
             <template v-slot:placeholder>
                  <v-row align="center" class="fill-height ma-0" justify="center">
                    <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                  </v-row>
                </template>
           
          </v-img>
          <v-overlay absolute :value="true" z-index="1000" v-for="(image, index) in images" :key="index">
            <div class="image-overlay" v-if="image.description">{{ image.description }}</div>
</v-overlay>
    
        </v-infinite-scroll>
        <v-btn
        v-if="$vuetify.display.mdAndUp"
        plain
        class="ml-n5 arrow-icon"
      @click="scrollImages('right')"
      >
      <v-icon>mdi:mdi-chevron-right</v-icon>
    </v-btn>
      </v-col>
    </v-row>
  </v-slide-y-reverse-transition>
  </v-container>
</template>

<script>
export default {
  name: 'ServicePage',
  data() {
    return {
      playIcon: 'mdi:mdi-play', 
      showBtn: false,
      btnVisible: false,
      hovered: null,
      disabled: false,
      images: [
      { url: '/images 1.jpg', description: 'Image 1 description' },
      { url: '/images 2.jpg', description: 'Image 2 description' },
      { url: '/images 1.webp', description: 'Image 3 description' },
      { url: '/images 2.webp', description: 'Image 3 description' },
      { url: '/images 3.webp', description: 'Image 3 description' },
      { url: '/images 4.jpg', description: 'Image 3 description' },
      { url: '/images 5.jpg', description: 'Image 3 description' },
      { url: '/images 6.jpg', description: 'Image 3 description' },
      { url: '/images 7.jpg', description: 'Image 3 description' },
      { url: '/images 4.webp', description: 'Image 3 description' },
      { url: '/images 8.jpg', description: 'Image 3 description' },
      { url: '/images 9.jpg', description: 'Image 3 description' },
      { url: '/images 13.jpg', description: 'Image 3 description' },
      { url: '/images 14.jpg', description: 'Image 3 description' },
      { url: '/images 15.jpg', description: 'Image 3 description' },
      { url: '/images 16.jpg', description: 'Image 3 description' },
      { url: '/images 12.webp', description: 'Image 3 description' },
      ],
      loading: false,
      page: 1, // initial page number
      perPage: 5,
      services: [
        {
          name: 'Weddings',
          description: 'Description of Service 1',
          type: 'image',
          content: 'https://via.placeholder.com/300',
        },
        {
          name: 'Namings and Birthdays',
          description: 'Description of Service 2',
          type: 'video',
          content: 'VID-20240413-WA0009.mp4',
          isVideoReady: false
        },
        {
          name: 'Drinks management',
          description: 'Description of Service 3',
          type: 'image',
          content: 'https://via.placeholder.com/300',
        },
      ],
    };
  },
//   computed: {
//   allImagesLoaded() {
//     return this.images.length >= this.perPage && this.images.every(image => image.url !== '') && !this.loading;
//   },
// },
  methods: {
    // loadImages() {
    //   this.loading = true;
    //   setTimeout(() => {
    //     // Replace this with actual logic to load images from local storage
    //     const imagePaths = [
    //       '/images 1.jpg',
    //       '/images 2.jpg',
    //       '/images 1.webp',
    //       '/images 2.webp',
    //       '/images 3.webp',
    //       '/images 4.jpg',
    //       '/images 5.jpg',
    //       '/images 6.jpg',
    //       '/images 7.jpg',
    //       '/images 4.webp',
    //       '/images 8.jpg',
    //       '/images 9.jpg',
    //     ];
    //     const newImages = imagePaths.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    //     this.images = this.images.concat(newImages.map(url => ({ url })));
    //     this.loading = false;
    //   }, 1000);
    // },
//     loadImages() {
//   if (this.loading) return; // Prevent multiple calls
//   this.loading = true;
//   const nextPage = this.page + 1;
//   const imagePaths = [];

//   // Replace this with actual logic to load images from local storage or API
//   for (let i = 0; i < this.perPage; i++) {
//     const imageUrl = `/images/${nextPage}-${i + 1}.jpg`;
//     imagePaths.push(imageUrl);
//   }

//   // Check if there are more images to load
//   if (imagePaths.length > 0) {
//     // Check if the images exist
//     const existingImages = imagePaths.filter(imageUrl => {
//       // Check if the image exists (you can use a different method to check existence)
//       return document.querySelector(`[src="${imageUrl}"]`) !== null;
//     });

//     // Add new images to the existing array
//     this.images = this.images.concat(existingImages.map(url => ({ url })));

//     // Update the page number
//     this.page = nextPage;
//   }

//   this.loading = false;
// },


    toggleVideo() {
      const video = document.getElementById("myVideo");
      if (video.paused) {
        video.play();
        this.playIcon = 'mdi:mdi-pause'; // update icon
      } else {
        video.pause();
        this.playIcon = 'mdi:mdi-play'; // update icon
      }
    },


    scrollImages(direction) {
      const container = document.querySelector('.scroll-container');
      if (direction === 'left') {
        container.scrollLeft -= 300; // Adjust as needed
      } else if (direction === 'right') {
        container.scrollLeft += 300; // Adjust as needed
      }
    },
    getImageWidth() {
      // Adjust image width based on screen size
      if (this.$vuetify.display.mdAndDown) {
        return '500'; // Adjust as needed
      } else {
        return '450'; // Adjust as needed
      }
    },
    getInfiniteScrollHeight() {
      return this.$vuetify.display.smAndDown ? '500' : 'auto';
    },

    // Function to determine the direction of the v-infinite-scroll based on screen size
    getInfiniteScrollDirection() {
      return this.$vuetify.display.smAndDown ? 'vertical' : 'horizontal';
    },
      resetIcon() {
      this.playIcon = 'mdi:mdi-play';
    }
  },
  
  mounted() {
  const video = document.getElementById("myVideo");
  let timeoutId = null;
  video.addEventListener("mouseover", () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      this.showBtn = true;
      this.btnVisible = true;
    }, 100); // 100ms delay
  });
  video.addEventListener("mouseout", () => {
    if (this.btnVisible) {
      this.showBtn = false;
      this.btnVisible = false;
    }
  });
}
}
</script>

<style scoped>
.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
}

.video-container {
  position: relative;
  width: 100%;
}

.visible-btn {
  opacity: 1;
}


.centered-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.scroll-container {
  overflow-x: hidden!important;
}
.arrow-icon {
  cursor: pointer;
  margin: auto 10px;
  z-index: 1001!important;
}
.service-card {
  margin-bottom: 20px;
}

.v-card-title {
  font-size: 20px;
  font-weight: bold;
}

.v-card-text {
  font-size: 16px;
}

.v-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-overlay__content {
  z-index: 1;
}

.centered-btn:not(.visible-btn) {
  opacity: 0;
  transition: opacity 0.3s;
}


</style>
