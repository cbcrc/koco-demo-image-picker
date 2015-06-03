# Image Picker

This is a demo component based on the [koco generator](https://github.com/cbcrc/generator-koco) conventions. It has no purpose other than demoing an external bower component.

## Installation

`bower install koco-demo-image-picker`.

## Usage

```javascript
var dialoger = require('dialoger');
framework.registerDialog('images', {
    title: 'Select an image',
    isBower: true
});

var koUtilities = require('knockout-utilities');
koUtilities.registerComponent('image-picker', {
    isBower: true
});
```

To use the component, just add the `<koco-demo-image-picker></koco-demo-image-picker>` tag in the html file you want to use it.
