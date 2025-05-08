<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-content color="trransparent">
        <div class="video-background">
          <video autoplay loop muted playsinline class="video-element">
            <source src="/workspaces/core-praise-ec/assets/css/videos/background.mp4" type="video/mp4">
          </video>
          <!-- ヘッダー -->
          <Heder />
          <!-- サイドメニュー -->
          <SideMenu @filterByColor="handleFilterColor" @filterByCategory="handleFilterCategory" />
          <!-- 商品一覧：両方のフィルターをpropとして渡す -->
          <ProductCard :filterColor="selectedColor" :filterCategory="selectedCategory" />
          <!-- フッター -->
          <Footer />
        </div>
      </v-content>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Heder from '../components/Heder.vue';
import SideMenu from '../components/SideMenu.vue';
import ProductCard from '../components/ProductCard.vue';
import Footer from '../components/Footer.vue';

const selectedColor = ref<string>('');
const selectedCategory = ref<string>('');

// クリックイベントでフィルター値を更新（色フィルターの場合）
function handleFilterColor(color: string) {
  selectedColor.value = color;
  // 色フィルター選択時はカテゴリフィルターをリセットする場合
  selectedCategory.value = '';
}

// クリックイベントでフィルター値を更新（カテゴリフィルターの場合）
function handleFilterCategory(category: string) {
  selectedCategory.value = category;
  // カテゴリフィルター選択時は色フィルターをリセットする場合
  selectedColor.value = '';
}

const products = ref([]);

// Vueのマウント時にスクリプトをロードし、商品データを取得
onMounted(() => {
});
</script>

<style>
.video-element {
  width: 100%;
  height: 50%;
}

.transparent-app-bar {
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(143, 45, 45);
  justify-content: center;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay-content {
  position: relative;
  z-index: 1;
  height: 100vh;
}
</style>