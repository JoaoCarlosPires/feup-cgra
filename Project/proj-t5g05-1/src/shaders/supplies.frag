#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uSampler1;

uniform float timeFactor;

void main() {

	if (vTextureCoord.x >= uSampler1/5.0) {
		gl_FragColor =  vec4(0.5,0.5,0.5,1.0);
	} else {
		gl_FragColor =  vec4(1.0-vTextureCoord.x,vTextureCoord.x,0.0,1.0); 
	}
}