import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default class Loaders {
    constructor() {
        this.loaders = {};

        this.setLoaders();
    }

    setLoaders() {
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();

        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.audioLoader = new THREE.AudioLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

        this.loaders.textureLoader = new THREE.TextureLoader();

        this.loaders.rgbeLoader = new RGBELoader();
    }
}
