<script lang="ts">
export default {
  name: 'Navbar'
}
</script>
<template>
  <header>
    <div>
      <nav>
        <ul class="nav-items">
          <li><RouterLink to="/problemset">Problems</RouterLink></li>
          <li><RouterLink to="/contests">Contests</RouterLink></li>
        </ul>
      </nav>
      <div class="logo" style="display:flex; align-items: center;">
        <ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon>
        <RouterLink to="/">DreamCode</RouterLink>
        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </div>
      <nav>
        <ul class="nav-items">
          <li><RouterLink to="/olympiads">Olympiads</RouterLink></li>
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
        </ul>
      </nav>
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
    justify-content: space-around;
    background: none;
  }

  header > div {
    display: flex;
    align-items: center;
  }

  .logo {
    margin: 0 2rem;
  }

  .logo > a {
    font-size: 2.2rem;
    font-weight: bold;
  }

  .nav-items {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .nav-items > li > a {
    opacity: .9;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    color: inherit;
    transition: opacity .1s ease-in;
  }
  .nav-items > li > a:hover {
    opacity: 1;
  }

  .logo > ion-icon {
    stroke-width: 40px;
    display: flex;
    font-size: 24px;
    color: #882df0;
    transform: translateY(2px);
  }

  

</style>