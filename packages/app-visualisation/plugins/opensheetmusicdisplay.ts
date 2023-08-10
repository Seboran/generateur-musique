import * as osmd from 'opensheetmusicdisplay'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      osmd: (identifier: string) => new osmd.OpenSheetMusicDisplay(identifier),
    },
  }
})
