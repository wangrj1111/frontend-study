<template>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="validateForm">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
          <div v-if="errors.username" class="error">{{ errors.username.join(', ') }}</div>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
          <div v-if="errors.password" class="error">{{ errors.password.join(', ') }}</div>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />
          <div v-if="errors.email" class="error">{{ errors.email.join(', ') }}</div>
        </div>
        <button type="submit" :disabled="!isValid">Submit</button>
      </form>
      <button @click="resetForm">Reset</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
  import { useFormValidation } from '../composables/useFormValidation';
  
  const initialValues = reactive({
    username: '',
    password: '',
    email: ''
  });
  
  const rules = {
    username: value => value.length >= 3 || 'Username must be at least 3 characters long',
    password: value => value.length >= 6 || 'Password must be at least 6 characters long',
    email: value => /^\S+@\S+\.\S+$/.test(value) || 'Email is not valid'
  };
  
  const { username, password, email, errors, isValid, validateForm, resetForm } = useFormValidation(initialValues, rules);
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>