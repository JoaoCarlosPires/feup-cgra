#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;

varying vec4 coords;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

	coords=gl_Position;
}
