<script lang="ts">
  import Navbar from '../components/Navbar.vue';
  import TabList from '../components/TabList.vue';
  import Tabs from '../components/problems/Tabs.vue';
  import ProblemView from '../components/ProblemView.vue';

  export default {
    name: 'ProblemLayout',
    components: {
      Navbar, TabList, ProblemView, Tabs
    }
  }
</script>

<template>
  <Navbar></Navbar>
  <div class="main-wrapper">
    <TabList />
    <div class="wrapper">
      <div class="main-content">
        <Tabs />
        <RouterView />
      </div>
      <ProblemView />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  margin: .5rem 4rem;
}

.wrapper {
  width: 100%;
  height: calc(100vh - 10rem);
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}


.wrapper > div {
  background-color: var(--blue-600);
}

.main-content {
  width: 40%;
  border-radius: 2rem .5rem .5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  overflow-y: auto;
  padding: 2rem;
}
</style>