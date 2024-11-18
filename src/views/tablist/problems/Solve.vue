<script lang="ts">
import { ref } from 'vue';
import DCSelect from '../../../components/input/DCSelect.vue';
import Modal from '../../../components/Modal.vue';

export default {
  name: 'Solve',
  components: {DCSelect, Modal},
  data() {
    
    return {
      content: 'test',
    }
  },
  setup() {
    const programmingLanguage = ref("");
    const showAns = ref(true);

    return {programmingLanguage, showAns}
  }
}
</script>

<template>
  <Modal v-model="showAns">
    HELLOO
  </Modal>
  <div class="header">
    <h2>Código de resolução</h2>
    <DCSelect v-model="programmingLanguage" id="language" name="language" :options="[{label: 'C++', value: 'CPP'}, {label: 'Python', value: 'PY'}, {label: 'JavaScript', value: 'JS'}]" selected="CPP"/>
  </div>
  <textarea v-model="content" id="editor"></textarea>
  <div class="btns">
    <button>Submeter</button>
    <button>Gerar resposta</button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

pre {
  border: none;
  height: 20rem;
}

pre:focus,
code:focus {
  outline: none;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.btns > button {
  width: max-content;
  padding: .5rem 1rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  transition: opacity .2s ease-in;
  margin-top: .8rem;
}
.btns > button:nth-child(1) {
  background-color: var(--primary);
}
.btns > button:nth-child(2) {
  background:none;
  border: solid 2px var(--primary);
}

.btns > button:hover {
  opacity: .7;
}
</style>