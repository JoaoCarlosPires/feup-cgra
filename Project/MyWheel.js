class MyWheel extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.quad = new MyQuad(scene);
        this.tria = new MyTriangle(scene);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.4,0.4,0.4);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,0.2,0.5);
        this.scene.translate(0,0,1.4);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.tria.display();
        this.scene.popMatrix();

        this.tria.enableNormalViz();
    }

}