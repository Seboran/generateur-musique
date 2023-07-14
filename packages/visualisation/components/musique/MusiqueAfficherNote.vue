<template>
  <td>{{ note }}</td>
</template>

<script setup lang="ts">
import { SudokuCellule } from 'effondrement'

defineProps<{
  note: SudokuCellule
}>()
</script>

<style scoped></style>
