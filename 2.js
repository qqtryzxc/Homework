<template>
  <form @submit.prevent="login">
    <label>
      Имя:<input v-model="username" type="text"/>
    </label>
    <button type="submit">отправить</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
function login() {
  alert(`Имя: ${username.value}`);
}
</script>
