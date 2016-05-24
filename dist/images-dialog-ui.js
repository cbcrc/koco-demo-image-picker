"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _imagesDialog = require("text!./images-dialog.html");

var _imagesDialog2 = _interopRequireDefault(_imagesDialog);

var _knockout = require("knockout");

var _knockout2 = _interopRequireDefault(_knockout);

var _configs = require("configs");

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewModel = function ViewModel(params, componentInfo) {
    var self = this;
    var undef;

    self.title = params.title;

    var imagesBasePath = (_configs2.default.baseUrl || '') + 'bower_components/koco-demo-image-picker/src/images/';

    //todo: should we throw instead?
    if (_configs2.default.imagePicker && _configs2.default.imagePicker.imagesBasePath) {
        imagesBasePath = _configs2.default.imagePicker.imagesBasePath;
    }

    self.titleFocused = _knockout2.default.observable(true);

    self.images = _knockout2.default.observableArray([{
        name: '1',
        value: imagesBasePath + '1.jpg'
    }, {
        name: '2',
        value: imagesBasePath + '2.jpg'
    }, {
        name: '3',
        value: imagesBasePath + '3.jpg'
    }]);

    self.content = _knockout2.default.validatedObservable({
        image: _knockout2.default.observable(undef).extend({
            required: {
                message: "Image is required. "
            },
            successValidatingMessage: {
                validatingMessage: "Validating...",
                validMessage: "Value is valid!"
            }
        }),
        title: _knockout2.default.observable('').extend({
            required: {
                message: "Title is required. "
            },
            exampleAsync: {},
            successValidatingMessage: {
                validatingMessage: "Validating...",
                validMessage: "Value is valid!"
            }
        })
    }).extend({
        bootstrapValidation: {}
    });

    self.close = function () {
        params.close();
    };

    self.save = function () {
        self.content.isValidAsync().then(function (isValid) {
            if (isValid) {
                params.close(self.content().image());
            }
        });
    };
}; // Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

exports.default = {
    viewModel: {
        createViewModel: function createViewModel(params, componentInfo) {
            return new ViewModel(params, componentInfo);
        }
    },
    template: _imagesDialog2.default
};