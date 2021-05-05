
uniform float time;
uniform vec2 mousePos;
uniform sampler2DRect img;


// vec2 (x,y)
// vec3 (x,y,z)  / (r,g,b)
// vec4 (x,y,z,w)


void main(){
    
    
    
    float x = gl_FragCoord.x + tan(gl_FragCoord.x*0.01 + time)*40.0;
    float y = 700.0 - gl_FragCoord.y + tan(gl_FragCoord.y*0.01 - time)*20.0;
    
    vec3 color = texture2DRect(img, vec2(x,y)).rgb;
    gl_FragColor = vec4(color, 1.0);


}
