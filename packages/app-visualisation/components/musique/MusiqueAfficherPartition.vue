<template>
  <table>
    <MusiqueAfficherAccord v-for="accord in grilleAccords" :accord="accord" />
  </table>
</template>

<script setup lang="ts">
import { type SudokuGrid } from 'lib-effondrement'
defineProps<{
  grilleAccords: SudokuGrid
}>()
</script>

<style scoped></style>
