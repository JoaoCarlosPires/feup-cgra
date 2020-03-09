class MyUnitCubeTan extends CGFobject {
	constructor(scene) {
		super(scene);
		this.base = new MyUnitCube(this.scene);
        this.tangram = new MyTangram(this.scene);
	}
	display() {

        this.scene.pushMatrix();
        this.scene.scale(11,11,11);
        this.scene.translate(0.5,0.5,-0.5);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.5,5,0.01);
        this.tangram.display();
        this.scene.popMatrix();

    }  
}