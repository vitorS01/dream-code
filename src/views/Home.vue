<script lang="ts">
  import Cloud from '../components/Cloud.vue';
  import TypingText from '../components/TypingText.vue';
  

  export default {
    name: 'Home',
    components: {Cloud, TypingText},
  }
</script>

<template>
  <main>
    <div class="phrase">
      <h1><TypingText ></TypingText> your best.</h1>
      <h3>DreamCode empowers developers and learners alike, offering nice challenges, thrilling competitions, and the tools to turn programming ideas into reality.</h3>
    </div>
    <div class="btns">
      <button>Lorem ipsum</button>
      <button><a href="https://github.com/vitorS01/dream-code" target="_blank">Github</a></button>
    </div>
  </main>
  <Cloud/>
</template>

<style scoped>
  main {
    display: flex;
    margin-top: 100px;
    padding: 10px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main > .phrase {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .phrase > h1 {
    font-size: 8rem;
  }


  .phrase > h3 {
    max-width: 500px;
    margin-top: 2rem;
    font-weight: normal;
    color: #b8b8b8;
  }

  

  .btns {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }

  .btns > button {
    border: none;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
    border-radius: 2rem;
    transition: opacity .2s ease-in;
  }
  .btns > button:hover {
    opacity: .8;
  }
  .btns > button:nth-child(1) {
    background-color: rgb(167, 15, 228);
  }
  .btns > button:nth-child(2) {
    background: none;
    border: solid 2px #b8b8b8;
  }

  @media (max-width: 768px) {
    .phrase > h1 {
      font-size: 4rem; 
    }
    .cloud > img {
      width: 80vw;
      height: auto; 
    }
  }
</style>