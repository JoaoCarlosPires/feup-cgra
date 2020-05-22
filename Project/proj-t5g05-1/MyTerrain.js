/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);
        this.plane = new MyPlane(this.scene, 20);
        this.textures = [];
        this.textures.push(new CGFtexture(this.scene, "images/terrain2.jpg"));
        this.textures.push(new CGFtexture(this.scene, "images/heightmap2.jpg"));
    }

    addTextShaders() {
        this.scene.textShaders.push(new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag"));
        this.scene.textShaders[0].setUniformsValues({ uSampler2: 1 });
    }

    bind() {
        this.textures[1].bind(1);
    }

	display() {
        this.scene.pushMatrix();
        this.scene.translate(0, -14, 0);
        this.scene.scale(50,8,50); 
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.plane.display();
        this.scene.popMatrix();
    }
}