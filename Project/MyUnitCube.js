class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
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
			0.0, (0.66),
			(0.25), (0.66),
			0.0, (0.33),
			(0.25), (0.33),

			//top
			(0.75), (0.66),
			(0.5), (0.66),
			(0.75), (0.33),
			(0.5), (0.33),

			//left
			(0.25), 1.0,
			(0.25), (0.66),
			(0.5), 1.0,
			(0.5), (0.66),

			//back
			(0.25), (0.66),
			(0.25), (0.33),
			(0.5), (0.66),
			(0.5), (0.33),
			
		
			//right
			(0.25), 0.0,
            (0.25), (0.33),
            (0.5), 0.0,
			(0.5), (0.33),

			//front
			1.0, (0.66), //3
			1.0, (0.33), //4
			(0.75), (0.66), //1
			(0.75), (0.33), //2
			
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	display() {
        this.scene.setDiffuse(0,0,0);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(1, 1, 1, 1);

        this.scene.pushMatrix();
        this.scene.scale(50,50,50);
        super.display();
        this.scene.popMatrix();
	}
	
}