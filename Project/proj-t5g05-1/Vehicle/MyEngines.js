class MyEngines extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
        this.velocity = 0;
        this.rotateAngle = 0;
	}
	
	initBuffers() {
        this.sphere = new MySphere(this.scene,16,8);
        this.quad = new MyQuad(this.scene);
        this.wheel = new MyEngineWheel(this.scene);
    }
    
    display(){

        //engine body da esquerda
        this.scene.pushMatrix();
        this.scene.scale(0.05,0.05,0.1);
        this.scene.translate(-3,-12,-2.5);
        this.sphere.display();
        this.scene.popMatrix();

        //engine body da direita
        this.scene.pushMatrix();
        this.scene.scale(0.05,0.05,0.1);
        this.scene.translate(3,-12,-2.5);
        this.sphere.display();
        this.scene.popMatrix();

        //lemes do motor esquerdo
        this.scene.pushMatrix();
        this.scene.translate(-0.154,-0.6,-0.348);
        this.scene.scale(0.05,0.05,0.05);
        this.scene.rotate(this.velocity*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();
        
        //lemes do motor direito
        this.scene.pushMatrix();
        this.scene.translate(0.154,-0.6,-0.348);
        this.scene.scale(0.05,0.05,0.05);
        this.scene.rotate(this.velocity*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();
        
    }

    update(increase, state){
        if (state==0)
            this.rotateAngle=0;
        else if(increase>0){
            this.rotateAngle +=5;
            if (this.rotateAngle>90)
                this.rotateAngle=90;
        }
        else if (increase<0){
            this.rotateAngle-=5;
            if (this.rotateAngle<5)
                this.rotateAngle=5;
        }
        
        else 
            this.velocity += this.rotateAngle;
    }
}