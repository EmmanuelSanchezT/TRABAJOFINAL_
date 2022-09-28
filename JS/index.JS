//Escenario

const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load ('../IMÁGENES/FondodeProgramación.jpg', function (texture) {
    scene.background = texture;
});

//Camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Personaje 1

const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('../IMÁGENES/Mujer/Mujer.gltf', 

(gltf) => {
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(60,60,60);

    loaderObjeto.position.x = -90;
    loaderObjeto.position.y = -100;
    /* loaderObjeto.position.z = 500;   */
    scene.add(loaderObjeto);
    console.log('carga completa');

},  () => {
    console.log('cargando');

}, () => {
    console.log('error');

}
);

//Personaje 2


gltfLoader.load('../IMÁGENES/Hombre/Hombre.gltf', 
(gltf) => {
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(60,60,60);
    
     loaderObjeto2.position.x = -140; 
    loaderObjeto2.position.y = -100;
    /* loaderObjeto.position.z = 500;   */
    scene.add(loaderObjeto2);
    console.log('carga completa');
},  () => {
    console.log('cargando');

}, () => {
    console.log('error');

}
);


//Carro

gltfLoader.load('../IMÁGENES/ford_ranger_police/scene.gltf', 
(gltf) => {
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(0.5,0.5,0.5);

    loaderObjeto3.position.x = 100;
    loaderObjeto3.position.y = -55;
    /* loaderObjeto.position.z = 500;   */
    scene.add(loaderObjeto3);
    console.log('carga completa');

    let objects = [loaderObjeto3]

    const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
    DragControls.enabled = true;
    
    DragControls.deactivate();
    DragControls.activate();
    
    DragControls.addEventListener("hoveron", function (event){
    
        //console.log.apply(event.object)
        event.object.material.wireframe = true;
        event.object.scale.y *=1;
    });
    
    DragControls.addEventListener("hoveroff", function (event){
    
        //console.log.apply(event.object)
         event.object.material.wireframe = false;
         event.object.scale.y /=1;
     });
},  () => {
    console.log('cargando');

}, () => {
    console.log('error');

}
);

//Luces

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
scene.add( directionalLight );

const light = new THREE.AmbientLight( 0x404040, 8 ); // soft white light
scene.add( light );

// Posicion camera

camera.position.z = 140;

//Animación 

function animate() {
	requestAnimationFrame ( animate );
	renderer.render ( scene, camera);
}
animate();