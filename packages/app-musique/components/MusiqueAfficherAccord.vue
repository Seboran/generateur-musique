<template>
  <tr>
    <MusiqueAfficherNote v-for="note in accord" :note="note" />
  </tr>
</template>

<script setup lang="ts">
import { SudokuCellule } from 'lib-effondrement'

defineProps<{
  accord: SudokuCellule[]
}>()
</script>

<style scoped></style>
