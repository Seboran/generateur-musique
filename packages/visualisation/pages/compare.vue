<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-5">
      <SudokuAfficherGrille v-model="sudoku.grid" />
      <ClientOnly>
        <MusiqueSheet :grilleAccords="sudoku.grid" />
      </ClientOnly>
    </div>
    <BoutonPropagation @click="propager" />
  </div>
</template>

<script setup lang="ts">
import { useSudokuGrid } from './useSudokuGrid'
const { sudoku, propager } = useSudokuGrid()
</script>

<style scoped></style>
