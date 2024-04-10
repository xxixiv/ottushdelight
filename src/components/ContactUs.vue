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
                    
                        
                            <v-list-item>Email: example@example.com</v-list-item>
                            <v-list-item>Phone: +123456789</v-list-item>
                            <v-list-item>Address: 123 Main Street, City</v-list-item>
                </v-list>
                        </v-card>
            </v-lazy>
        </v-col>
        <v-col cols="12">
            <v-lazy>
                <v-card>
                    <v-list lines="one">
                    <v-list-item-title class="ml-4" style="font-family: sunny;">Socials</v-list-item-title>
                   
                       
                            <v-list-item>Facebook: <a href="https://www.facebook.com/example">example</a></v-list-item>
                            <v-list-item>Twitter: <a href="https://twitter.com/example">@example</a></v-list-item>
                            <v-list-item>Instagram: <a href="https://www.instagram.com/example">example</a></v-list-item>
                        
                    
                </v-list>
                </v-card>
            </v-lazy>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
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