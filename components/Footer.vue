<template>
  <v-footer class="d-flex justify-center align-center" color="transparent" rounded="lg">
    <v-btn :elevation="0" color="transparent" @click="scrollToTop">
      <p class="blink">back to top ↑</p>
    </v-btn>
  </v-footer>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
@keyframes blinking {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

/* 要素にアニメーションを適用 */
.blink {
	animation: blinking 1s ease-in-out infinite alternate;
}
</style>