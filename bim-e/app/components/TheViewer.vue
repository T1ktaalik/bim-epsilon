<template>
<div>
    <div ref="viewerElement">
        <canvas ref="viewerCanvas" id="viewerCanvas"></canvas>
        <canvas ref="viewerNavCube"></canvas>
        <div ref="viewerExplorer"></div>
        <div ref="viewerInspector"></div>
        <div ref="viewerToolbar"></div>
    </div>
</div>
</template>
<script setup>
/* import {  ExtendedBIMViewer  } from '~/lib/bim-viewer-extension' */
/* import { BIMViewer, LocaleService, Server, messages } from 'xeokit-bim-viewer' */

const { $ExtendedBIMViewer, $Server, $LocaleService, $LocaleMessages} = useNuxtApp()
const server = ref()
const bimViewer = ref()
const viewerCanvas = ref()
const viewerExplorer = ref()
const viewerInspector = ref()
const viewerNavCube = ref()
const viewerElement = ref()
const viewerToolbar = ref()


onMounted(() => {
    function loadViewer() {       
    server.value = new $Server({
        dataDir: '.'
    })

    console.log(server.value.getGeometry)
/*     console.log(ExtendedBIMViewer) */
  /*    bimViewer.value = new $ExtendedBIMViewer(server.value, {
        localeService: new $LocaleService({
            messages: $LocaleMessages,
            locale: 'en'
        }),
        canvasElement:  viewerCanvas.value,
        explorerElement: viewerExplorer.value,
        inspectorElement: viewerInspector.value,
        navCubeCanvasElement: viewerNavCube.value,
        busyModelBackdropElement: viewerElement.value,
        toolbarElement: viewerToolbar.value,
        enableEditModels: false
    })
 */
    console.log(bimViewer.value) 
   /*  bimViewer.value.loadProject('Duplex', console.log('wow!')) */
    }
    loadViewer()
})
</script>