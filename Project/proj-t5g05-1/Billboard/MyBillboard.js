/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
        super(scene);
        this.rectangle = new MyRectangle(this.scene, 2, 1);
        this.trave1 = new MyRectangle(this.scene, 0.1, 1);
        this.trave2 = new MyRectangle(this.scene, 0.1, 1);
        this.supplies = new MyRectangle(this.scene, 1.5, 0.2);

        this.initTextures();

        this.supplyShader = new CGFshader(this.scene.gl,"shaders/supplies.vert", "shaders/supplies.frag");
    }

    initTextures() {
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(1, 1, 1, 1);
        this.texture.setDiffuse(1, 1, 1, 1);
        this.texture.setSpecular(1, 1, 1, 1);
        this.texture.setShininess(10);
        this.texture.loadTexture('images/billboard.png');
        this.texture.setTextureWrap('REPEAT','REPEAT');
    }

    update(supply) {
        this.supplyShader.setUniformsValues({uSampler1: supply});
    }
    
	display(scaleFactor, supply) {
        this.supplyShader.setUniformsValues({uSampler1: supply});

        this.scene.pushMatrix();
        this.scene.translate(-13,-12.6,-13);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);
        this.scene.translate(1,1.5,0);

        this.texture.apply();
        this.scene.pushMatrix();
        this.rectangle.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.supplyShader);
        this.scene.pushMatrix();
        this.scene.translate(0.01,0,0.01);
        this.supplies.display();
        this.scene.popMatrix();   
        
        this.scene.setActiveShader(this.scene.defaultShader);
        
        this.scene.pushMatrix();
        this.scene.translate(-0.95,-1,0);
        this.trave1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.95,-1,0);
        this.trave2.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}