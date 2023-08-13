<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-5">
      <SudokuAfficherGrille
        v-model:grid="sudoku.grid"
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
