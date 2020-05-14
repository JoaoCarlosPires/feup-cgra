class MyEllipsoid extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.body = new MySphere(scene, 16, 8);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.body.display();
        this.scene.popMatrix();
    }

}