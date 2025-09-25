import { BIMViewer } from '@xeokit/xeokit-bim-viewer'

class ExtendedBIMViewer {
    bimViewer: BIMViewer;
   
    constructor(config: any) {
        this.bimViewer = new BIMViewer(config); // Pass config to BIMViewer
    }

   

    // Private methods (internal customization)
    _customizeViewer() {
        return this.bimViewer._customizeViewer();
    }

    _initCanvasContextMenus() {
        return this.bimViewer._initCanvasContextMenus();
    }

    _initConfigs() {
        return this.bimViewer._initConfigs();
    }

    // Configuration methods
    setConfigs(viewerConfigs: any) {
        return this.bimViewer.setConfigs(viewerConfigs); // Fixed typo: setConvigs -> setConfigs
    }

    setConfig(name: any, value: any) {
        return this.bimViewer.setConfig(name, value);
    }

    getConfig(name: any) {
        return this.bimViewer.getConfig(name); // Added parameter
    }

    // Project methods
    getProjectsInfo(done: (projects: any) => void, error: (err: any) => void) {
        return this.bimViewer.getProjectsInfo(done, error);
    }

    getProjectInfo(projectId: any, done: (info: any) => void, error: (err: any) => void) {
        return this.bimViewer.getProjectInfo(projectId, done, error); // Added parameters
    }

    getObjectInfo(objectId: any, done: (info: any) => void, error: (err: any) => void) {
        return this.bimViewer.getObjectInfo(objectId, done, error); // Fixed typo: getObjectIbfo
    }
    
    loadProject(projectId: any, done: () => void, error: (err: any) => void) {
        return this.bimViewer.loadProject(projectId, done, error);
    }

    unloadProject() {
        return this.bimViewer.unloadProject();
    }

    getLoadedProject() {
        return this.bimViewer.getLoadedProject();
    }

    // Model methods
    getModelIds() { // Fixed typo: getModelids -> getModelIds
        return this.bimViewer.getModelIds();
    }

    loadModel(modelId: any, done: () => void, error: (err: any) => void) {
        return this.bimViewer.loadModel(modelId, done, error);
    }
   
    loadAllModels(done: () => void = () => {}) {
        return this.bimViewer.loadAllModels(done);
    }

    getLoadedModelIds() {
        return this.bimViewer.getLoadedModelIds();
    }

    isModelLoaded(modelId: any) {
        return this.bimViewer.isModelLoaded(modelId);
    }

    unloadModel(modelId: any) {
        return this.bimViewer.unloadModel(modelId);
    }

    unloadAllModels() {
        return this.bimViewer.unloadAllModels();
    }

    editModel(modelId: any) {
        return this.bimViewer.editModel(modelId);
    }

    deleteModel(modelId: any) {
        return this.bimViewer.deleteModel(modelId);
    }

    addModel() {
        return this.bimViewer.addModel();
    }

    // View methods
    setBackgroundColor(rgbColor: any) {
        return this.bimViewer.setBackgroundColor(rgbColor);
    }

    setViewerState(viewerState: any, done: () => void = () => {}) {
        return this.bimViewer.setViewerState(viewerState, done);
    }

    _parseSelectedStorey(viewerState: any, done: () => void) {
        return this.bimViewer._parseSelectedStorey(viewerState, done);
    }

    _parseThreeDModel(viewerState: any, done: () => void) {
        return this.bimViewer._parseThreeDModel(viewerState, done);
    }

    // Object visibility and selection
    showObjectInExplorer(objectId: any) {
        return this.bimViewer.showObjectInExplorer(objectId);
    }

    unShowObjectInExplorer(objectId: any) {
        return this.bimViewer.unShowObjectInExplorer(objectId);
    }

    setObjectsVisible(objectIds: any, visible: any) {
        return this.bimViewer.setObjectsVisible(objectIds, visible);
    }
    
    setAllObjectsVisible(visible: any) {
        return this.bimViewer.setAllObjectsVisible(visible);
    }

    setObjectsXRayed(objectIds: any, xRayed: any) {
        return this.bimViewer.setObjectsXRayed(objectIds, xRayed);
    }

    setAllObjectsXRayed(xRayed: any) {
        return this.bimViewer.setAllObjectsXRayed(xRayed);
    }

    setObjectsSelected(objectIds: any, selected: any) {
        return this.bimViewer.setObjectsSelected(objectIds, selected);
    }

    setAllObjectsSelected(selected: any) {
        return this.bimViewer.setAllObjectsSelected(selected);
    }

    _withObjectsInSubtree(objectIds: any, callback: () => void) {
        return this.bimViewer._withObjectsInSubtree(objectIds, callback);
    }

    // Navigation methods
    flyToObject(objectId: any, done: () => void) {
        return this.bimViewer.flyToObject(objectId, done);
    }

    viewFitObjects(objectIds: any, done: () => void) {
        return this.bimViewer.viewFitObjects(objectIds, done);
    }

    viewFitAll(done: () => void) {
        return this.bimViewer.viewFitAll(done);
    }

    jumpToObject(objectId: any) {
        return this.bimViewer.jumpToObject(objectId);
    }

    setCamera(params: any) {
        return this.bimViewer.setCamera(params);
    }

    viewFitModels(modelIds: any, done: () => void) {
        return this.bimViewer.viewFitModels(modelIds, done);
    }

    // Vue-reactive methods (to be customized)
    openTab(tabId: any) {
        console.log('The method shall be changed basing on reactive features');
        // You'll implement Vue reactivity here
    }

    _openTab(tabId: any) {
        console.log('The method shall be changed basing on reactive features');
        // You'll implement Vue reactivity here
    }

    getOpenTab() {
        console.log('The method shall be changed basing on reactive features');
        // You'll implement Vue reactivity here
        return null;
    }

    // 3D and view controls
    set3DEnabled(enabled: any, done: () => void) {
        return this.bimViewer.set3DEnabled(enabled, done);
    }

    get3DEnabled() {
        return this.bimViewer.get3DEnabled();
    }

    setSpaceShown(shown: any) {
        return this.bimViewer.setSpaceShown(shown);
    }

    getSpaceShown() {
        return this.bimViewer.getSpaceShown();
    }

    setOrthoEnabled(enabled: any, done: () => void) {
        return this.bimViewer.setOrthoEnabled(enabled, done);
    }

    getOrthoEnabled() {
        return this.bimViewer.getOrthoEnabled();
    }

    selectStorey(storeyObjectId: any, done: () => void) {
        return this.bimViewer.selectStorey(storeyObjectId, done);
    }

    // BCF viewpoints
    saveBCFViewpoint(options: any) {
        return this.bimViewer.saveBCFViewpoint(options);
    }

    loadBCFViewpoint(bcfViewpoint: any, options: any) {
        return this.bimViewer.loadBCFViewpoint(bcfViewpoint, options);
    }

    resetView() {
        return this.bimViewer.resetView();
    }

    // Controls and keyboard
    setControlsEnabled(enabled: any) {
        return this.bimViewer.setControlsEnabled(enabled);
    }

    setKeyboardEnabled(enabled: any) {
        return this.bimViewer.setKeyboardEnabled(enabled);
    }

    getKeyboardEnabled() {
        return this.bimViewer.getKeyboardEnabled();
    }

    // Sections
    clearSections() {
        this.bimViewer.clearSections();
    }

    disableSections() {
        this.bimViewer.disableSections();
    }

    enableSections() {
        this.bimViewer.enableSections();
    } 

    flipSections() {
        this.bimViewer.flipSections();
    }

    hideSectionEditControl() {
        this.bimViewer.hideSectionEditControl();
    }

    getNumSections() {
        return this.bimViewer.getNumSections();
    }

    // Measurements
    getEnableMeasurements() {
        return this.bimViewer.getEnableMeasurements();
    }

    clearMeasurements() {
        this.bimViewer.clearMeasurements();
    }

    getNumMeasurements() {
        return this.bimViewer.getNumMeasurements();
    }

    setMeasurementsAxisVisible(axisVisible: any) {
        this.bimViewer.setMeasurementsAxisVisible(axisVisible);
    }

    getMeasurementsAxisVisible() {
        return this.bimViewer.getMeasurementsAxisVisible();
    }

    setMeasurementsSnappingEnabled(snappingEnabled: any) { // Fixed typo: setMeassurementsSnappingEnabled
        this.bimViewer.setMeasurementsSnappingEnabled(snappingEnabled);
    }

    getMeasurementsSnappingEnabled() { // Fixed typo: getMeassurementsSnappingEnabled
        return this.bimViewer.getMeasurementsSnappingEnabled();
    }

    // Cleanup
    destroy() {
        this.bimViewer.destroy();
    }

    // Add your Vue-specific methods here
    // Example Vue integration methods:
    bindVueReactiveProperties(vueInstance: any) {
        // Bind Vue reactive properties to viewer events
    }

    setupVueEventListeners(vueInstance: any) {
        // Setup two-way binding between Vue and BIMViewer
    }
}

export { ExtendedBIMViewer }