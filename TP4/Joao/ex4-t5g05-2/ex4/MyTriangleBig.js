/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, -2, 0,	//0
			-2, 0, 0,	//1
			0, 2, 0,	//2

			0, -2, 0,	//00
			-2, 0, 0,	//11
			0, 2, 0		//22
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
			0, 1, 2
		];

		this.normals = [];
		
		this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2

		this.normals.push(0, 0, -1); //00
		this.normals.push(0, 0, -1); //11
		this.normals.push(0, 0, -1); //22

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

