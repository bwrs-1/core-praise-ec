<template>
  <div class="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <h1 class="text-4xl font-bold mb-12 tracking-wide text-white">CORE PRAISE</h1>
    <video controls autoplay loop muted class="w-full h-auto">
      <source src="/workspaces/core-praise-ec/entire-clone/assets/css/videos/background.mp4" type="video/mp4" />
      お使いのブラウザは動画をサポートしていません。
    </video>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      <div
        v-for="product in products"
        :key="product.handle"
        class="group relative border border-gray-700 rounded-lg overflow-hidden bg-gray-900"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-white">{{ product.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchShopifyProducts } from '~/utils/shopify';

const products = ref([]);

onMounted(async () => {
  products.value = await fetchShopifyProducts();
});
</script>

<style>
.video-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>