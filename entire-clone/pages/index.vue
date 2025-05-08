<template>
  <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
    <source src="/workspaces/core-praise-ec/entire-clone/assets/css/videos/background.mp4" type="video/mp4" />
  </video>

  <v-layout class="rounded rounded-md">

    <!-- <v-card class="w-full relative" flat color="grey lighten-4">
    <div class="text-center w-full">
      drop 10 ONLINE NOW
    </div>
  </v-card> -->

    <!-- ヘッダー -->
    <v-app-bar density="compact" :elevation="0" class="text-center" color="transparent">

      <template v-slot:prepend>
        <v-btn>back to</v-btn>
        <v-btn>info</v-btn>
      </template>
      <v-app-bar-title>"CORE PRAISE"</v-app-bar-title>

      <template v-slot:append>
        <v-btn>collection</v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn>bag</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row dense justify="end"> <!-- justify="end" に変更 -->
          <v-col v-for="n in 8" :key="n" cols="12">
            <v-btn height="20" class="d-flex align-end flex-column bg-surface-variant"></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- 商品一覧 -->
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <!-- 商品情報をProductCardに渡す -->
        <!-- <ProductCard v-for="product in products" :key="product.storesjpItem" :product="product" /> -->
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from '~/components/ProductCard.vue';

const products = ref([]); // 商品情報を格納する配列

// スクリプトを動的にロードする関数
function loadStoresJpScript() {
  const scriptId = 'storesjp-button';
  if (document.getElementById(scriptId)) {
    return; // 既にスクリプトがロードされている場合は何もしない
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = '//btn.stores.jp/button.js';
  script.charset = 'UTF-8';
  script.async = true;

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

// 商品データをStores.jpから取得する関数
async function fetchProductData() {
  try {
    const response = await fetch('https://api.stores.jp/v1/products', {
      headers: {
        Authorization: 'Bearer your-access-token' // Stores.jpのAPIトークンを設定
      }
    });
    const data = await response.json();
    products.value = data.map((item: any) => ({
      image: item.image_url,
      name: item.name,
      description: item.description,
      storesjpItem: item.id,
      storesjpVariation: item.variation_id,
      storesjpName: item.name
    }));
  } catch (error) {
    console.error('商品データの取得に失敗しました:', error);
  }
}

// Vueのマウント時にスクリプトをロードし、商品データを取得
onMounted(() => {
  loadStoresJpScript();
  fetchProductData();
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

.transparent-app-bar {
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明の黒背景 */
  color: transparent;
  /* 文字色を白に設定 */
  justify-content: center;
  /* 文字を中央に配置 */
}
</style>