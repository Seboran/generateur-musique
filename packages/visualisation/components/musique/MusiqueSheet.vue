<template>
  <div style="width: 500px; height: 500px" id="sheet"></div>
</template>

<script setup lang="ts">
import { SudokuCellule, SudokuGrid } from 'effondrement'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

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
    const xmlString = createPartition()

    await osmd.load(xmlString)
    osmd.render()

    function createPartition() {
      return `
  <?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <work>
    <work-title>Titre</work-title>
  </work>
  <part-list>
    <score-part id="P1">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    ${getMesures(notes)}
  </part>
</score-partwise>`
    }
  },
  {
    flush: 'post',
  }
)

function getMesures(notes: string[]) {
  // split notes into measures of 4 notes
  const measures = []
  for (let i = 0; i < notes.length; i += 4) {
    measures.push(notes.slice(i, i + 4))
  }

  console.log(measures)

  return measures
    .map(
      (measure, index) => `<measure number="${index + 1}">
      ${measure
        .map(
          (note) => `
        <note>
          <pitch>
            <step>${note[0]}</step>
            <octave>4</octave>
          </pitch>
          <duration>1</duration>
          <type>quarter</type>
        </note>`
        )
        .join('')}
    </measure>`
    )
    .join('')
}
</script>

<style scoped>
#sheet {
  /* Adjust the size of your music sheet here */
  width: 100%;
  height: 100%;
}
</style>
