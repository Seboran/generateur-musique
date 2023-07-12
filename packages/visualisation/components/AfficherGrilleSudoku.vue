<template>
  <table>
    <AfficherLigneSudoku v-for="ligne in grid" :ligne="ligne" />
  </table>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'effondrement'

defineProps<{
  grid: SudokuGrid
}>()
</script>

<style scoped></style>
