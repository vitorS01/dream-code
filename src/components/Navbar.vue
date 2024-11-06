<script lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore';

export default {
  name: 'Navbar',
  setup() {
    const userStore = useUserStore();

    const isAuthenticated = computed(() => userStore.isAuthenticated);

    return { isAuthenticated }
  }
}
</script>
<template>
  <header>
    <div>
      <div class="logo" style="display:flex; align-items: center;">
        <ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon>
        <RouterLink to="/">DreamCode</RouterLink>
        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </div>
      <nav>
        <ul class="nav-items">
          <li><RouterLink to="/problemset">Problems</RouterLink></li>
          <li><RouterLink to="/contests">Contests</RouterLink></li>
          <li><RouterLink to="/olympiads">Olympiads</RouterLink></li>
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
        </ul>
      </nav>
    </div>

    <div class="profile">
      <img v-if="isAuthenticated" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.rgstatic.net%2Fii%2Fprofile.image%2F661735518253059-1534781450349_Q512%2FThiago-Nepomuceno.jpg&f=1&nofb=1&ipt=60cd19a503fb6d0428b5e64b427d8bc7d8bc45a3fe61a96950bee822281c2e51&ipo=images" alt="Profile Picture">
      <div v-else class="btns" >
        <button><RouterLink to="/login">Login</RouterLink></button>
        <button><RouterLink to="/sign-in">Sign up</RouterLink></button>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #121212;
  }

  header > div {
    display: flex;
    align-items: center;
  }

  .logo > a {
    font-size: 2rem;
    font-weight: bold;
  }

  nav {
    margin-left: 40px;
  }

  .nav-items {
    list-style: none;
    display: flex;
    gap: 15px;
  }

  .nav-items > li > a {
    opacity: .9;
  }

  a {
    font-size: 1.1rem;
    text-decoration: none;
    color: inherit;
    transition: opacity .1s ease-in;
  }
  .nav-items > li > a:hover {
    opacity: .8;
  }

  .logo > ion-icon {
    stroke-width: 40px;
    display: flex;
    font-size: 24px;
    color: #882df0;
    transform: translateY(2px);
  }

  .profile {
    margin-right: 20px;
  }
  .profile > img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .btns {
    display: flex;
    gap: .5rem;
  }

  .btns > button {
    border: none;
    padding: .6rem .7rem;
    border-radius: 2rem;
    cursor: pointer;
  }
  .btns > button:nth-child(1) {
    background: none;
    border: solid 2px #7a7a7a;
    opacity: .8;
    transition: opacity .2s ease-in;
  }
  .btns > button:nth-child(1):hover {
    opacity: 1;
  }

</style>