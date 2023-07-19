<template>
  <div class="h-90">
    <table>
      <SudokuAfficherLigne
        v-for="(ligne, index) in grid"
        :key="index"
        :model-value="ligne"
        @update:model-value="($event) => (grid[index] = $event)"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'effondrement'

const grid = defineModel<SudokuGrid>({ required: true })
</script>

<style scoped></style>
