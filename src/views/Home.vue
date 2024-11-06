<script lang="ts">
  import LandingPage from './LandingPage.vue';
  import MainPage from './MainPage.vue';
  import { useUserStore } from '../stores/userStore';
import { computed } from 'vue';
  

  export default {
    name: 'Home',
    components: {LandingPage, MainPage},
    setup() {
      const userStore = useUserStore();

      userStore.login({email:'test@example.com', id: "123", username: "thiago"})
      const isAuthenticated = computed(() => userStore.isAuthenticated);
      
      return { isAuthenticated }
    }
  }
</script>

<template>
  <div>
    <LandingPage v-if="!isAuthenticated"/>
    <MainPage v-else />
  </div>
</template>