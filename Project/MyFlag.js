class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.flag = new MyPlane(this.scene,20);
        this.string = new MyCylinder(scene, 5,20);

        this.initShaders();

    }
    initShaders() {
        this.flagTex = new CGFappearance(this.scene);
        this.flagTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.flagTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagTex.setShininess(10);
        this.flagTex.loadTexture('images/flag.jpg');
        this.flagTex.setTextureWrap('REPEAT','REPEAT');

        this.flagShader = new CGFshader(this.scene.gl,"shaders/flag.vert", "shaders/flag.frag");
        this.flagShader.setUniformsValues({uSampler1: 1})
        this.flagShader.setUniformsValues({speed: 0.05});
        this.flagShader.setUniformsValues({timeFactor: 0});

        this.texture=new CGFtexture(this.scene,'images/flagwave.jpg');
    }
    update(t, vehicleSpeed){
        this.flagShader.setUniformsValues({speed: vehicleSpeed});
        this.flagShader.setUniformsValues({timeFactor: t});
    }

    display() {
        this.flagTex.apply();
        this.scene.setActiveShader(this.flagShader);
        this.texture.bind(1);
    
        this.scene.pushMatrix();

        this.scene.translate(0,0,-3.2);
        this.scene.scale(1,0.8,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.flag.display();

        this.scene.rotate(Math.PI, 0, 1, 0);
        this.flag.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

        //fio cima
        this.scene.pushMatrix();
        this.scene.rotate(15*Math.PI/180, 1, 0, 0);
        this.scene.translate(0, -0.2, -1.58);
        this.scene.scale(0.001, 0.001, 0.65);
        this.string.display();
        this.scene.popMatrix();

        //fio baixo
        this.scene.pushMatrix();
        this.scene.rotate(-15*Math.PI/180, 1, 0, 0);
        this.scene.translate(0, 0.2, -1.58);
        this.scene.scale(0.001, 0.001, 0.65);
        this.string.display();
        this.scene.popMatrix();
        
    }
}