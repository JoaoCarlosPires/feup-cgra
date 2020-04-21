/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);
        this.plane = new MyPlane(this.scene, 20);
    }

    addTexture() {
        this.scene.textures.push(new CGFtexture(this.scene, "images/terrain.jpg"));
        this.scene.textures.push(new CGFtexture(this.scene, "images/heightmap.jpg"));

        this.scene.textShaders.push(new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag"));

        this.scene.textShaders[0].setUniformsValues({ uSampler2: 1 });
    }

    bind() {
        this.scene.textures[4].bind(1);
    }

	display() {
        this.scene.pushMatrix();
        this.scene.scale(50,50,8);
        this.plane.display();
        this.scene.popMatrix();
    }
}