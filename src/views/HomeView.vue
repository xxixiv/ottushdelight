  <template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" 
        style="padding:0 0!important;">
          <div style="position: relative;">
            <div style="height:450px; background: #313131; opacity: 0.8; align-content:center">

              <video
                ref="videoPlayer"
                src="./vid2.mp4"
                width="100%"
                height="96%" 
                loop
                muted
                autoplay
                @error="handleVideoError"  
                @loadedmetadata="handleVideoLoaded"
              ></video>
            </div>
            <div v-if="showOverlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
              <h2 style="color: white; font-size: 20px; font-weight: bold;">Ottush delight</h2>
            </div>
          </div>
          <template v-slot:placeholder>
            <v-row align="center" class="fill-height ma-0" justify="center">
              <v-progress-circular v-if="!allImagesLoaded" color="grey-lighten-5" indeterminate></v-progress-circular>
            </v-row>
          </template>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-lazy v-show="false"
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col style="justify-content:center!important" cols="12">
            <h2 style="; font-family: sunny;">OTTUSH DELIGHT</h2>
            <h5 style="font-family:bare; font-size:40px" class="pl-6">We deal in</h5>
        </v-col>
        </v-lazy>
        <v-lazy
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
        <v-col>
            <h2 style="font-family: sunny; font-size:60px;" class="d-flex justify-center font-h2">OTTUSH DELIGHT</h2>
            <h5 style="font-family:glue; font-size:30px; letter-spacing: 0.2rem;" class="justify-center font">Delightinging your buds with our Exceptional tastes</h5>
            <v-divider ></v-divider>
            <div  v-for="(item, index) in alertItems"
            :key="index">
            <h6 style=" font-family:sunny; font-size:30px;" class="py-5">{{ item.name }}</h6>
            <v-divider></v-divider>
          </div>
          <v-btn
          class="my-5 d-flex justify-center"
          height="62"
          min-width="140"
          to="/contact"
          variant="outlined"
          >Contact Us Now</v-btn>
        </v-col>
        </v-lazy>
      </v-row>

      <v-row style="">
        <v-col v-show="false" cols="12">
          <v-lazy
          :min-height="auto"
          :options="{'threshold':1}"
          transition="slide-y-transition"
        >
          <v-timeline side="end">
            <v-timeline-item
              v-for="(item, index) in alertItems"
              :key="index"
              dot-color=""
              size="small"
            >
              <v-alert
                color=""
                :value="true"
              >
              <div class="text-h6">{{ item.name }}</div>
              {{ item.text }}
              </v-alert>
            </v-timeline-item>
           </v-timeline>
          </v-lazy>
        </v-col>
        <!-- <v-col v-else>
          <v-timeline direction="horizontal">
            <v-timeline-item dot-color="amber">
              <div>
                <div class="text-h6">What We Do</div>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:opposite>
                <v-alert color="dark" icon="mdi-information" :value="true">
                  Book us for any of your Events
                </v-alert>
              </template>
              <div>
                <div class="text-h6">Content title</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <template v-slot:opposite>
                <v-alert color="dark" icon="mdi-information" :value="true">
                  We handle events like yours no pressure
                </v-alert>
              </template>
              <div>
                <div class="text-h6">Content title</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col> -->
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <v-row justify-md="flex-start" class="d-flex">
        
        <v-col cols="12" lg="6">
          <v-lazy
        :min-height="auto"
        :options="{'threshold':0.7}"
        transition="slide-x-reverse-transition"
      >
            <h5 style="font-family:bare; font-size:20px" class="pl-6 my-6">A feel of our presence</h5>
          </v-lazy>
          </v-col>
        
      
            <v-col lg="6" v-if="$vuetify.display.mdAndUp">
                <v-lazy
                :min-height="auto"
                :options="{'threshold':0.7}"
                transition="slide-x-transition"
              >
                    <h6 style="font-family:bare; font-size:20px" class="mt-6">Get a qouta for your events here</h6>
                </v-lazy>

         </v-col> 
        </v-row>
        <v-row justify="center">
          <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
            <v-lazy
            :min-height="auto"
            :options="{'threshold':0.8}"
            transition="fade-transition"
            >
  
            <v-carousel 
              height="auto"
              hide-delimiters
              @change="handleCarouselChange"
              cycle
              show-arrows="hover"
            >
              <!-- <template v-slot:prev="{ props }">
                <v-btn
                  plain
                  class="content-icon"
                  @click="props.onClick"
                ><v-icon icon="mdi:mdi-arrow-left"></v-icon></v-btn>
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  plain
                  class="content-icon"
                  @click="props.onClick"
                >
                  <v-icon icon="mdi:mdi-arrow-right"></v-icon>
                </v-btn>
              </template> -->
              
              <v-carousel-item
                v-for="(item, index) in carouselItems"
                :key="index"
                :src="item.src"
                :aspect-ratio="item.aspectRatio"
                width="auto"
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
                <template v-slot:placeholder>
                  <v-row align="center" class="fill-height ma-0" justify="center">
                    <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                  </v-row>
                </template>
              </v-carousel-item>
  
            </v-carousel>
            </v-lazy>
          </v-col>
          <v-col v-if="$vuetify.display.smAndDown">
            <v-divider class="my-5" ></v-divider>
            <v-lazy
            :min-height="auto"
            :options="{'threshold':0.7}"
            transition="slide-x-transition"
          >
            <v-col justify-md="space-around">
                <h6 style="font-family:bare; font-size:20px" class="pl-2 ">Get a qouta for your events here</h6>
            </v-col>
            </v-lazy>
          </v-col>
          <event-calc></event-calc>
        </v-row>
      
      
    </v-container>
  </template>

  <script>
  import EventCalc from '@/components/EventCalc.vue';
  export default {
    name: 'HomeView',
    components: {
      EventCalc,
    },
    data() {
      return {
        showLoading: false,
        showOverlay: true,
        carouselItems: [
          { type: 'image', src: "/images 6.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 10.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 9.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/attendants.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 10.webp", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 4.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 12.jpg", aspectRatio: 16 / 9 },
          { type: 'image', src: "/images 11.webp", aspectRatio: 16 / 9 }
        ],
        alertItems: [
          {name: 'Drinks Mangement', text: 'Leave it to us to handle your drinks without stress', dot: '', color: ''},
          {name: 'Exotic Mocktails', text: 'We make Exquisite Mocktails', dot: '', color: ''},
          {name: 'Chocolate fountains', text: 'Only the best of the best', dot: '', color: ''},
          {name: 'Slushies', text: 'You\'ll always want more', dot: '', color: ''},
        ],
        videoHeight: '70%', 
        backgroundStyle: '#101010',
        opacitySyle: '0.5',
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
    },
};
  </script>

  <style scoped>
  @media only screen and (max-width: 450px) {
    .font {
        font-size: 18px!important;
        letter-spacing: 0.05rem!important;
    }
    .font-h2 {
      font-size: 48px!important;
    }

}

  .content-icon{
    background: none!important;
    box-shadow: none!important;;
    opacity: 0; 
    transition: opacity 0.3s ease;
  }

  .v-carousel:hover .content-icon {
    opacity: 1;
  }
  </style>
