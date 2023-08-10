<template>
  <MusiqueSheetTemplate>
    <div style="width: 100%; height: 100%" id="sheet"></div>
  </MusiqueSheetTemplate>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'lib-effondrement'

const props = defineProps<{
  grilleAccords: SudokuGrid
}>()

useOsmd('sheet', props.grilleAccords)
</script>

<style scoped>
#sheet {
  /* Adjust the size of your music sheet here */
  width: 100%;
  height: 100%;
}
</style>
