<template>
  <button @click="toggleDarkMode">Toggle Dark Mode</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = (event: MouseEvent): void => {
      isDarkMode.value = !isDarkMode.value;
      applyDarkMode(isDarkMode.value);
    };

    const applyDarkMode = (enable: boolean): void => {
      if (enable) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    return {
      toggleDarkMode,
    };
  },
});
</script>

<style>
/* 示例样式 */
body.dark-mode {
  background-color: #121212;
  color: white;
}
</style>