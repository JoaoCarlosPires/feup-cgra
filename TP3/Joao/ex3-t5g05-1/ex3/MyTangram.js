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
    hexToRgbA(hex)
    {
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
    }
    updateCustomMaterial() {
        var rgba;

        this.scene.setAmbient(...this.hexToRgbA(this.customMaterialValues['Ambient']));
        this.scene.setDiffuse(...this.hexToRgbA(this.customMaterialValues['Diffuse']));
        this.scene.setSpecular(...this.hexToRgbA(this.customMaterialValues['Specular']));

        this.scene.setShininess(this.customMaterialValues['Shininess']);

    };
	display() {

        this.customMaterialValues = {
            'Ambient': '#0000ff',
            'Diffuse': '#ff0000',
            'Specular': '#000000',
            'Shininess': 10
        }
        
        
        var diamond_matrix = [  Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                                -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                                0, 0, 1.0, 0,
                                -2.7, 2, 0, 1.0 ];
        
        this.scene.pushMatrix();
        this.scene.multMatrix(diamond_matrix);
        this.updateCustomMaterial();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1.72, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,192/255,203/255,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.trianglepink.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(3*Math.PI/2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,1,0,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1, 2, 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,0,0,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.trianglered.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(138/255,43/255,226/255,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.trianglepurple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.7,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(255/255,127/255,80/255,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.triangleorange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5,0.7,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(0,0,1,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.triangleblue.display();
        this.scene.popMatrix();
    }
}