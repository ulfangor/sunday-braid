<script setup>
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="recipe-card">
    <h2>{{ props.recipe.name }}</h2>
    <img :src="props.recipe.image" alt="Recipe Image" />
    <p><strong>Ingredients:</strong> {{ props.recipe.ingredients }}</p>
    <p><strong>Notes:</strong> {{ props.recipe.notes }}</p>
    <p><strong>Instructions:</strong> {{ props.recipe.instructions }}</p>
  </div>
</template>
