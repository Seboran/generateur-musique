import { type SudokuGrid } from 'lib-effondrement'
import { createPartition } from './musiqueUtils'
import { numberToNote } from './numberToNote'

export function useOsmd(divId: string, grilleAccords: SudokuGrid) {
  const { $osmd } = useNuxtApp()
  let osmd: ReturnType<typeof $osmd> | undefined
  const notes = ref<string[]>([])
  watchEffect(
    async () => {
      if (!osmd) {
        osmd = $osmd(divId)
      }

      // Convert the chord to music notes and format them for OSMD
      notes.value = grilleAccords.flatMap((grille) => grille)!.map(numberToNote)

      const xmlString = createPartition(notes.value)

      await osmd.load(xmlString)
      osmd.render()
    },
    {
      flush: 'post',
    },
  )
  onUnmounted(() => {
    osmd?.clear()
  })

  return {
    notes,
  }
}
