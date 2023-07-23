<template>
  <div>
    <div><SudokuAfficherGrille v-model="sudoku.grid" /></div>
    <BoutonPropagation @click="propager" />
  </div>
</template>

<script setup lang="ts">
const { sudoku, propager } = useSudokuGrid()
</script>
