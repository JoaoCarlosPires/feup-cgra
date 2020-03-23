class MyTangram extends CGFobject {
    constructor(scene) {
		super(scene);
		this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
    }
    
    display() {
        //this.scene.pushMatrix();

        var sca = [Math.cos(45*Math.PI/180), Math.sin(45*Math.PI/180), 0.0, 0.0,
                  -Math.sin(45*Math.PI/180), Math.cos(45*Math.PI/180), 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    -2.7, 2.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(sca);
        this.scene.setDiffuse(0,1,0,0);
        this.greenSquare.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1,2.0,0);
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.scene.setDiffuse(1,0,0,0);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.setDiffuse(0.7,0,1,0);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,1.72,0);
        this.scene.setDiffuse(1,0.4,0.8,0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.72,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.setDiffuse(1,0.5,0,0);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3,0.72,0);
        this.scene.setDiffuse(0,0,1,0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.3,-0.29,0);
        this.scene.scale(-1,1,1);
        this.scene.setDiffuse(1,1,0,0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();
        
    }  
}