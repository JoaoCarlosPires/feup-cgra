/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.body = new MyEllipsoid(scene);
        this.gondola = new MyGondola(scene);
        this.wheel = new MyWheel(scene);
        this.engines = new MyEngines(scene);
        this.flag = new MyFlag(scene);
        this.initBuffers();

        this.angle=0;
        this.wheelAngle=0;
        this.velocity = 0;
        this.posX=0;
        this.posY=10;
        this.posZ=0;

        this.autopilot=false;
        this.centerX = 0;
        this.centerZ = 0;
        this.a=0;

        this.prevUpdate = 0;
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        this.bodyTex = new CGFappearance(this.scene);
        this.bodyTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bodyTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bodyTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bodyTex.setShininess(10);
        this.bodyTex.loadTexture('images/balloon.png');
        this.bodyTex.setTextureWrap('REPEAT','REPEAT');

        this.gondTex = new CGFappearance(this.scene);
        this.gondTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.gondTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.gondTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.gondTex.setShininess(10);
        this.gondTex.loadTexture('images/gondola.png');
        this.gondTex.setTextureWrap('REPEAT','REPEAT');

        this.wheelTex = new CGFappearance(this.scene);
        this.wheelTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.wheelTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wheelTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.wheelTex.setShininess(10);
        this.wheelTex.loadTexture('images/wheels.png');
        this.wheelTex.setTextureWrap('REPEAT','REPEAT');

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
    display(scaleFactor){
        //Usar variáveis de orientação e posição aqui
        this.scene.pushMatrix();

        this.scene.setDiffuse(0,0,1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);
        
        
        //aplica estas transformações a todos os elementos

        if (this.autopilot) {
            this.scene.translate(this.centerX, 0, this.centerZ);
            this.scene.rotate(((Math.PI*2)/5)*this.scene.timeSpend,0,1,0);
            this.scene.translate(-this.centerX, 0, -this.centerZ);
        } 

        this.scene.translate(this.posX, this.posY, this.posZ);
        this.scene.rotate(this.angle,0,1,0);       
        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);
    
        //gondola
        this.gondTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.gondola.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //rotate only the horizontal wheels
        this.scene.rotate(this.wheelAngle,0,1,0);

        //leme de cima
        this.wheelTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.4,-0.9);
        this.wheel.display();
        this.scene.popMatrix();

        //leme de baixo
        this.wheelTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.4,-0.9);
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        
        this.scene.popMatrix();

        //leme do lado direito (se visto de frente)
        this.wheelTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.4,0,-0.9);
        this.scene.rotate(-90*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        //leme do lado esquerdo (se visto de frente)
        this.scene.pushMatrix();
        this.scene.translate(-0.4,0,-0.9);
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        this.gondTex.apply();
        this.engines.display();
        
        this.bodyTex.apply();
        this.body.display();
        
        this.flag.display();
        
        this.scene.popMatrix();
        }
    update(t){
        if(this.autopilot){
            console.log(this.a);
            this.a = (Math.PI/2)+this.angle;
            this.centerX = 5*Math.sin(this.a) + this.posX;
            this.centerZ = 5*Math.cos(this.a) + this.posZ;
        }else{
            this.posX += this.velocity *Math.sin(this.angle);
            this.posZ += this.velocity *Math.cos(this.angle);
        }
        
        this.engines.update(0,1);
        this.flag.update(t/1000%1000,this.velocity);
    }
    endAutoPilot() {
        this.posX = this.centerX;
        this.posZ = this.centerZ;
        this.posX += 5*Math.sin(((Math.PI*2)/5)*this.scene.timeSpend);
        this.posZ += 5*Math.cos(((Math.PI*2)/5)*this.scene.timeSpend);
        this.angle += ((Math.PI*2)/5)*this.scene.timeSpend;
    }
    turn(val,wheelVal){
        this.angle += val;
        this.wheelAngle = wheelVal;
    }
    accelerate(val){
        this.velocity+=val;
        this.engines.update(val,1);
    }
    reset(){
        this.angle=0;
        this.wheelAngle=0;
        this.velocity=0;
        this.posX=0;
        this.posY=10;
        this.posZ=0;
        this.engines.update(0,0);
        
        this.autopilot=false;
        this.a=0;
        this.centerX=0;
        this.centerZ=0;
    }
    
}


