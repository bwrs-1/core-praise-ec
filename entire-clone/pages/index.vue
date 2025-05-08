<template>
  <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
    <source src="/workspaces/core-praise-ec/entire-clone/assets/css/videos/background.mp4" type="video/mp4" />
  </video>

  <v-layout class="rounded rounded-md border">
    <v-app-bar title="CORE PRAISE"></v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <ProductCard v-for="product in products" :key="product.handle" :product="product" />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchShopifyProducts } from '~/utils/shopify';
import ProductCard from '~/components/ProductCard.vue';

const products = ref([]);

onMounted(async () => {
  products.value = await fetchShopifyProducts();
});
</script>

<style>
/* 動画を背景に設定 */
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 動画をコンテナ全体にフィット */
  z-index: -1;
  /* 背景として配置 */
}
</style>