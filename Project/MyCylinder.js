/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCylinder extends CGFobject {
	constructor(scene, altura, lados) {
		super(scene);
		this.altura = altura;
		this.lados = lados;
		this.initBuffers();
	}
	initBuffers() {
		this.angle=2*Math.PI/this.lados;
		this.auxangle=0;
		this.vertices = [];
		this.normals = [];
		this.indices = [];

		for (let i = 0; i < this.lados; i++) {
			this.vertices.push(Math.cos(this.auxangle),0,-Math.sin(this.auxangle));
			this.normals.push(Math.cos(this.auxangle),0,-Math.sin(this.auxangle));
			this.auxangle+=this.angle;
		}

		this.auxangle=0;
		for (let i = 0; i < this.lados; i++) {
			this.vertices.push(Math.cos(this.auxangle),this.altura,-Math.sin(this.auxangle));
			this.normals.push(Math.cos(this.auxangle),0,-Math.sin(this.auxangle));
			this.auxangle+=this.angle;
		}	

		this.vertices.push(0,0,0);
		this.normals.push(0,-1,0);
		this.vertices.push(0, this.altura, 0);
		this.normals.push(0,1,0);

		//Lateral1
		for (let i = 0; i < this.lados; i++) {
			if (i+1 < this.lados) {
				this.indices.push(i, i+1, i+1+this.lados);
			} else {
				this.indices.push(i, 0, this.lados);
			}
		}

		//Lateral2
		for (let i = 0; i < this.lados; i++) {
			if (i+1+this.lados >= 2*this.lados) {
				this.indices.push(i, this.lados, i+this.lados);
			} else {
				this.indices.push(i, i+1+this.lados, i+this.lados);
			}
		}

		//Bases
		var current = 0;
		for (let i = 1; i <= 2*this.lados; i++) {
			if (current < this.lados) {
				if (current+1 == this.lados) {
					this.indices.push(current, 0, 2*this.lados);
					this.indices.push(2*this.lados, 0, current);
				} else {
					this.indices.push(current, current+1, 2*this.lados);
					this.indices.push(2*this.lados, current+1, current);
				}
			} else {
				if (current+1 == 2*this.lados) {
					this.indices.push(current, this.lados, 2*this.lados+1);
					this.indices.push(2*this.lados+1, this.lados, current);
				} else {
					this.indices.push(current, current+1, 2*this.lados+1);
					this.indices.push(2*this.lados+1, current+1, current);
				}
			}
			current++;
		}


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}