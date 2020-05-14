class MyRectangle extends CGFobject {
	constructor(scene, x, y) {
        super(scene);
        this.x = x;
        this.y = y;
        this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            this.x/2, this.y/2, 0,
            this.x/2, -this.y/2, 0,
            -this.x/2, -this.y/2, 0,
            -this.x/2, this.y/2, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            
            0, 1, 2, //0
            2, 1, 0, //1
            
			2, 3, 0, //2
			0, 3, 2, //3

			0, 1, 2, //00
            2, 1, 0, //11
            
			2, 3, 0, //22
			0, 3, 2, //33
        ];
        
        this.normals = [];

        this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
		this.normals.push(0, 0, 1); //3

		this.normals.push(0, 0, 1); //00
		this.normals.push(0, 0, 1); //11
		this.normals.push(0, 0, 1); //22
		this.normals.push(0, 0, 1); //33
		

		this.texCoords = [
			1, 0,
			1, 1,
			0, 1,
			0, 0,

			1, 0,
			1, 1,
			0, 1,
			0, 0,
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	display() {
		this.scene.pushMatrix();
        super.display();
        this.scene.popMatrix();
	}
	
}