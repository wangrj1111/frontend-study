<template>
    <div>
      <h1>Time Left: {{ timeLeft }}</h1>
      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <p v-if="isFinished">Countdown Finished!</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useCountdownTimer } from '../composables/useCountdownTimer';
  
  export default defineComponent({
    setup() {
      const { timeLeft, isFinished, start, stop } = useCountdownTimer(10);
  
      return { timeLeft, isFinished, start, stop };
    }
  });
  </script>