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
    }
    
	display() {

        
        var diamond_matrix = [  Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                                -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                                0, 0, 1.0, 0,
                                -2.7, 2, 0, 1.0 ];
        this.scene.pushMatrix();
        this.scene.multMatrix(diamond_matrix);
        this.scene.setDiffuse(0,1,0,0);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1.72, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.setDiffuse(1,0.4,0.8,0);
        this.trianglepink.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(3*Math.PI/2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.scene.setDiffuse(1,1,0,0);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1, 2, 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(1,0,0,0);
        this.trianglered.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.setDiffuse(48/255,25/255,52/255,0);
        this.trianglepurple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.setDiffuse(255/255,127/255,80/255,0);
        this.triangleorange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.scene.setDiffuse(0,1,0,0);
        this.triangleblue.display();
        this.scene.popMatrix();
       
    }
}