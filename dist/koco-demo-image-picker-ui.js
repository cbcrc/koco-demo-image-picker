'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kocoDemoImagePicker = require('text!./koco-demo-image-picker.html');

var _kocoDemoImagePicker2 = _interopRequireDefault(_kocoDemoImagePicker);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _knockoutUtilities = require('knockout-utilities');

var _knockoutUtilities2 = _interopRequireDefault(_knockoutUtilities);

var _dialoger = require('dialoger');

var _dialoger2 = _interopRequireDefault(_dialoger);

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

var _configs = require('configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

var ViewModel = function ViewModel(params, componentInfo) {
    var self = this;

    var imagesBasePath = (_configs2.default.baseUrl || '/') + 'bower_components/koco-demo-image-picker/src/images/';

    //todo: should we throw instead?
    if (_configs2.default.imagePicker && _configs2.default.imagePicker.imagesBasePath) {
        imagesBasePath = _configs2.default.imagePicker.imagesBasePath;
    }

    self.focused = _knockout2.default.observable(false);
    self.imageUrl = params.image;

    if (!self.imageUrl()) {
        self.imageUrl(imagesBasePath + 'choisir2.png');
    }
};

ViewModel.prototype.selectImage = function (model, jQueryEvent) {
    var self = this;

    if (!_knockout2.default.components.isRegistered('images-dialog')) {
        _dialoger2.default.registerDialog('images', {
            title: 'Select an image',
            basePath: 'bower_components/koco-demo-image-picker/src'
        });
    }

    _dialoger2.default.show('images').then(function (imageUrl) {
        if (imageUrl) {
            self.imageUrl(imageUrl);
        }

        self.focused(true);
    });
};

exports.default = {
    viewModel: {
        createViewModel: function createViewModel(params, componentInfo) {
            return new ViewModel(params, componentInfo);
        }
    },
    template: _kocoDemoImagePicker2.default
};