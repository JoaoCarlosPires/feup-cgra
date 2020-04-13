
#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {

    vec4 color = texture2D(uSampler1, vTextureCoord+timeFactor*0.005);

    vec4 filt = texture2D(uSampler1, vTextureCoord+timeFactor*0.005);

    color.rgb -= filt.rgb * 0.2;

    gl_FragColor = color;
}