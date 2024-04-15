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
          <v-img :src="service.image" height="200">
            <v-expand-transition>
              <v-overlay v-if="hovered === index" absolute color="rgba(0, 0, 0, 0.7)">
                <v-btn color="primary" text @click="openDetails(service)">Learn More</v-btn>
              </v-overlay>
            </v-expand-transition>
          </v-img>
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
                <v-progress-circular v-if="!allImagesLoaded" color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-infinite-scroll>
        <v-btn
        v-if="$vuetify.display.mdAndUp"
        plain
        class="ml-n5 arrow-icon"
      @click="scrollImages('right')"
      >
      <v-icon >mdi:mdi-chevron-right</v-icon>
    </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ServicePage',
  data() {
    return {
      hovered: null,
      disabled: false,
      images: [],
      loading: false,
      page: 1, // initial page number
      perPage: 10,
      services: [
        {
          name: 'Weddings',
          description: 'Description of Service 1',
          image: 'https://via.placeholder.com/300',
        },
        {
          name: 'Namings',
          description: 'Description of Service 2',
          image: 'https://via.placeholder.com/300',
        },
        {
          name: 'Birthdays',
          description: 'Description of Service 2',
          image: 'https://via.placeholder.com/300',
        }, 
        {
          name: 'Drinks management',
          description: 'Description of Service 2',
          image: 'https://via.placeholder.com/300',
        },
      ],
    };
  },
  computed: {
    allImagesLoaded() {
      // Check if all images have been loaded
      return this.images.length >= this.totalImages;
    },
  },
  methods: {
    loadImages() {
      this.loading = true;
      setTimeout(() => {
        // Replace this with actual logic to load images from local storage
        const imagePaths = [
          '/images 1.jpg',
          '/images 2.jpg',
          '/images 1.webp',
          '/images 2.webp',
          '/images 3.webp',
          '/images 4.jpg',
          '/images 5.jpg',
          '/images 6.jpg',
          '/images 7.jpg',
          '/images 4.webp',
          '/images 8.jpg',
          '/images 9.jpg',
        ];
        const newImages = imagePaths.slice((this.page - 1) * this.perPage, this.page * this.perPage);
        this.images = this.images.concat(newImages.map(url => ({ url })));
        this.loading = false;
      }, 1000);
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
  },
};
</script>

<style scoped>
.scroll-container {
  overflow-x: hidden!important;;
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
</style>
