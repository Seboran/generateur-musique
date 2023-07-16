<template>
  <tr>
    <SudokuAfficherCellule
      v-for="(cellule, index) in ligne"
      :key="index"
      :model-value="cellule"
    />
  </tr>
</template>

<script setup lang="ts">
import { SudokuCellule } from 'effondrement'

const ligne = defineModel<SudokuCellule[]>()
</script>

<style scoped></style>
