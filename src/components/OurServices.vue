<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="6" lg="4" v-for="(service, index) in services" :key="index">
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
      </v-container>
</template>

<script>
export default {
    name: 'ServicePage',
    data() {
      return {
        hovered: null,
        services: [
          {
            name: 'Weddings',
            description: 'Description of Service 1',
            image: 'https://via.placeholder.com/300',
          },
          {
            name: 'Naming',
            description: 'Description of Service 2',
            image: 'https://via.placeholder.com/300',
          },
          // Add more services as needed
        ],
      };
    },
    methods: {
      openDetails(service) {
        // Implement navigation to the details page or any action
        console.log('Opening details for:', service.name);
      },
    },
  };
  </script>
  
  <style scoped>
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