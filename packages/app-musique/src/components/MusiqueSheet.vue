<template>
  <MusiqueSheetTemplate>
    <div style="width: 100% height: 100vh" id="sheet"></div>
  </MusiqueSheetTemplate>
  <StyledBouton class="uppercase" @click="play">jouer</StyledBouton>
</template>

<script setup lang="ts">
import { useOsmd } from '@/composables/useOsmd'
import { type SudokuGrid } from 'lib-effondrement'
import MusiqueSheetTemplate from './MusiqueSheetTemplate.vue'
import { StyledBouton } from 'lib-style'

const props = defineProps<{
  grilleAccords: SudokuGrid
}>()

const { notes } = useOsmd('sheet', props.grilleAccords)
async function play() {
  for (const note of notes.value) {
    new Audio(`./assets/sounds/${note}.mp3`).play()
    await new Promise((resolve) => setTimeout(resolve, 400))
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
