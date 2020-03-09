class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, -0.5, -0.5,	//0
		    -0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,	//2
            -0.5, 0.5, -0.5,	//3

            0.5, -0.5, 0.5,	//4
		    -0.5, -0.5, 0.5,	//5
			0.5, 0.5, 0.5,	//6
            -0.5, 0.5, 0.5	//7
            
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //left
            4, 5, 0,
            5, 1, 0,
            
            //front
            2, 4, 0,
            6, 4, 2,

            //right
            3, 6, 2,
            7, 6, 3,

            //back
            1, 7, 3,
            1, 5, 7,

            //top
            6, 5, 4,
            7, 5, 6,

            //bottom clockwise to see the back
            0, 1, 2,
            2, 1, 3,
            
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}