<template>
    <div>
      <h2>Send SMS</h2>
      <input v-model="phoneNumber" placeholder="Enter phone number" />
      <textarea v-model="message" placeholder="Enter message"></textarea>
      <button @click="send" :disabled="smsStatus === 'sending'">Send</button>
  
      <div v-if="smsStatus === 'sending'">Sending...</div>
      <div v-else-if="smsStatus === 'success'">SMS sent successfully!</div>
      <div v-else-if="smsError">{{ smsError }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
 import { useSmsSender } from '../composables/useSmsSender';
  
  const phoneNumber = ref('');
  const message = ref('');
  const { sendSms, smsStatus, smsError } = useSmsSender({ delay: 2000, successRate: 90 });
  
  const send = async () => {
    await sendSms(phoneNumber.value, message.value);
  };
  </script>