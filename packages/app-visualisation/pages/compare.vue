<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-5">
      <div>
        <SudokuAfficherGrille
          :grid="sudoku.grid"
          @update:grid="sudoku.grid = $event"
          :possibilites="sudoku.possibilitesGrid"
        />
      </div>
      <ClientOnly>
        <div>
          <MusiqueSheet :grilleAccords="sudoku.grid" />
        </div>
      </ClientOnly>
    </div>
    <StyledBouton @click="propager">Propager</StyledBouton>
  </div>
</template>

<script setup lang="ts">
const { sudoku, propager } = useSudokuGrid()
</script>

<style scoped></style>
