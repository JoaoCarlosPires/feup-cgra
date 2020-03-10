/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			0, 2, 0,	//1
			-1, 1, 0,	//2
			-1, 3, 0,	//3

			0, 0, 0,	//00
			0, 2, 0,	//11
			-1, 1, 0,	//22
			-1, 3, 0	//33
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3,
			3, 2, 0,
			2, 3, 1,
			1, 0, 2
		];

		this.normals = [];
		
		this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
		this.normals.push(0, 0, 1); //3

		this.normals.push(0, 0, -1); //00
		this.normals.push(0, 0, -1); //11
		this.normals.push(0, 0, -1); //22
		this.normals.push(0, 0, -1); //33

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

