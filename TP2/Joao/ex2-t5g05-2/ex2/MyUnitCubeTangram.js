/**
 * MyUnitCubeTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.unitcubetransformation = new MyUnitCubeTransformation(this.scene);
		this.tangram = new MyTangram(this.scene); 
	}
	display() {

		this.scene.pushMatrix();
		this.scene.translate(0,0.5, -0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.unitcubetransformation.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(0,0.5, -0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.tangram.display();
		this.scene.popMatrix();
	}
}
