class MyWheel extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers(){
        this.quad = new MyQuad(this.scene);
        this.tria = new MyTriangle(this.scene);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.6);
        this.scene.translate(0,0,0.75);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.tria.display();
        this.scene.popMatrix();

    }

}