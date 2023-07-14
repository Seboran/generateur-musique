<template>
  <td>{{ cellule }}</td>
</template>

<script setup lang="ts">
import { SudokuCellule } from 'effondrement'

defineProps<{
  cellule: SudokuCellule
}>()
</script>

<style scoped></style>
