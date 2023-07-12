<template>
  <div>{{ grid }}</div>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'effondrement'

defineProps<{
  grid: SudokuGrid
}>()
</script>

<style scoped></style>
