<template>
  <tr
    class="border-blue-300 [&:nth-child(3n+0)]:border-b-4 [&:nth-child(3n+1)]:border-t-4"
  >
    <SudokuAfficherCellule
      v-for="(cellule, index) in ligne"
      :key="index"
      :model-value="cellule"
      @update:model-value="($event) => (ligne[index] = $event)"
      :possibilites="possibilites[index]"
    />
  </tr>
</template>

<script setup lang="ts">
import { SudokuCellule, SudokuPossibilitesCellule } from 'effondrement'

const ligne = defineModel<SudokuCellule[]>({ required: true })
defineProps<{
  possibilites: SudokuPossibilitesCellule[]
}>()
</script>

<style scoped></style>
