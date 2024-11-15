<script lang="ts">
export default {
  name: 'SelectionPanel',
  data() {
    return {
      dropdownVisible: false,
      options: ['Array', 'String', 'Map', 'Dynamic Programming', 'Matemática', 'Ordernação', 'Guloso', 'DFS', 'Busca Binária', 'Arvóre', 'BFS'],
      selectedOptions: [] as string[],
    };
  },
  emits: ['update:modelValue'],
  methods: {
    toggleDropdown(event: Event) {
      event.stopPropagation();
      this.dropdownVisible = !this.dropdownVisible;
    },
    toggleOption(option: string) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      } else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
      }
      this.dropdownVisible = false;
      this.updateValue(this.selectedOptions.join(','));
    },
    handleClickOutside(event: Event) {
      const dropdown = this.$el.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownVisible = false;
      }
    },
    updateValue(value: string) {
      this.$emit('update:modelValue', value);
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }
};
</script>

<template>
  <div>
    <div class="btn" @click="toggleDropdown">
      <span >Adicionar</span>
      <ion-icon name="add-outline"></ion-icon>
    </div>
    
    <div v-if="dropdownVisible" class="dropdown">
      <ul>
        <li v-for="(option, index) in options" :key="index" @click="toggleOption(option)" :class="{'selected': selectedOptions.includes(option)}">
          {{ option }}
        </li>
      </ul>
    </div>

    <div class="selected-options">
      <div v-for="(option, index) in selectedOptions" :key="index">
        <p>{{ option }}</p>
        <ion-icon name="close-outline" @click="toggleOption(option)"></ion-icon>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn {
  position: relative;
  width: fit-content;
  display: flex;
  gap: .5rem;
  align-items: center;
  padding: .5rem 1rem;
  background-color: var(--blue-800);
  border-radius: 2rem;
  cursor: pointer;
}

.btn > button {
  border: none;
  background: none;
  pointer-events: none
}

.dropdown {
  position: absolute;
  padding: .5rem;
  background-color: var(--blue-800);
  border-radius: .25rem;
  width: 20rem;
  height: max-content;
  z-index: 2;
}

.dropdown > ul {
  width: 20rem;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}


.dropdown li {
  width: max-content;
  padding: .5rem;
  background-color: var(--blue-900);
  border-radius: 2rem;
  border: solid 1px var(--primary);
  cursor: pointer;
}

.dropdown li.selected {
  background-color: var(--primary);
}

.dropdown li:hover {
  opacity: .9;
}

.selected-options {
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: .5rem;
}
.selected-options > div {
  display: flex;
  align-items: center;
  background-color: var(--primary);
  padding: .25rem .5rem .25rem 1rem;
  border-radius: 1rem;
  gap: .3rem;
}
.selected-options >div > ion-icon {
  font-size: 1.2rem;
  cursor: pointer;
  --ionicon-stroke-width: 3rem;
}
</style>
