import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Preloader from "./Preloader.js";
import Controls from "./Controls.js";

import World from "./World/World.js";

export default class Experience {
    static instance;

    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }

        Experience.instance = this;

        this.canvas = canvas;
        this.sizes = new Sizes();
        this.time = new Time();

        this.setScene();
        this.setCamera();
        this.setRenderer();
        this.setResources();
        this.setWorld();
        this.setPreloader();

        this.sizes.on("resize", () => {
            this.onResize();
        });

        this.resources.on("ready", () => {
            this.setControls();
        });

        this.update();
    }

    setControls() {
        this.controls = new Controls();
    }

    setScene() {
        this.scene = new THREE.Scene();
    }

    setCamera() {
        this.camera = new Camera();
    }

    setRenderer() {
        this.renderer = new Renderer();
    }

    setResources() {
        this.resources = new Resources(assets);
    }

    setPreloader() {
        this.preloader = new Preloader();
    }

    setWorld() {
        this.world = new World();
    }

    onResize() {
        this.camera.onResize();
        this.renderer.onResize();
    }

    update(time) {
        if (this.camera) this.camera.update();
        if (this.renderer) this.renderer.update();
        if (this.world) this.world.update();
        if (this.time) this.time.update();
        if (this.controls) this.controls.update(time);

        window.requestAnimationFrame((time) => {
            this.update(time);
        });
    }
}
