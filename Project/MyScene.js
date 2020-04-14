/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;
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

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayVehicle = false;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.displayCube = false;
        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.appearance = new CGFappearance(this);
        this.appearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.appearance.setShininess(10.0);

        this.texture = new CGFtexture(this, "images/earth.jpg");
		this.appearance.setTexture(this.texture);
		this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.textures = [
            new CGFtexture(this, 'images/earth.jpg'),
            new CGFtexture(this, 'images/mountain.png'),
            new CGFtexture(this, 'images/cubemap.png')
        ];
        this.textureList = {
            'Earth' : 0,
            'Mountain' : 1,
            'Sky' : 2,
        };
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    onSelectedTextureChanged(v) {
        // update wireframe mode when the object changes
        this.appearance.setTexture(this.textures[this.selectedTexture]);
    }

    //Function that resets selected texture in quadMaterial
    updateAppliedTexture() {
        this.appearance.setTexture(this.textures[this.selectedTexture]);
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            this.vehicle.accelerate(this.speedFactor);
            keysPressed=true;
        }
        
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            this.vehicle.accelerate(-this.speedFactor);
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            text+=" A ";
            this.vehicle.turn(Math.PI/6);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            text+=" D ";
            this.vehicle.turn(-Math.PI/6);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            this.vehicle.reset();
            keysPressed=true;
        }
        
        if (keysPressed)
            this.vehicle.update();   
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
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
        //this.pushMatrix();

        this.appearance.apply();

        //This sphere does not have defined texture coordinates

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

        if (this.displayVehicle) {
            this.pushMatrix(); 
            this.vehicle.display(this.scaleFactor);
            this.popMatrix();
        }

        if (this.displayCube) {
            this.pushMatrix();
            this.cube.display();
            this.popMatrix();
        }

        

    }
}