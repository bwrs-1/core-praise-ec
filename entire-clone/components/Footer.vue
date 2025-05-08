<template>
  <v-footer class="d-flex justify-center align-center" color="transparent" rounded="lg">
    <v-btn :elevation="0" color="transparent" @click="scrollToTop">
      back to top ↑
    </v-btn>
  </v-footer>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>