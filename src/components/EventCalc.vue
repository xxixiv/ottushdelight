<template>
  <v-col :cols="$vuetify.display.smAndDown ? 12 : 6">
    <v-card>
      <v-card-title style="font-family: Montserrat;">OUR PRICE LIST</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="calculateTotalCost">
          <v-container v-for="(product, index) in products" :key="index">
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                style="font-family: Montserrat;"
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
                style="font-family: Montserrat;!important" 
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
              <v-btn style="font-family: Montserrat;" type="submit" color="light" :disabled="isSubmitDisabled">Calculate Total Cost</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-dialog style="font-family: Montserrat;" v-model="dialog" max-width="auto"
          transition="dialog-bottom-transition">
          <v-card>
            <v-card-title class="headline">Total Cost</v-card-title>
            <v-card-text>
              <span>(NGN): {{ totalCost.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }) }}</span>
            </v-card-text>            
            <v-card-actions>
              <v-btn
              style="font-family: Montserrat;"
              color="surface-variant"
              variant="tonal"
              @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'EventCalculator',
  data() {
    return {
      products: [{ selected: [], quantities: [] }],
      productOptions: [
        { name: 'Chapman', unitPrice: 2190, selected: false },
        { name: 'Sorrel Drink (Zobo)', unitPrice: 1800, selected: false },
        { name: 'Virgin Mojito', unitPrice: 2190, selected: false },
        { name: 'Tropical Sunrise', unitPrice: 2190, selected: false },
        { name: 'Ocean breeze', unitPrice: 2190, selected: false },
        { name: 'Pina Colada', unitPrice: 2675, selected: false },
        { name: 'Cuddles on the beach', unitPrice: 2675, selected: false },
        { name: 'Strawberry Daiquiri', unitPrice: 2675, selected: false },
      ],
      totalCost: null,
      dialog: false,
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
      this.dialog = true; // Show dialog after calculating total cost
    },
  },

  computed: {
    isSubmitDisabled() {
      // Check if any product quantity is null or negative
      return this.products.some(product => product.quantity === null || product.quantity === '' || product.quantity < 0);
    },
    formattedTotalCost() {
      return this.totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // Convert to USD
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
