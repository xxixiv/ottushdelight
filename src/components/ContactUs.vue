<template>
  <v-container>
    <v-row justify="space-around">
        <v-col cols="12">
            <h1>Contact <span style="font-family: bare;">OTTUSH DELIGHT</span> today</h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-lazy>
                <v-card>
                <v-list lines="one">
                    <v-list-item-title class="ml-4" style="font-family: sunny;">Contacts</v-list-item-title>
                            <v-list-item><v-icon>mdi:mdi-compass</v-icon> Address: Ipaja, Lagos</v-list-item>
                </v-list>
                        </v-card>
            </v-lazy>
        </v-col>
        <v-col cols="12">
            <v-lazy>
                <v-card>
                    <v-list lines="one">
                    <v-list-item-title class="ml-4" style="font-family: sunny;">Socials</v-list-item-title>
                    <div v-for="(icons, index) in iconItems" :key="index">
                    <v-list-item> <v-icon> {{ icons.icon }} </v-icon> {{icons.name}}: <a :href="icons.a" style=" text-decoration: none;" target="_blank" rel="noopener noreferrer">{{ icons.at }}</a></v-list-item>
                    </div>
                    
                </v-list>
                </v-card>
            </v-lazy>
        </v-col>
    </v-row>
</v-container>
</template>


<script>
export default {
    props: {
    iconItems:{
      type: Array
    }
  },
  name: 'ContactUs', // This sets the name of the component
  data() {
    return {
      
    };
  },
  methods: {}
}
</script>

<style scoped>

</style>