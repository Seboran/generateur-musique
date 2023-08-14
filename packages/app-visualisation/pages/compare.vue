<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-5">
      <SudokuAfficherGrille
        :grid="sudoku.grid"
        @update:grid="sudoku.grid = $event"
        :possibilites="sudoku.possibilitesGrid"
      />
      <ClientOnly>
        <MusiqueSheet :grilleAccords="sudoku.grid" />
      </ClientOnly>
    </div>
    <StyledBouton @click="propager">Propager</StyledBouton>
  </div>
</template>

<script setup lang="ts">
const { sudoku, propager } = useSudokuGrid()
</script>

<style scoped></style>
