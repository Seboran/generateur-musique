<template>
  <div>
    <div>
      <SudokuAfficherGrille
        v-model:grid="sudoku.grid"
        :possibilites="sudoku.possibilitesGrid"
      />
      <SudokuBoutonExporterGrille :grid="sudoku.grid" />
    </div>
    <StyledBouton @click="propager"> Propager </StyledBouton>
  </div>
</template>

<script setup lang="ts">
const { sudoku, propager } = useSudokuGrid()
</script>
