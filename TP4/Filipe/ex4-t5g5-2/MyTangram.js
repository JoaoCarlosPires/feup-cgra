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

        this.setMaterial();
    }
    setMaterial() {
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png'); 

        this.purpleTriangle.texCoords = [
            0, 0.5,
            0.25, 0.25,
            0, 0.1,

            0, 0.5,
            0.25, 0.25,
            0, 0,
        ];
        this.purpleTriangle.updateTexCoordsGLBuffers();

        this.redTriangle.texCoords = [
            0.75, 0.75,
            0.52, 0.52,
            0.25, 0.75,

            0.75, 0.75,
            0.5, 0.5,
            0.25, 0.75,
        ];
        this.redTriangle.updateTexCoordsGLBuffers();

        this.blueTriangle.texCoords = [
            1, 0,
			0.5, 0.5,
			0, -0.1,

			1, 0,
			0.5, 0.5,
			0, 0,
        ];
        this.blueTriangle.updateTexCoordsGLBuffers();
        
        this.orangeTriangle.texCoords = [
            1, 1,
			0.5, 0.5,
			1, 0.1,

			1, 1,
			0.5, 0.5,
			1, 0,
        ];
        this.orangeTriangle.updateTexCoordsGLBuffers();
    }
    
    display() {
        this.tangramMaterial.apply();

        var sca = [Math.cos(45*Math.PI/180), Math.sin(45*Math.PI/180), 0.0, 0.0,
                  -Math.sin(45*Math.PI/180), Math.cos(45*Math.PI/180), 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    -2.7, 2.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(sca);
        this.greenSquare.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1,2.0,0);
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,1.72,0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.72,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3,0.72,0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.3,-0.29,0);
        this.scene.scale(-1,1,1);
        this.yellowParallelogram.display();
        this.scene.popMatrix();
        
    }  
}