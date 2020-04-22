class MyGondola extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.body = new MyCylinder(this.scene, 5,20);
        this.front = new MySphere(this.scene,16,8);
        this.back = new MySphere(this.scene,16,8);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.1,0.1,0.1);
        this.scene.translate(0,-0.7,2.6);
        this.front.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.103,0.103,0.103);
        this.scene.translate(0,-0.7,-2.5);
        this.scene.rotate(90.0*Math.PI/180.0,1,0,0);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.1,0.1,0.1);
        this.scene.translate(0,-0.7,-2.6);
        this.back.display();
        this.scene.popMatrix();
    }
}