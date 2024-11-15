<script lang="ts">
import DCSelect from '../../components/input/DCSelect.vue';
import SelectionPanel from '../../components/input/SelectionPanel.vue';
import { useGenerateModel } from '../../composables/useGenerateModel';
  
  export default {
    name: 'Generate',
    components: {SelectionPanel, DCSelect},
    setup() {
      const { formData, loading, error, result, submitForm } = useGenerateModel();

      const handleSubmit = async (ev: Event) => {
        ev.preventDefault();
        await submitForm()
      }

      return {
        formData,
        loading,
        error,
        result,
        handleSubmit
      }
    }
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
      <form @submit="handleSubmit">
        <label for="context">Contexto do problema</label>
        <textarea v-model="formData.context" name="context" id="context" placeholder="Descreva uma história para o problema..." maxlength="300"></textarea>

        <label for="selection">Tópicos</label>
        <SelectionPanel id="selection" v-model="formData.topics"/>
        
        <label for="difficulty">Dificuldade</label>
        <DCSelect v-model="formData.level" id="difficulty" name="difficulty" :options="[{label: 'Fácil', value: 'Easy'}, {label: 'Médio', value: 'Medium'}, {label: 'Difícil', value: 'Hard'}, {label: 'Insano', value:'Insane'}]" selected="Easy"></DCSelect>

        <label for="language">Idioma</label>
        <DCSelect v-model="formData.language" id="language" name="language" :options="[{label: 'Português', value: 'Portuguese'}, {label: 'Inglês', value: 'English'}]" selected="Portuguese"></DCSelect>

        <button type="submit" :disabled="loading">Gerar problema</button>
      </form>
    </div>
    <div class="visualize-wrapper">
      <div v-if="!result">
        <h1 class="title">Visualizar</h1>
        <p>O enunciado do problema aprecerá aqui...</p>
      </div>
      <div v-else>
        <h1 class="title">{{ result.name }}</h1>
        <p class="statement"> {{ result.statement }}</p>
        <h2>Entrada</h2>
        <p class="input"> {{ result.input }}</p>
        <h2>Saída</h2>
        <p class="output"> {{ result.output }}</p>

        <table class="sample-testcase">
          <thead>
            <tr>
              <th>Exemplo de entrada</th>
              <th>Exemplo de saída</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><pre>{{ result.sample_input }}</pre></td>
              <td><pre>{{ result.sample_output }}</pre></td>
            </tr>
          </tbody>
        </table>
      </div>
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
    display: flex;
    width: 60%;
    height: inherit;
    border-radius: .5rem 2rem 2rem .5rem;
    padding: 2rem 2rem;
    overflow-y: auto;
  }
  .visualize-wrapper > .title {
    font-size: 1.2rem;
  }

  .visualize-wrapper > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  p {
    color: #cfcfcf;
  }

  .sample-testcase {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: var(--blue-900);
}

.sample-testcase th,
.sample-testcase td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid var(--blue-600);
}

.sample-testcase th {
  background-color: var(--primary);
  color: #fff;
}

.sample-testcase td pre {
  margin: 0;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word; 
}

</style>