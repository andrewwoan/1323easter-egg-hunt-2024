import Experience from "../Experience.js";
import * as THREE from "three";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.setEnvironment();
    }

    setEnvironment() {
        this.scene.background = this.resources.items.skyBoxTexture;
    }
}
