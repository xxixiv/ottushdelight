<template>
    <v-container>
      <!-- File input for selecting files -->
      <input type="file" @change="handleFileUpload" accept="video/*, image/*">
      
      <!-- Button to upload the selected file -->
      <v-btn @click="uploadFile">Upload</v-btn>
  
      <!-- Display uploaded files -->
      <v-card v-for="file in files" :key="file._id">
        <v-card-title>{{ file.filename }}</v-card-title>
        <!-- Display image or video -->
        <v-img v-if="file.filetype.startsWith('image')" :src="file.filepath" />
        <video v-else :src="file.filepath" controls></video>
        <v-card-actions>
          <!-- Button to delete file -->
          <v-btn @click="deleteFile(file._id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedFile: null,
        files: []
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadFile() {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
  
        try {
          await axios.post('/upload', formData);
          // Refresh the file list after upload
          this.fetchFiles();
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      },
      async fetchFiles() {
        try {
          const response = await axios.get('/files');
          this.files = response.data;
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      },
      async deleteFile(fileId) {
        try {
          await axios.delete(`/files/${fileId}`);
          // Refresh the file list after deletion
          this.fetchFiles();
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      }
    },
    created() {
      // Fetch files when the component is created
      this.fetchFiles();
    }
  };
  </script>
  