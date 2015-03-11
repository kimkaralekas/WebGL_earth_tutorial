var scene,
    camera,
    light,
    renderer,
    earthObject;
 
var WIDTH = window.innerWidth - 30,
    HEIGHT = window.innerHeight - 30;
 
var angle = 45,
    aspect = WIDTH / HEIGHT,
    near = 0.1,
    far = 3000;