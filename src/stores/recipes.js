import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  function addRecipe(name, image, ingredients, notes, instructions) {
    const newRecipe = {
      id: crypto.randomUUID(),
      name,
      image,
      ingredients,
      notes,
      instructions,
    }
    recipes.value.push(newRecipe)
  }

  return { recipes, addRecipe }
})
