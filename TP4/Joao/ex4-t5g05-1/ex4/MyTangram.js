/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(this.scene);
        this.trianglepink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglered = new MyTriangleSmall(this.scene);
        this.trianglepurple = new MyTriangleSmall(this.scene);
        this.triangleorange = new MyTriangleBig(this.scene);
        this.triangleblue = new MyTriangleBig(this.scene);

        this.setMaterial();
    }
    setMaterial() {
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png'); 

        this.trianglepurple.texCoords = [
            0, 0.5,
            0.25, 0.25,
            0, 0,

            0, 0.5,
            0.25, 0.25,
            0, 0,
        ];
        this.trianglepurple.updateTexCoordsGLBuffers();

        this.trianglered.texCoords = [
            0.75, 0.75,
            0.5, 0.5,
            0.25, 0.75,

            0.75, 0.75,
            0.5, 0.5,
            0.25, 0.75,
        ];
        this.trianglered.updateTexCoordsGLBuffers();

        this.triangleblue.texCoords = [
            1, 0,
			0.5, 0.5,
			0, 0,

			1, 0,
			0.5, 0.5,
			0, 0,
        ];
        this.triangleblue.updateTexCoordsGLBuffers();
        
        this.triangleorange.texCoords = [
            1, 1,
			0.5, 0.5,
			1, 0,

			1, 1,
			0.5, 0.5,
			1, 0,
        ];
        this.triangleorange.updateTexCoordsGLBuffers();
    }
	display() {
        
        this.tangramMaterial.apply();
        
        var diamond_matrix = [  Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                                -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                                0, 0, 1.0, 0,
                                -2.7, 2, 0, 1.0 ];
        
        this.scene.pushMatrix();
        this.scene.multMatrix(diamond_matrix);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1.72, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.trianglepink.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(3*Math.PI/2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1, 2, 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.trianglered.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.trianglepurple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangleorange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleblue.display();
        this.scene.popMatrix();
    }
}