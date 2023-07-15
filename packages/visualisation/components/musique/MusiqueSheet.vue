<template>
  <div style="width: 500px; height: 500px" id="sheet"></div>
</template>

<script setup lang="ts">
import { SudokuCellule, SudokuGrid } from 'effondrement'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import { createPartition } from './musiqueUtils'

let osmd: any

// Mapping numbers to notes
const numberToNote = (number: SudokuCellule) => {
  if (!number) {
    return 'C'
  }
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  return notes[(number - 1) % 7] + Math.floor((number - 1) / 7)
}

const props = defineProps<{
  grilleAccords: SudokuGrid
}>()

watchEffect(
  async () => {
    osmd = new OpenSheetMusicDisplay('sheet')

    if (!osmd) return

    // Convert the chord to music notes and format them for OSMD
    const notes = props.grilleAccords[0]!.map(numberToNote)
    const xmlString = createPartition(notes)

    await osmd.load(xmlString)
    osmd.render()
  },
  {
    flush: 'post',
  }
)
</script>

<style scoped>
#sheet {
  /* Adjust the size of your music sheet here */
  width: 100%;
  height: 100%;
}
</style>
