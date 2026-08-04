<script setup>
import RecipeCard from './components/RecipeCard.vue'
import RecipeForm from './components/RecipeForm.vue'
import { useRecipesStore } from '@/stores/recipes'
const recipeStore = useRecipesStore()
</script>

<template>
  <h1>New Recipe</h1>
  <RecipeForm />
  <pre>{{ recipeStore.recipes }}</pre>

  <h2>Recipes</h2>
  <div class="recipe-list">
    <RecipeCard v-for="recipe in recipeStore.recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}
</style>
