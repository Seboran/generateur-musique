<template>
  <div class="h-90">
    <table>
      <SudokuAfficherLigne v-for="(ligne, index) in grid" :key="index" :model-value="ligne"
        @update:model-value="($event) => (grid[index] = $event)" :possibilites="possibilites[index]" />
    </table>
  </div>
</template>

<script setup lang="ts">
import { SudokuGrid, SudokuPossibilitesCellule } from 'lib-effondrement'

const grid = defineModel<SudokuGrid>('grid', { required: true })
defineProps<{
  possibilites: SudokuPossibilitesCellule[][]
}>()
</script>

<style scoped></style>
