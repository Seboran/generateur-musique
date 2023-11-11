<template>
  <MusiqueSheetTemplate>
    <div style="width: 100%; height: 100%" id="sheet"></div>
  </MusiqueSheetTemplate>
  <StyledBouton class="uppercase" @click="play">jouer</StyledBouton>
</template>

<script setup lang="ts">
import { SudokuGrid } from 'lib-effondrement'

const props = defineProps<{
  grilleAccords: SudokuGrid
}>()

const { notes } = useOsmd('sheet', props.grilleAccords)
async function play() {
  for (const note of notes.value) {
    new Audio(`./assets/sounds/Eb5.mp3`).play()
    new Audio(`./assets/sounds/C4.mp3`).play()
    new Audio(`./assets/sounds/G4.mp3`).play()
    await new Promise((resolve) => setTimeout(resolve, 2000))
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
