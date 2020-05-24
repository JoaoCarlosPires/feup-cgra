attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float offsetZ;

uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {

	vec4 color = texture2D(uSampler2, aTextureCoord);
	offsetZ = color.b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.xy, aVertexPosition.z + offsetZ*0.5, 1.0);

	vTextureCoord = aTextureCoord;
}

