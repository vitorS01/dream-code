<script lang="ts">
import { computed } from 'vue';
import { useProblemStore } from '../stores/ProblemStore';

export default {
  name: 'ProblemView',
  setup() {
    const problemStore = useProblemStore();
    const result = computed(() => problemStore.result)
    return {result}
  }
}
</script>

<template>
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
</template>

<style scoped>

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