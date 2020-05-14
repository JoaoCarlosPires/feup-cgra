/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;
        this.material = null;
        this.material2 = null;
        this.selectedTexture = 0;
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 3, 100);
        this.cube = new MyUnitCube(this);
        this.vehicle = new MyVehicle(this, 4);
        this.terrain = new MyTerrain(this);

        //Supplies
        this.supply1 = new MySupply(this);
        this.supply2 = new MySupply(this);
        this.supply3 = new MySupply(this);
        this.supply4 = new MySupply(this);
        this.supply5 = new MySupply(this);

        this.supplies = [
            this.supply1,
            this.supply2,
            this.supply3,
            this.supply4,
            this.supply5,
        ];

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayVehicle = false;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.displayCube = false;
        this.displayTerrain = false;
        this.scaleFactor = 3;
        this.speedFactor = 0.1;

        this.timeSpend = 0;

        this.supply = 0;

        this.appearance = new CGFappearance(this);
        this.appearance.setAmbient(1, 0, 0, 1);
        this.appearance.setDiffuse(0, 0, 0, 1);
        this.appearance.setSpecular(0, 0, 0, 1);
        this.appearance.setEmission(1,1,1,1);
        this.appearance.setShininess(10.0);

        this.material = new CGFappearance(this);
        this.material.setAmbient(1, 0, 0, 1);
        this.material.setDiffuse(0, 0, 0, 1);
        this.material.setSpecular(0, 0, 0, 1);
        this.material.setShininess(10.0);

        this.material2 = new CGFappearance(this);
        this.material2.setAmbient(1, 0, 0, 1);
        this.material2.setDiffuse(0, 0, 0, 1);
        this.material2.setSpecular(0, 0, 0, 1);
        this.material2.setShininess(10.0);

        this.material3 = new CGFappearance(this);
        this.material3.setAmbient(0, 0, 0, 1);
        this.material3.setDiffuse(0, 0, 0, 1);
        this.material3.setSpecular(0, 0, 0, 1);
        this.appearance.setEmission(1,1,1,1);
        this.material3.setShininess(10.0);


        //------ Textures
        this.textures = [
            new CGFtexture(this, 'images/sky.png'),
            new CGFtexture(this, 'images/mountain.png'),
            new CGFtexture(this, 'images/cubemap.png'),
            new CGFtexture(this, 'images/earth.jpg')
        ];
        
        this.textureList = {
            'Interstellar': 0,
            'Mountain' : 1,
            'Sky' : 2,
            'Earth' : 3,
        };

        this.textShaders = [];

        this.terrain.addTextShaders();
        this.textures.push(new CGFtexture(this, "images/boxFalling.png"));
        this.textures.push(new CGFtexture(this, "images/boxOpen.png"));

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(120, 120, 120), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(1, 0, 0, 1.0);
        this.setDiffuse(0, 0, 0, 1.0);
        this.setSpecular(0, 0, 0, 1.0);
        this.setShininess(10.0);
    }

    onSelectedTextureChanged(v) {
        // update wireframe mode when the object changes
        this.appearance.setTexture(this.textures[this.selectedTexture]);
       
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed = false;

            if (this.gui.isKeyPressed("KeyP") && !this.vehicle.autopilot) {
                text+= " P ";
                this.vehicle.autopilot=true;
            }
            else if (this.gui.isKeyPressed("KeyP"))
                this.vehicle.autopilot=false;

            // Check for key codes e.g. in https://keycode.info/
            if (this.gui.isKeyPressed("KeyW") && !this.vehicle.autopilot) {
                if (this.vehicle.velocity<=0){
                    this.vehicle.velocity = 0.02;
                }
                this.vehicle.accelerate(this.speedFactor);
                text+=" W ";
                keysPressed=true;
            }
        
            if (this.gui.isKeyPressed("KeyS") && !this.vehicle.autopilot) {
                text+=" S ";
                if (this.vehicle.velocity > 0){
                    this.vehicle.accelerate(-this.speedFactor);
                    if (this.vehicle.velocity < 0) {
                        this.vehicle.velocity = 0.02;
                    }
                }
                keysPressed=true;
            }

            if (this.gui.isKeyPressed("KeyA") && !this.vehicle.autopilot) {
                text+=" A ";
                this.vehicle.turn(Math.PI/12,-Math.PI/12);
            }

            if (this.gui.isKeyPressed("KeyD") && !this.vehicle.autopilot) {
                text+=" D ";
                this.vehicle.turn(-Math.PI/12,Math.PI/12);
            }

            if (!this.gui.isKeyPressed("KeyA") && !this.gui.isKeyPressed("KeyD")) //isto fica aqui por enquanto
                this.vehicle.wheelAngle=0;

        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            this.vehicle.reset();
            this.timeSpend=0;
            this.supply = 0;
            for (var i = 0; i < 5; i++) {
                this.supplies[i].reset();
            }
            keysPressed=true;
        }
        
        if (this.gui.isKeyPressed("KeyL")) {
            text+=" L ";
            keysPressed=true;
            if (this.supply<5) {
                this.supplies[this.supply].drop(this.vehicle.posX, this.vehicle.posY, this.vehicle.posZ);
                this.supply++;
            }
        }  

    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.vehicle.update(t);
        this.timeSpend+=0.05;
        for (var i = 0; i < 5; i++) {
            this.supplies[i].update();
        }
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();

        this.appearance.apply();

        if (this.displaySphere)
            this.incompleteSphere.display();

        if (this.displayCylinder) {        
            if (this.displayNormals) {
                this.cylinder.enableNormalViz();
            } else {
                this.cylinder.disableNormalViz();
            }
            this.pushMatrix();
            this.cylinder.display();
            this.popMatrix();
        }    

        if (this.displayCube) {
            this.pushMatrix();
            this.cube.display();
            this.popMatrix();
        }

        if (this.displayVehicle) {
            //this.material2.setTexture(this.vehicle.textures[0]);
            this.material2.apply();
            this.pushMatrix(); 
            this.vehicle.display(this.scaleFactor);
            this.popMatrix();
        }

        for (var i = 0; i < 5; i++) {
            if (this.supplies[i].state == SupplyStates.FALLING)
                this.material3.setTexture(this.textures[4]);
            else
                this.material3.setTexture(this.textures[5]);
            this.material3.apply();
            this.pushMatrix();
            this.supplies[i].display();
            this.popMatrix();
        }

        if (this.displayTerrain) {
            this.material.setTexture(this.terrain.textures[0]);
            this.material.apply();
            this.pushMatrix();
            this.setActiveShader(this.textShaders[0]);

            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);

            this.terrain.bind();
            this.terrain.display();
            this.setActiveShader(this.defaultShader);
            this.popMatrix();
        }

        this.popMatrix();

    }
}