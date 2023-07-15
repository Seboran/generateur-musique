import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      osmd: (identifier: string) => new OpenSheetMusicDisplay(identifier),
    },
  }
})
