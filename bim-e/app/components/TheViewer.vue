<template>
<div>
    <div ref="viewerElement">
        <canvas ref="viewerCanvas"></canvas>
        <canvas ref="viewerNavCube"></canvas>
        <div ref="viewerExplorer"></div>
        <div ref="viewerInspector"></div>
        <div ref="viewerToolbar"></div>
    </div>
</div>
</template>
<script setup>
const { $BIMViewer, $Server, $LocaleService, $LocaleMessages} = useNuxtApp()
const server = ref()
const bimViewer = ref()
const viewerCanvas = ref()
const viewerExplorer = ref()
const viewerInspector = ref()
const viewerNavCube = ref()
const viewerElement = ref()
const viewerToolbar = ref()






onMounted(() => {
    server.value = new $Server()
    bimViewer.value = new $BIMViewer(server.value)
})
</script>