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
    <img class="recipe-card__image" :src="props.recipe.image" alt="Recipe Image" />
    <div class="recipe-card__body">
      <h2 class="recipe-card__title">{{ props.recipe.name }}</h2>
      <div class="recipe-card__section">
        <span class="recipe-card__label">Ingredients</span>
        <ul class="recipe-card__ingredients">
          <li v-for="ingredient in props.recipe.ingredients" :key="ingredient.id">
            {{ ingredient.quantity }} {{ ingredient.unit }} — {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <p class="recipe-card__section">
        <span class="recipe-card__label">Instructions</span>
        {{ props.recipe.instructions }}
      </p>
      <p class="recipe-card__section" v-if="props.recipe.notes">
        <span class="recipe-card__label">Notes</span>
        {{ props.recipe.notes }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  width: 280px;
  background: #fffdf9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(59, 47, 42, 0.12);
  overflow: hidden;
}

.recipe-card__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #f0e6d6;
}

.recipe-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem;
}

.recipe-card__title {
  margin: 0;
  font-size: 1.15rem;
  color: #b5651d;
}

.recipe-card__section {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #3b2f2a;
}

.recipe-card__label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #b5651d;
  margin-bottom: 0.15rem;
}
</style>
