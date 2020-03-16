class MyUnitCubeTan extends CGFobject {
	constructor(scene) {
		super(scene);
		this.base = new MyUnitCube(this.scene);
        this.tangram = new MyTangram(this.scene);
	}
	display() {

        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.translate(-0.5,0.5,-0.5);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.tangram.display();
        this.scene.popMatrix();

    }  
}