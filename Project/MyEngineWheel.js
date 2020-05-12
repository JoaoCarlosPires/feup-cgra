/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyEngineWheel extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [
			0, -2, 0,	    //0
			0.5, -1, 0,	    //1
			-0.5, -1, 0,	//2
            0, 0, 0,        //3
            0.5, 1, 0,	    //4
			-0.5, 1, 0,	    //5
            0, 2, 0,        //6
            
            0, -2, 0,	    //7
			0.5, -1, 0,	    //8
			-0.5, -1, 0,	//9
            0, 0, 0,        //10
            0.5, 1, 0,	    //11
			-0.5, 1, 0,	    //12
			0, 2, 0         //13
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 3,
            3, 4, 5,
            5, 4, 6,

            9, 8, 7,
            10, 8, 9,
            12, 11, 10,
            13, 11, 12
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1
            
			
		];
		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

