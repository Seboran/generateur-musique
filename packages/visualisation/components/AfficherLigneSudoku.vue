<template>
  <tr>
    <AfficherCelluleSudoku v-for="cellule in ligne" :cellule="cellule" />
  </tr>
</template>

<script setup lang="ts">
import { SudokuCellule } from 'effondrement'

defineProps<{
  ligne: SudokuCellule[]
}>()
</script>

<style scoped></style>
