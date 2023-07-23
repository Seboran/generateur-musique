<template>
  <div>
    <div>
      <SudokuAfficherGrille
        v-model:grid="sudoku.grid"
        :possibilites="sudoku.possibilitesGrid"
      />
    </div>
    <BoutonPropagation @click="propager" />
  </div>
</template>

<script setup lang="ts">
const { sudoku, propager } = useSudokuGrid()
</script>
