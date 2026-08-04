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
  <RecipeCard v-for="recipe in recipeStore.recipes" :key="recipe.id" :recipe="recipe" />
</template>

<style scoped></style>
