<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="product.image"
      cover
    >
      <v-card-title>{{ product.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ product.description }}
    </v-card-subtitle>

    <v-card-actions>
      <!-- Stores.jp ボタン -->
      <v-btn
        class="storesjp-button"
        :data-storesjp-item="product.storesjpItem"
        :data-storesjp-variation="product.storesjpVariation"
        :data-storesjp-name="product.storesjpName"
        data-storesjp-layout="layout_a"
        data-storesjp-lang="ja"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

// 親コンポーネントから渡される商品データ
defineProps({
  product: {
    type: Object,
    required: true
  }
});

// スクリプトを動的にロードする関数
function loadStoresJpScript() {
  const scriptId = 'storesjp-button';
  if (document.getElementById(scriptId)) {
    console.log('Stores.jpスクリプトは既にロードされています');
    return; // 既にスクリプトがロードされている場合は何もしない
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = '//btn.stores.jp/button.js';
  script.charset = 'UTF-8';
  script.async = true;

  script.onload = () => {
    console.log('Stores.jpスクリプトがロードされました');
  };

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

// Vueのマウント時にスクリプトをロード
onMounted(() => {
  loadStoresJpScript();

  // ボタン生成のテスト
  console.log('商品データ:', product);
  const buttonContainer = document.querySelector('.storesjp-button');
  if (buttonContainer) {
    console.log('Stores.jpボタンのコンテナが見つかりました:', buttonContainer);
  } else {
    console.error('Stores.jpボタンのコンテナが見つかりません');
  }
});
</script>