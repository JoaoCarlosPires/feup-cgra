/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
            -0.5, 0.5, 0.5,		//3
            0.5, -0.5, -0.5,	//4
			0.5, -0.5, 0.5,	    //5
			0.5, 0.5, -0.5,	    //6
			0.5, 0.5, 0.5,		//7

			-0.5, -0.5, -0.5,	//00
			-0.5, -0.5, 0.5,	//11
			-0.5, 0.5, -0.5,	//22
            -0.5, 0.5, 0.5,		//33
            0.5, -0.5, -0.5,	//44
			0.5, -0.5, 0.5,	    //55
			0.5, 0.5, -0.5,	    //66
			0.5, 0.5, 0.5,		//77

			-0.5, -0.5, -0.5,	//000
			-0.5, -0.5, 0.5,	//111
			-0.5, 0.5, -0.5,	//222
            -0.5, 0.5, 0.5,		//333
            0.5, -0.5, -0.5,	//444
			0.5, -0.5, 0.5,	    //555
			0.5, 0.5, -0.5,	    //666
			0.5, 0.5, 0.5		//777
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 3, //Side1
			3, 1, 0, //Side1
			3, 2, 0, //Side1
            0, 1, 3, //Side1
            
            6, 2, 3, //Side2
			3, 7, 6, //Side2
			3, 2, 6, //Side2
            6, 7, 3, //Side2
            
            4, 6, 7, //Side3
            7, 5, 4, //Side3
            7, 6, 4, //Side3
			4, 5, 7, //Side3
			
            5, 4, 0, //Side4
            0, 1, 5, //Side4
            0, 4, 5, //Side4
			5, 1, 0, //Side4
			
            4, 6, 2, //Side5
			2, 0, 4, //Side5
			2, 6, 4, //Side5
            4, 0, 2, //Side5
            
            5, 7, 3, //Side6
			3, 1, 5, //Side6
			3, 7, 5, //Side6
			5, 1, 3 //Side6
            
		];

		this.normals = [];
		
		this.normals.push(0, 0, -1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, -1); //2
		this.normals.push(0, 0, 1); //3
		this.normals.push(0, 0, -1); //4
		this.normals.push(0, 0, 1); //5
		this.normals.push(0, 0, -1); //6
		this.normals.push(0, 0, 1); //7
		
		this.normals.push(0, -1, 0); //00
		this.normals.push(0, -1, 0); //11
		this.normals.push(0, 1, 0); //22
		this.normals.push(0, 1, 0); //33
		this.normals.push(0, -1, 0); //44
		this.normals.push(0, -1, 0); //55
		this.normals.push(0, 1, 0); //66
		this.normals.push(0, 1, 0); //77

		this.normals.push(-1, 0, 0); //000
		this.normals.push(-1, 0, 0); //111
		this.normals.push(-1, 0, 0); //222
		this.normals.push(-1, 0, 0); //333
		this.normals.push(1, 0, 0); //444
		this.normals.push(1, 0, 0); //555
		this.normals.push(1, 0, 0); //666
		this.normals.push(1, 0, 0); //777


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
