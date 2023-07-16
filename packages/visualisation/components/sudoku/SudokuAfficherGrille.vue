<template>
  <table>
    <SudokuAfficherLigne
      v-for="(ligne, index) in grid"
      :key="index"
      :model-value="ligne"
    />
  </table>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'effondrement'

const grid = defineModel<SudokuGrid>()
</script>

<style scoped></style>
