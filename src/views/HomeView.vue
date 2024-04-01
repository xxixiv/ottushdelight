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
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col style="justify-content:center!important" cols="12">
          <div>
            <h2 style="; font-family: sunny;">OTTUSH</h2>
            <h5 style="font-family:feas; font-weight:400; font-size:30px" class="pl-6">We deal in</h5>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="$vuetify.display.smAndDown" cols="12">
          <v-timeline side="end">
            <v-timeline-item
              dot-color="#FFECB3"
              size="small"
            >
              <v-alert
                color="#FFFDE7"
                icon="info"
                :value="true"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-alert>
            </v-timeline-item>
          </v-timeline>
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
      <v-row>
        <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
          <v-lazy
          :min-height="500"
          :options="{'threshold':0.8}"
          transition="fade-transition"
          >
          <v-carousel 
            height="auto"
            hide-delimiters
            @change="handleCarouselChange"
            show-arrows="hover"
            show-arrows-on-hover
          >
            <template v-slot:prev="{ props }">
              <v-btn
                plain
                class="content-icon"
                @click="props.onClick"
              ><v-icon icon="mdi-arrow-left"></v-icon></v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn
                plain
                class="content-icon"
                @click="props.onClick"
              >
                <v-icon icon="mdi-arrow-right"></v-icon>
              </v-btn>
            </template>
            
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
                <v-skeleton-loader type="image">
                  <v-img :src="item.src" :aspect-ratio="item.aspectRatio" style="object-fit: cotain;" /></v-skeleton-loader>
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
          </v-lazy>
        </v-col>
        <!-- </v-row>
        <v-row> -->
          <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
         <v-card>
      <v-card-title>Events Quota Calculator</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="calculateTotalCost">
          <v-container v-for="(product, index) in products" :key="index">
            <v-row>
              <v-col cols="12" md="6">
              <v-combobox
              chips
              multiple
              clearable
              v-model="product.selected"
              :items="productOptions.map(option => option.name)"
              label="Select Product"
              >
              </v-combobox>
              </v-col>
            </v-row>
            <v-row v-if="product.selected.length > 0">
              <v-col v-for="(selectedProduct, selectedIndex) in product.selected" :key="selectedIndex" cols="12" md="6">
                <v-text-field 
                  v-model="product.quantities[selectedIndex]" 
                  :label="'Quantity for ' + selectedProduct" 
                  type="number"
                  :rules="[v => !!v || 'Quantity is required', v => (v === '' || v >= 0) || 'Quantity cannot be negative']"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider v-if="index !== products.length - 1"></v-divider>
          </v-container>
          <v-row>
            <v-col cols="12">
              <v-btn type="submit" color="light"
              :disabled="isSubmitDisabled">Calculate Total Cost</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <div v-if="totalCost !== null">
          <v-alert
          density="compact"
          variant="outlined"
          type="info"
          color="light"
        >Total Cost: N {{ totalCost }}</v-alert>
          <h3></h3>
        </div>
      </v-card-text>
    </v-card>
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
        videoHeight: '70%', 
        backgroundStyle: '#101010',
        opacitySyle: '0.5',
         products: [
          { selected: [], quantities: [] }
      ],
      productOptions: [
        { name: 'Product A', unitPrice: 10, selected: false },
        { name: 'Product B', unitPrice: 15, selected: false },
        { name: 'Product C', unitPrice: 15, selected: false },
        { name: 'Product D', unitPrice: 15, selected: false },
        { name: 'Product E', unitPrice: 15, selected: false },
      ],
      totalCost: null
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
      calculateTotalCost() {
  let total = 0;
  for (const product of this.products) {
    for (let i = 0; i < product.selected.length; i++) {
      const selectedProduct = product.selected[i];
      const quantity = parseInt(product.quantities[i] || 0); // Default to 0 if quantity is empty
      const option = this.productOptions.find(opt => opt.name === selectedProduct);
      if (option && typeof option.unitPrice === 'number') {
        total += quantity * option.unitPrice;
      } else {
        console.error(`Invalid unitPrice for product "${selectedProduct}"`);
      }
    }
  }
  this.totalCost = total;
}
    },
      computed: {
    isSubmitDisabled() {
      // Check if any product quantity is null or negative
      return this.products.some(product => product.quantity === null || product.quantity === '' || product.quantity < 0);
    }
  }
};
  </script>

  <style scoped>
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
