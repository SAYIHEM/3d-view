import * as THREE from 'three';


class ModelLoader {

    constructor(url, modelCallback) {

        let manager = new THREE.LoadingManager();
        manager.onProgress = function (item, loaded, total) {
        };
        var OBJLoader = require('three-obj-loader'); // TODO: Import objloader correctly
        OBJLoader(THREE);

        var loader = new OBJLoader(manager);
        loader.load(url, (model) => {

            modelCallback(model);

        }, onProgress, onError);


        function onProgress(xhr) {

        }

        function onError(error) {
            //_this.modelCallback(undefined, error);
        }
    }
}

export default ModelLoader;