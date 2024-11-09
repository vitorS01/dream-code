<script lang="ts">
import DCSelect from '../../components/input/DCSelect.vue';
import Selection from '../../components/Selection.vue';

  export default {
    name: 'Generate',
    components: {Selection, DCSelect},
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
        <textarea name="context" id="context" placeholder="Descreva uma história para o problema..." maxlength="300"></textarea>

        <label for="selection">Tópicos</label>
        <Selection id="selection"/>
        
        <label for="difficulty">Dificuldade</label>
        <DCSelect id="difficulty" name="difficulty" :options="[{label: 'Fácil', value: '0'}, {label: 'Médio', value: '1'}, {label: 'Difícil', value: '2'}]" selected="0"></DCSelect>

        <label for="language">Idioma</label>
        <DCSelect id="language" name="language" :options="[{label: 'Português', value: 'pt'}, {label: 'Inglês', value: 'En'}]" selected="pt"></DCSelect>

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

  .tabs > ul {
    display: flex;
    gap: 2rem;
  }
  .tabs > ul > li > a {
    padding: .5rem 1rem;
    border-radius: 2rem;
    opacity: .8;
    transition: opacity .2s ease-in;
  }
  .tabs > ul > li > a:hover {
    opacity: 1;
  }
  .tabs > ul > li > .router-link-exact-active {
    opacity: 1;
    background-color: var(--primary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  form > label {
    font-weight: bold;
    margin-top: .5rem;
  }

  form > textarea {
    min-height: 6rem;
    border: none;
    outline: none;
    padding: .3rem;
    resize: none;
    background-color: var(--blue-900);
    border-radius: .25rem;
  }

  form > button {
    width: max-content;
    padding: .5rem 1rem;
    border: none;
    border-radius: .25rem;
    background-color: var(--primary);
    cursor: pointer;
    transition: opacity .2s ease-in;
    margin-top: .8rem;
  }
  form > button:hover {
    opacity: .8;
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


  .visualize-wrapper {
    width: 60%;
    border-radius: .5rem 2rem 2rem .5rem;
    padding: 2rem;
  }
  .visualize-wrapper > .title {
    font-size: 1.2rem;
  }
</style>