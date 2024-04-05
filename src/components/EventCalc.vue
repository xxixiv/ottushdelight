<template>
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
</template>

<script>
export default {
name: 'EventCalculator',
data() {
    return {
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

methods: {
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
}
</script>

<style lang="scss" scoped>

</style>