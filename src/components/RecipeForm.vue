<script setup>
import { ref } from 'vue'
import { useRecipesStore } from '@/stores/recipes'

const recipeStore = useRecipesStore()
const name = ref('')
const image = ref('')
const ingredients = ref([])
const notes = ref('')
const instructions = ref('')

function onAddIngredient() {
  ingredients.value.push({ id: crypto.randomUUID(), name: '', quantity: '', unit: '' })
}

function onRemoveIngredient(id) {
  ingredients.value = ingredients.value.filter((ingredient) => ingredient.id !== id)
}

function onAddRecipe() {
  recipeStore.addRecipe(name.value, image.value, ingredients.value, notes.value, instructions.value)
  name.value = ''
  image.value = ''
  ingredients.value = []
  notes.value = ''
  instructions.value = ''
}
</script>

<template>
  <form class="recipe-form" @submit.prevent="onAddRecipe">
    <input class="recipe-form__input" v-model="name" placeholder="Recipe Name" />
    <input class="recipe-form__input" v-model="image" placeholder="Image URL" />
    <div v-for="ingredient in ingredients" :key="ingredient.id">
      <input v-model="ingredient.name" placeholder="Name" />
      <input v-model="ingredient.quantity" placeholder="Quantity" />
      <input v-model="ingredient.unit" placeholder="Unit" />
      <button type="button" @click="onRemoveIngredient(ingredient.id)">✕</button>
    </div>
    <button type="button" @click="onAddIngredient">Add Ingredient</button>
    <textarea class="recipe-form__textarea" v-model="notes" placeholder="Notes"></textarea>
    <textarea
      class="recipe-form__textarea"
      v-model="instructions"
      placeholder="Instructions"
    ></textarea>
    <button class="recipe-form__submit" type="submit">Add Recipe</button>
  </form>
</template>

<style scoped>
.recipe-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 420px;
  padding: 1.25rem;
  background: #fffdf9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(59, 47, 42, 0.12);
}

.recipe-form__input,
.recipe-form__textarea {
  font: inherit;
  padding: 0.55rem 0.7rem;
  border: 1px solid #e3d6c2;
  border-radius: 8px;
  background: #fffefb;
  color: #3b2f2a;
}

.recipe-form__input:focus,
.recipe-form__textarea:focus {
  outline: none;
  border-color: #b5651d;
}

.recipe-form__textarea {
  min-height: 4.5rem;
  resize: vertical;
}

.recipe-form__submit {
  align-self: flex-start;
  padding: 0.55rem 1.2rem;
  border: none;
  border-radius: 8px;
  background: #b5651d;
  color: #fffdf9;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.recipe-form__submit:hover {
  background: #9c541a;
}
</style>
