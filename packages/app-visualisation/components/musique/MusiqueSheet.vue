<template>
  <MusiqueSheetTemplate>
    <div style="width: 100%; height: 100%" id="sheet"></div>
  </MusiqueSheetTemplate>
  <StyledBouton class="uppercase" @click="play">jouer</StyledBouton>
</template>

<script setup lang="ts">
import { type SudokuGrid } from 'lib-effondrement'

const props = defineProps<{
  grilleAccords: SudokuGrid
}>()

const { notes } = useOsmd('sheet', props.grilleAccords)
async function play() {
  for (const note of notes.value) {
    new Audio(`./assets/sounds/${note}.mp3`).play()
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
}
</script>

<style scoped>
#sheet {
  /* Adjust the size of your music sheet here */
  width: 100%;
  height: 100%;
}
</style>
