<template>
    <v-card>
        <v-card-title>Contact Us</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-text-field v-model="formData.name" label="Name" required></v-text-field>
            <v-text-field v-model="formData.email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="formData.subject" label="Subject" required></v-text-field>
            <v-textarea v-model="formData.message" label="Message" required></v-textarea>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
</template>

<script>
export default {
  name: 'ContactUs', // This sets the name of the component
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Here you can handle form submission, e.g., send data to server
      console.log('Form submitted with data:', this.formData);
      // For demonstration, let's clear the form data after submission
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
* {
    height: 100vh;
}

</style>