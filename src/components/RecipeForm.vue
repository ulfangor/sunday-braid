<script setup>
import { ref } from 'vue'
import { useRecipesStore } from '@/stores/recipes'

const recipeStore = useRecipesStore()
const name = ref('')
const image = ref('')
const ingredients = ref('')
const notes = ref('')
const instructions = ref('')

function onAddRecipe() {
  recipeStore.addRecipe(name.value, image.value, ingredients.value, notes.value, instructions.value)
  name.value = ''
  image.value = ''
  ingredients.value = ''
  notes.value = ''
  instructions.value = ''
}
</script>

<template>
  <form @submit.prevent="onAddRecipe">
    <input v-model="name" placeholder="Recipe Name" />
    <input v-model="image" placeholder="Image URL" />
    <textarea v-model="ingredients" placeholder="Ingredients"></textarea>
    <textarea v-model="notes" placeholder="Notes"></textarea>
    <textarea v-model="instructions" placeholder="Instructions"></textarea>
    <button type="submit">Add Recipe</button>
  </form>
</template>
