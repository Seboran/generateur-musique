// plugins/opensheetmusicdisplay.ts
import { defineNuxtPlugin } from '#app'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

export default defineNuxtPlugin((nuxtApp) => {
  // q: comment importer opensheetmusicdisplay en client side en
  return {
    provide: {
      musiqueSheet: OpenSheetMusicDisplay
    }
  }
})
