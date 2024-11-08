<script>
export default {
  name: 'Selection',
  data() {
    return {
      // Dropdown visibility state
      dropdownVisible: false,
      // Available options for selection
      options: ['Option 1', 'Option 2', 'Option 3'],
      // List of selected options
      selectedOptions: [],
    };
  },
  methods: {
    // Toggle dropdown visibility
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // Add selected option to selectedOptions
    selectOption(option) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      }
      this.dropdownVisible = false; // Close dropdown after selection
    },
  },
};
</script>

<template>
  <div>
    <!-- Button to toggle dropdown visibility -->
    <button @click="toggleDropdown">Add</button>
    
    <!-- Dropdown menu (only visible when dropdownVisible is true) -->
    <div v-if="dropdownVisible" class="dropdown">
      <ul>
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>

    <!-- Selected options list -->
    <div class="selected-options">
      <p v-for="(option, index) in selectedOptions" :key="index">{{ option }}</p>
    </div>
  </div>
</template>


<style scoped>
/* Style for the dropdown */
.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.dropdown ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

/* Style for selected options */
.selected-options p {
  margin: 5px 0;
  padding: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
}
</style>
