<template>
  <div class="bg-background min-h-screen text-primary font-sans">
    <div class="p-10">
      <h1 class="text-4xl mb-4">ENTIRE STUDIOS Clone</h1>
      <div v-if="products.length" class="grid grid-cols-2 gap-6">
        <div v-for="product in products" :key="product.handle" class="border p-4">
          <img :src="product.image" class="w-full h-auto mb-2" />
          <p class="text-lg">{{ product.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: products } = await useFetch('/api/products');
</script>