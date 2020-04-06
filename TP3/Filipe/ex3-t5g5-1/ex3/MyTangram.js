class MyTangram extends CGFobject {
    constructor(scene) {
		super(scene);
		this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
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
        //this.scene.pushMatrix();

        var sca = [Math.cos(45*Math.PI/180), Math.sin(45*Math.PI/180), 0.0, 0.0,
                  -Math.sin(45*Math.PI/180), Math.cos(45*Math.PI/180), 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    -2.7, 2.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(sca);
        this.scene.updateCustomMaterial();
        this.greenSquare.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.1,2.0,0);
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,0,0,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-4.4,2.7,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(0.7,0,1,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,1.72,0);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,0.4,0.8,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.72,0);
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,0.5,0,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3,0.72,0);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(0,0,1,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.3,-0.29,0);
        this.scene.scale(-1,1,1);
        this.scene.setAmbient(0.5, 0.0, 0.0, 1.0);
        this.scene.setDiffuse(1,1,0,0);
        this.scene.setSpecular(1, 0, 0, 1.0);
        this.scene.setShininess(10.0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();
        
    }  
}