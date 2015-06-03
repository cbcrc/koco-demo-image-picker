// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['text!./koco-demo-image-picker.html', 'jquery', 'knockout-utilities', 'dialoger', 'knockout', 'configs'],
    function(template, $, knockoutUtilities, dialoger, ko, configs) {
        "use strict";

        var ViewModel = function(params, componentInfo) {
            var self = this;

            var imagesBasePath = (configs.baseUrl || '/') + 'bower_components/koco-demo-image-picker/src/images/';

            //todo: should we throw instead?
            if (configs.imagePicker && configs.imagePicker.imagesBasePath) {
                imagesBasePath = configs.imagePicker.imagesBasePath;
            }

            self.focused = ko.observable(false);
            self.imageUrl = params.image;

            if (!self.imageUrl()) {
                self.imageUrl(imagesBasePath + 'choisir2.png');
            }
        };

        ViewModel.prototype.selectImage = function(model, jQueryEvent) {
            var self = this;

            if (!ko.components.isRegistered('images-dialog')) {
                dialoger.registerDialog('images', {
                    title: 'Select an image',
                    basePath: 'bower_components/koco-demo-image-picker/src'
                });
            }

            dialoger.show('images').then(function(imageUrl) {
                if (imageUrl) {
                    self.imageUrl(imageUrl);
                }

                self.focused(true);
            });
        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new ViewModel(params, componentInfo);
                }
            },
            template: template
        };
    });
