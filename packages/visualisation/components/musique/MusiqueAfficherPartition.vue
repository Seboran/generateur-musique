<template>
  <table>
    <MusiqueAfficherAccord v-for="accord in grilleAccords" :accord="accord" />
  </table>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'effondrement'
defineProps<{
  grilleAccords: SudokuGrid
}>()
</script>

<style scoped></style>
