<template>
  <v-main>
    <v-container>
      <v-row dense>
        <!-- filteredVariants を使って絞り込んだデータを表示 -->
        <v-col v-for="(product, i) in filteredVariants" :key="i" cols="6" md="3">
          <v-card class="mx-auto" max-width="350">
            <v-img
              :src="product.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="350px"
              cover
            >
              <v-card-title class="text-white" v-text="product.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-btn text>Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';

const variants = ref([
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'TOPS', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'OTHER', src: 'https://imagedelivery.net/example/black.png' },
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'TOPS', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'OTHER', src: 'https://imagedelivery.net/example/black.png' },
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'TOPS', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'OTHER', src: 'https://imagedelivery.net/example/black.png' },
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'OTHER', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'TOPS', src: 'https://imagedelivery.net/example/black.png' },
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'OTHER', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'TOPS', src: 'https://imagedelivery.net/example/black.png' },
  { title: 'sample TYPE "C" White', color: 'WHITE', category: 'OTHER', src: 'https://imagedelivery.net/example/white.png' },
  { title: 'sample TYPE "C" Black', color: 'BLACK', category: 'TOPS', src: 'https://imagedelivery.net/example/black.png' },
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