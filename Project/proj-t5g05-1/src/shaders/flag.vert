#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float offsetZ;
uniform sampler2D uSampler1;

uniform float timeFactor;
uniform float speed;
uniform int side;

void main() {
    vec3 offset=vec3(0.0,0.0,0.0);

    offset.z = 0.08*sin((aVertexPosition.x + timeFactor * speed )*15.0);
    
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

    vTextureCoord = aTextureCoord;
}