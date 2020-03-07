/**
 * MyUnitCubeTransformation
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeTransformation extends CGFobject {
	constructor(scene) {
		super(scene);
		this.unitcube = new MyUnitCube(this.scene);
	}
	display() {

		this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.unitcube.display();
        this.scene.popMatrix();
	}
}
