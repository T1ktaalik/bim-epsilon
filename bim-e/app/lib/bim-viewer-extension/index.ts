import { BIMViewer } from '@xeokit/xeokit-bim-viewer'

class ExtendedBIMViewer {
    construtor(config) {
        this.bimViewer = new BIMViewer(config)
    }

    
}

import { ExternalLib } from 'some-external-lib';

/* class MyComposedLib {
  constructor(config) {
    // Create an instance of the original library
    this.externalLib = new ExternalLib(config);

    // Your custom properties
    this.myCustomValue = config.myCustomValue || 'default';
  }

  // Delegate to the external lib if you need to expose its methods
  baseMethod() {
    return this.externalLib.baseMethod();
  }

  // Your custom methods
  myCustomMethod() {
    console.log('My custom method is working with', this.myCustomValue);
    const result = this.externalLib.baseMethod() * 2; // Use the internal instance
    return result;
  }
} */