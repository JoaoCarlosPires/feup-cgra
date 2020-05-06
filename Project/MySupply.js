const SupplyStates = {
	INACTIVE: 0,
	FALLING: 1,
	LANDED: 2
};

class MySupply extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		
		this.state=SupplyStates.INACTIVE;
		this.posX = 0;
		this.posY = 0;
		this.posZ = 0;
	}
	initBuffers() {
		this.vertices = [
			//bottom
			0.5, -0.5, -0.5,	//0
		    -0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,	    //2
            -0.5, 0.5, -0.5,	//3

			//top
            0.5, -0.5, 0.5,	    //4
		    -0.5, -0.5, 0.5,	//5
			0.5, 0.5, 0.5,	    //6
            -0.5, 0.5, 0.5,	    //7

			//left
            0.5, -0.5, -0.5,	//8
		    -0.5, -0.5, -0.5,	//9
			0.5, -0.5, 0.5,	    //10
            -0.5, -0.5, 0.5,	//11

			//back
            -0.5, -0.5, -0.5,	//12
		    -0.5, 0.5, -0.5,	//13
			-0.5, -0.5, 0.5,	//14
            -0.5, 0.5, 0.5,	    //15

			//right
			0.5, 0.5, -0.5,		//16
            -0.5, 0.5, -0.5,	//17
			0.5, 0.5, 0.5,	    //18
			-0.5, 0.5, 0.5,	    //19
            
			//front
            0.5, -0.5, -0.5,	//20
		    0.5, 0.5, -0.5,		//21
			0.5, -0.5, 0.5,	    //22
            0.5, 0.5, 0.5	    //23
            
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //top
			4, 5, 6,
			6, 5, 7,

            //bottom
			2, 1, 0,
			3, 1, 2,

			//left
			10, 8, 9,
			9, 11, 10,

			//back
			14, 12, 13,
			13, 15, 14,

			//right
			17, 16, 18,
			18, 19, 17,

			//front
			21, 20, 22,
			22, 23, 21

            
        ];
        
        this.normals = [];

        this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
		this.normals.push(0, 0, 1); //3
		
		this.normals.push(0, 0, -1); //4
		this.normals.push(0, 0, -1); //5
		this.normals.push(0, 0, -1); //6
		this.normals.push(0, 0, -1); //7
		
		this.normals.push(0, 1, 0); //8
		this.normals.push(0, 1, 0); //9
		this.normals.push(0, 1, 0); //10
		this.normals.push(0, 1, 0); //11
		
		this.normals.push(1, 0, 0); //12
		this.normals.push(1, 0, 0); //13
		this.normals.push(1, 0, 0); //14
		this.normals.push(1, 0, 0); //15

		this.normals.push(0, -1, 0); //16
		this.normals.push(0, -1, 0); //17
		this.normals.push(0, -1, 0); //18
		this.normals.push(0, -1, 0); //19
		
		this.normals.push(-1, 0, 0); //20
		this.normals.push(-1, 0, 0); //21
		this.normals.push(-1, 0, 0); //22
		this.normals.push(-1, 0, 0); //23

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles

		this.texCoords=[
			//bottom tendo em conta o eixo dos z's pra cima
			0.0, (2/3),
			(1/4), (2/3),
			0.0, (1/3),
			(1/4), (1/3),

			//top
			(3/4), (2/3),
			(2/4), (2/3),
			(3/4), (1/3),
			(2/4), (1/3),

			//left
			(1/4), 1.0,
			(1/4), (2/3),
			(2/4), 1.0,
			(2/4), (2/3),

			//back
			(1/4), (2/3),
			(1/4), (1/3),
			(2/4), (2/3),
			(2/4), (1/3),
			
		
			//right
			(1/4), 0.0,
            (1/4), (1/3),
            (2/4), 0.0,
			(2/4), (1/3),

			//front
			1.0, (2/3), //3
			1.0, (1/3), //4
			(3/4), (2/3), //1
			(3/4), (1/3), //2
			
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	
	display() {
		if (this.state == SupplyStates.FALLING) {this.displayFalling();}
		if (this.state == SupplyStates.LANDED) {this.displayOnLanded();}
	}

	update() {
		if (this.state == SupplyStates.FALLING) {
			if (this.posY<=-24) {
				this.land();
			} else {
				this.posY-=0.4;
			}	
		}
	}

	drop(dropPositionX, dropPositionY, dropPositionZ) {
		this.state = SupplyStates.FALLING;
		this.posX = dropPositionX;
		this.posY = dropPositionY;
		this.posZ = dropPositionZ;
	}

	land() {
		this.state = SupplyStates.LANDED;
	}

	displayFalling() {
		this.scene.setDiffuse(0,0,0);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(1, 1, 1, 1);

		this.scene.pushMatrix();
		this.scene.translate(this.posX, this.posY, this.posZ);
        super.display();
        this.scene.popMatrix();
	}

	displayOnLanded() {
		this.scene.setDiffuse(0,0,0);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(1, 1, 1, 1);

		this.scene.pushMatrix();
		this.scene.translate(this.posX, -25, this.posZ);
        super.display();
        this.scene.popMatrix();
	}

	reset() {
		this.state = SupplyStates.INACTIVE;
	}
	
}