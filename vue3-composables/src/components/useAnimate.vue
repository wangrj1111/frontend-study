<script setup>
import { ref } from 'vue'
import { useAnimate } from '@vueuse/core'

const el = ref()
const {
  isSupported,
  animate,

  // actions
  play,
  pause,
  reverse,
  finish,
  cancel,

  // states
  pending,
  playState,
  replaceState,
  startTime,
  currentTime,
  timeline,
  playbackRate,
} = useAnimate(el, { transform: 'rotate(720000000000000deg)' }, 100000000000)
</script>

<template>
  <span ref="el" style="display:inline-block">useAnimate</span>
</template>