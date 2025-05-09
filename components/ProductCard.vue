<template>
  <v-main>
    <v-container>
      <v-row dense>
        <!-- filteredVariants を使って絞り込んだデータを表示 -->
        <v-col v-for="(product, i) in filteredVariants" :key="i" cols="6" md="2">
          <v-card :elevation="0"  @click="console.log(product)" hover>
            <v-card class="mx-auto" max-width="350">
              <v-img :src="product.src" class="align-end" gradient="to bottom" height="350px" cover>
              </v-img>
            </v-card>
            <div class="text-center text-caption">
              <p>{{ product.title }}</p>
              <p>{{ product.color }}</p>
              <p>{{ product.price }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';

const variants = ref([
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" White', color: 'WHITE', price: '77.00 USD', category: 'OTHER', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', price: '77.00 USD', category: 'TOPS', src: 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920' },
]);

const props = defineProps({
  filterColor: String,
  filterCategory: String,
});

const filteredVariants = computed(() => {
  // filterCategory が指定されているかどうか
  if (props.filterCategory) {
    // 「ALL」の場合は絞り込みを解除（全てのデータを返す）
    if (props.filterCategory.toLowerCase() === 'all') {
      return variants.value;
    }
    // それ以外は category で絞り込み
    return variants.value.filter(product =>
      product.category.toLowerCase() === (props.filterCategory?.toLowerCase() ?? '')
    );
  }
  if (props.filterColor) {
    return variants.value.filter(product =>
      product.color.toLowerCase() === (props.filterColor?.toLowerCase() ?? '')
    );
  }
  return variants.value;
});
</script>