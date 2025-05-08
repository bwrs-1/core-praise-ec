<template>
    <div class="cursor-pointer transition-opacity duration-300 hover:opacity-70">
      <div class="relative aspect-[3/4] bg-[#f4f4f4]">
        <img
          :src="product.image"
          alt="product"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="text-center mt-2 text-[13px] tracking-tight leading-tight font-light uppercase">
        {{ product.title }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ product: Object })
  </script>
  