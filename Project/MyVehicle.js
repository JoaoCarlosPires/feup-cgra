/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.body = new MyEllipsoid(scene);
        this.gondola = new MyGondola(scene);
        this.wheel1 = new MyWheel(scene);
        this.wheel2 = new MyWheel(scene);
        this.initBuffers();

        this.angle=0;
        this.velocity = 0;
        this.posX=0;
        this.posY=0;
        this.posZ=0;
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
        this.scene.setDiffuse(0,0,1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.gondola.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0,0.4,-1.2);
        this.wheel1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0,-0.4,-1.2);
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.wheel2.display();
        this.scene.popMatrix();

        this.scene.translate(this.posX, this.posY, this.posZ);
        var sca = [scaleFactor, 0.0, 0.0, 0.0,
            0.0, scaleFactor, 0.0, 0.0,
            0.0, 0.0, scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(sca); 
        
        this.body.display();
        
    }
    update(){
        this.posX += this.velocity *Math.sin(this.angle);
        this.posZ += this.velocity *Math.cos(this.angle);
    }
    turn(val){
        this.angle += val;
    }
    accelerate(val){
        this.velocity=val;
    }
    reset(){
        this.angle=0;
        this.velocity=0;
        this.posX=0;
        this.posY=0;
        this.posZ=0;
    }
}


