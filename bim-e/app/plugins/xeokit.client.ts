import { ExtendedBIMViewer } from '../lib/bim-viewer-extension'
import { /* BIMViewer, */ LocaleService, Server, messages } from 'xeokit-bim-viewer'

export default defineNuxtPlugin(()=> {
    return {
    provide: {
        ExtendedBIMViewer,
        LocaleService,
        Server,
        localrMessages: messages
    }
}
})
