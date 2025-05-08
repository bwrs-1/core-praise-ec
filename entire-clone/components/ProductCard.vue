<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="product.image"
      cover
    >
      <v-card-title>{{ product.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ product.handle }}
    </v-card-subtitle>

    <v-card-actions>
      <!-- Shopifyで購入ボタン -->
      <v-btn
        color="black"
        @click="goToShopify(product.handle)"
      >
        {{ "Buy" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true
  }
});

// Shopifyの決済ページに遷移する関数
function goToShopify(handle: any) {
  // window.location.href = "https://cptr00-1d.myshopify.com/products/" + handle; // Shopifyの決済ページに遷移
  window.location.href = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"; // Shopifyの決済ページに遷移
}
</script>