<script lang="ts">
import Selection from '../../components/Selection.vue';

  export default {
    name: 'Generate',
    components: {Selection}
  }
</script>

<template>
  <div class="generate-wrapper">
    <div class="main-content">
      <div class="tabs">
        <ul>
          <li><RouterLink to="/problems/generate">Descrição</RouterLink></li>
          <li><RouterLink to="/">Resolver</RouterLink></li>
          <li><RouterLink to="/">Testes</RouterLink></li>
        </ul>
      </div>
      <form>
        <label for="context">Contexto do problema</label>
        <textarea name="context" id="context"></textarea>

        <Selection />

        <label for="difficulty">Dificuldade</label>
        <select id="difficulty" name="difficulty">
          <option value="0">Fácil</option>
          <option value="1">Médio</option>
          <option value="2">Difícil</option>
        </select>
        <label for="language">Idioma</label>
        <select id="language" name="language">
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
        </select>

        <button type="submit">Gerar problema</button>
      </form>
    </div>
    <div class="visualize-wrapper">
      <h1 class="title">Visualizar</h1>

    </div>
  </div>
</template>

<style scoped>
.generate-wrapper {
    width: 100%;
    height: calc(100vh - 10rem);
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
  }

  .generate-wrapper > div {
    background-color: var(--blue-600);
  }

  .main-content {
    width: 60%;
    border-radius: 2rem .5rem .5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }


  .visualize-wrapper {
    width: 40%;
    border-radius: .5rem 2rem 2rem .5rem;
    padding: 2rem;
  }
  .visualize-wrapper > .title {
    font-size: 1.2rem;
  }
</style>