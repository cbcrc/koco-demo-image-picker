(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'text!./koco-demo-image-picker.html', 'jquery', 'knockout-utilities', 'dialoger', 'knockout', 'configs'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('text!./koco-demo-image-picker.html'), require('jquery'), require('knockout-utilities'), require('dialoger'), require('knockout'), require('configs'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.kocoDemoImagePicker, global.jquery, global.knockoutUtilities, global.dialoger, global.knockout, global.configs);
        global.kocoDemoImagePickerUi = mod.exports;
    }
})(this, function (exports, _kocoDemoImagePicker, _jquery, _knockoutUtilities, _dialoger, _knockout, _configs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _kocoDemoImagePicker2 = _interopRequireDefault(_kocoDemoImagePicker);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _knockoutUtilities2 = _interopRequireDefault(_knockoutUtilities);

    var _dialoger2 = _interopRequireDefault(_dialoger);

    var _knockout2 = _interopRequireDefault(_knockout);

    var _configs2 = _interopRequireDefault(_configs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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
});