<template>
  <td>{{ note }}</td>
</template>

<script setup lang="ts">
import { type SudokuCellule } from 'lib-effondrement'

defineProps<{
  note: SudokuCellule
}>()
</script>

<style scoped></style>
