<template>
  <v-navigation-drawer :width="200" location="right" floating permanent color="transparent" bodre="0">
    <v-row dense>
      <v-col cols="12">
        <v-list-item v-for="item in items1" :key="item.title" link @click="filterProducts(item.title)">

          <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row dense>
      <v-col cols="12">
        <v-list-item v-for="item in items2" :key="item.title" link @click="filterCategory(item.title)">
          <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
        </v-list-item>

      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row dense>
      <v-col>
        <v-list-item v-for="item in items3" :key="item.title" link @click="filterProducts(item.title)">
          <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-icon :icon="item.icon" :color="item.title"></v-icon>
          </template>
        </v-list-item>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items1 = ref([
  { title: 'refine' },
])
const items2 = ref([
  { title: 'all' },
  { title: 'tops' },
  { title: 'other' },
])

const items3 = ref([
  { icon: 'mdi-circle', title: 'black' },
  { icon: 'mdi-circle', title: 'white' },
  { icon: 'mdi-circle', title: 'orange-accent-1' },
])

// 複数フィルター用のイベントを emit します
const emit = defineEmits(['filterByColor', 'filterByCategory']);
function filterProducts(color: string) {
  emit('filterByColor', color);
}
function filterCategory(category: string) {
  emit('filterByCategory', category);
}
</script>