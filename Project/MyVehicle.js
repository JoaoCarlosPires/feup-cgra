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
        this.initBuffers();

        this.angle=0;
        this.wheelAngle=0;
        this.velocity = 0;
        this.posX=0;
        this.posY=0;
        this.posZ=0;

        this.centerX = 0;
        this.centerZ = 0;

        //this.textures = [];
        //this.textures.push(new CGFtexture(this.scene, 'images/image.png'));
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,1,0);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );

            ang+=alphaAng;
        }

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
        this.scene.translate(this.posX, this.posY, this.posZ);
        this.scene.rotate(this.angle,0,1,0);
        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);

        if (this.scene.autoPilot) {
            this.scene.translate(this.centerX, 0, this.centerZ);
            this.scene.rotate(((Math.PI*2)/5)*this.scene.timeSpend,0,1,0);
            this.scene.translate(-this.centerX, 0, -this.centerZ);
        } 
    
        //gondola
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.gondola.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //rotate only the horizontal wheels
        this.scene.rotate(this.wheelAngle,0,1,0);

        //leme de cima
        this.scene.pushMatrix();
        this.scene.translate(0,0.4,-0.9);
        this.wheel.display();
        this.scene.popMatrix();

        //leme de baixo
        this.scene.pushMatrix();
        this.scene.translate(0,-0.4,-0.9);
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        
        this.scene.popMatrix();

        //leme do lado direito (se visto de frente)
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

        this.engines.display();
        
        this.body.display();

        this.scene.popMatrix();
        }
    update(){
        this.posX += this.velocity *Math.sin(this.angle);
        this.posZ += this.velocity *Math.cos(this.angle);
        
        this.engines.update(0,1);
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
        this.posY=0;
        this.posZ=0;
        this.engines.update(0,0);
    }
    autopilot(centerX, centerZ) {
        this.centerX = centerX;
        this.centerZ = centerZ;
    }
}


