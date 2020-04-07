class MyParallelogram extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();
    }
    
    initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
      1, 1, 0,	//2
      2, 0, 0,  //3
      2, 1, 0,  //4
      3, 1, 0,  //5

      0, 0, 0,	//0
			1, 0, 0,	//1
      1, 1, 0,	//2
      2, 0, 0,  //3
      2, 1, 0,  //4
      3, 1, 0,  //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 3,
            2, 3, 4,
            4, 3, 5,
            2, 1, 0,
            3, 1, 2,
            4, 3, 2,
            5, 3, 4
    ];
    
    this.normals = [];
		
		this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
    this.normals.push(0, 0, 1); //3
    this.normals.push(0, 0, 1); //4
    this.normals.push(0, 0, 1); //5

		this.normals.push(0, 0, -1); //00
		this.normals.push(0, 0, -1); //11
		this.normals.push(0, 0, -1); //22
    this.normals.push(0, 0, -1); //33
    this.normals.push(0, 0, -1); //44
    this.normals.push(0, 0, -1); //55
    
    this.texCoords = [
			0.25, 0.75,
			0.75, 0.75,
			0.50, 1,
			0.9, 0.9,

			0.25, 0.75,
			0.75, 0.75,
			0.5, 1,
			1, 1,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}  
}