<template>
  <v-navigation-drawer :width="200" location="right" floating permanent color="transparent" bodre="0">
    <v-row dense>
      <v-col v-for="n in subMenu1" :key="n" cols="12">
        <v-btn :elevation="0" color="transparent">{{ n }}</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row dense>
      <!-- category 用のボタン。:key は category を使用 -->
      <v-col v-for="category in subMenu2" :key="category" cols="12">
        <v-btn :elevation="0" color="transparent" @click="filterCategory(category)">
          {{ category }}
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row dense>
      <!-- 既存の selectColor ボタン -->
      <v-col v-for="selectColor in subMenu3" :key="selectColor" cols="12">
        <v-btn :elevation="0" color="transparent" append-icon="mdi-circle" @click="filterProducts(selectColor)">
          {{ selectColor }}
          <template v-slot:append>
            <v-icon :color="selectColor"></v-icon>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const subMenu1 = ref(['refine']);
const subMenu2 = ref(['all', 'tops', 'other']);
const subMenu3 = ref(['black', 'white', 'orange-accent-1']);

// 複数フィルター用のイベントを emit します
const emit = defineEmits(['filterByColor', 'filterByCategory']);
function filterProducts(color: string) {
  emit('filterByColor', color);
}
function filterCategory(category: string) {
  emit('filterByCategory', category);
}
</script>