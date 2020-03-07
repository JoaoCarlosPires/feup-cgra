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
			0.5, 0.5, 0.5		//7
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

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
