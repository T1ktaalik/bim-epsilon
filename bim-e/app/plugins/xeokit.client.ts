import { BIMViewer, LocaleService, Server, messages } from 'xeokit-bim-viewer'

export default defineNuxtPlugin(()=> {
    return {
    provide: {
        BIMViewer,
        LocaleService,
        Server,
        localrMessages: messages
    }
}
})
