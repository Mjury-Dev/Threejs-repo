const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

//camera
const angle = 20; // degree
const cameraDistance = 8.7; // distance
const cameraHeight = Math.tan(THREE.MathUtils.degToRad(angle)) * cameraDistance;

camera.position.set(0, cameraHeight, cameraDistance); 

// Look at the center of the scene
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// renderer with shadow map
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Create a bed
const bedGeometry = new THREE.BoxGeometry(2, 0.5, 3); 
const bedMaterial = new THREE.MeshStandardMaterial({ color: 0x996633 }); 
const bedMesh = new THREE.Mesh(bedGeometry, bedMaterial);
bedMesh.position.set(-3, 0.25, 0); 
bedMesh.castShadow = true; 
scene.add(bedMesh);

// Create red foam on the bed
const foamGeometry = new THREE.BoxGeometry(2.001, 0.29, 3.1); 
const foamMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); 
const foamMesh = new THREE.Mesh(foamGeometry, foamMaterial);
foamMesh.position.set(-3, 0.375, 0);
scene.add(foamMesh);

// Create a white pillow on the bed
const pillowGeometry = new THREE.BoxGeometry(1.91, 0.2, 0.8); 
const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const pillowMesh = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillowMesh.position.set(-2.96, 0.50, -1); 
scene.add(pillowMesh);

// corner positions for the legs
const bedHalfWidth = bedGeometry.parameters.width / 2;
const bedHalfDepth = bedGeometry.parameters.depth / 2;

// Table legs
const legGeometry = new THREE.BoxGeometry(0.2, 1, 0.2); 
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x996633 }); 

    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    leg1.position.set(bedMesh.position.x - bedHalfWidth + 0.1, bedMesh.position.y - 0.25, bedMesh.position.z + bedHalfDepth - 0.1);
    leg1.castShadow = true; 
    scene.add(leg1);

    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(bedMesh.position.x - bedHalfWidth + 0.1, bedMesh.position.y - 0.25, bedMesh.position.z - bedHalfDepth + 0.1);
    leg2.castShadow = true; 
    scene.add(leg2);

    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    leg3.position.set(bedMesh.position.x + bedHalfWidth - 0.1, bedMesh.position.y - 0.25, bedMesh.position.z + bedHalfDepth - 0.1);
    leg3.castShadow = true; 
    scene.add(leg3);

    const leg4 = new THREE.Mesh(legGeometry, legMaterial);
    leg4.position.set(bedMesh.position.x + bedHalfWidth - 0.1, bedMesh.position.y - 0.25, bedMesh.position.z - bedHalfDepth + 0.1);
    leg4.castShadow = true; 
    scene.add(leg4);


// Middle Wall
const upperWallGeometry = new THREE.BoxGeometry(10, 6, 0.5); 
const upperWallMaterial = new THREE.MeshStandardMaterial({ color: 0xA52A2A });
const upperWallMesh = new THREE.Mesh(upperWallGeometry, upperWallMaterial);
upperWallMesh.position.set(0, 1, -5); 
scene.add(upperWallMesh);

//Left side Wall
const leftWallGeometry = new THREE.BoxGeometry(0.5, 6, 10); 
const leftWallMaterial = new THREE.MeshStandardMaterial({ color: 0xA52A2A }); 
const leftWallMesh = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWallMesh.position.set(-5, 1, 0); 
scene.add(leftWallMesh);

// Right side Wall
const rightWallGeometry = new THREE.BoxGeometry(0.5, 6, 10); 
const rightWallMaterial = new THREE.MeshStandardMaterial({ color: 0xA52A2A }); 
const rightWallMesh = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWallMesh.position.set(5, 1, 0); 
scene.add(rightWallMesh);

// Create a window
const rectangleGeometry = new THREE.BoxGeometry(0.2, 1.7, 3); 
const rectangleMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); 
const rectangleMesh = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
rectangleMesh.position.set(-4.2, 1.8, .2); 
scene.add(rectangleMesh);

    // window black
    const blackRectangleGeometry = new THREE.BoxGeometry(0.1, 1.3, 1); 
    const blackRectangleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); 

    const blackRectangle1 = new THREE.Mesh(blackRectangleGeometry, blackRectangleMaterial);
    blackRectangle1.position.set(-3.9, 1.9, 0.2); 
    scene.add(blackRectangle1);

    const blackRectangle2 = new THREE.Mesh(blackRectangleGeometry, blackRectangleMaterial);
    blackRectangle2.position.set(-3.9, 1.9, 1.6); 
    scene.add(blackRectangle2);

// Create a table
const tableGeometry = new THREE.BoxGeometry(3, 1.4, 1.9);
const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x800080}); 
const tableMesh = new THREE.Mesh(tableGeometry, tableMaterial);
tableMesh.position.set(-3, 0.1, -3); 
scene.add(tableMesh);

// Book 1
const bookGeometry = new THREE.BoxGeometry(0.3, 0.7, 0.7); 
const bookMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 }); 
const bookMesh = new THREE.Mesh(bookGeometry, bookMaterial);
bookMesh.position.set(-2, 1.25, -3);
scene.add(bookMesh);

// Book 2
const book2Geometry = new THREE.BoxGeometry(0.3, 0.7, 0.7);
const book2Material = new THREE.MeshStandardMaterial({ color: 0xc1ebdd }); 
const book2Mesh = new THREE.Mesh(book2Geometry, book2Material);
book2Mesh.position.set(-2.4, 1.25, -3); 
scene.add(book2Mesh);

//book 3
const book3Geometry = new THREE.BoxGeometry(0.9, 0.4, 0.7); 
const book3Material = new THREE.MeshStandardMaterial({ color: 0x9370db }); 
const book3Mesh = new THREE.Mesh(book3Geometry, book3Material);
book3Mesh.position.set(-3.7, 1, -3); 
scene.add(book3Mesh);

//table2
const table2Geometry = new THREE.BoxGeometry(6, .3, 1.9); 
const table2Material = new THREE.MeshStandardMaterial({ color: 0x4E3D2E }); 
const table2Mesh = new THREE.Mesh(table2Geometry, table2Material);
table2Mesh.position.set(3.8, 0.7, -3); 
scene.add(table2Mesh);

    //table2.2
    const connectingTableGeometry = new THREE.BoxGeometry(1.5, 0.3, 4); 
    const connectingTableMaterial = new THREE.MeshStandardMaterial({ color: 0x4E3D2E }); 
    const connectingTableMesh = new THREE.Mesh(connectingTableGeometry, connectingTableMaterial);
    connectingTableMesh.position.set(4.55, 0.7, -0.5); 
    scene.add(connectingTableMesh);

    //table2.3
    const connectinglegTableGeometry = new THREE.BoxGeometry(0.2, 1.2, 5.5);
    const connectinglegTableMaterial = new THREE.MeshStandardMaterial({ color: 0x4E3D2E });
    const connectinglegTableMesh = new THREE.Mesh(connectinglegTableGeometry, connectinglegTableMaterial);
    connectinglegTableMesh.position.set(4.99, 0.15, -1.48); 
    scene.add(connectinglegTableMesh);

//paper
const paperGeometry= new THREE.BoxGeometry(1, 0.5, 1.5); 
const paperMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff}); 
const paperMesh = new THREE.Mesh(paperGeometry, paperMaterial);
paperMesh.position.set(4.55, 0.7, -0.5);
scene.add(paperMesh);

//pen
const penGeometry= new THREE.BoxGeometry(.7, 0.5, 0.1); 
const penMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000});  
const penMesh = new THREE.Mesh(penGeometry, penMaterial);
penMesh.position.set(4.5, 0.7, .7); 
scene.add(penMesh);

// carpet on the floor
const carpetGeometry = new THREE.CircleGeometry(3, 32); 
const carpetMaterial = new THREE.MeshStandardMaterial({ color: 0xF5F5DC  }); 
const carpetMesh = new THREE.Mesh(carpetGeometry, carpetMaterial);
carpetMesh.rotation.x = -Math.PI / 2; 
carpetMesh.position.y = -0.49; 
scene.add(carpetMesh);

    // Glow on Carpet
    const carpetLight = new THREE.PointLight(0xF5F5DC, 30, 1000); 
    carpetLight.position.set(0, 1.7, 0); 
    scene.add(carpetLight);

// shadows (floor)
const floorGeometry = new THREE.PlaneGeometry(10.2, 10.2);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xA0522D });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; 
floorMesh.position.y = -0.5; 
floorMesh.receiveShadow = true; 
scene.add(floorMesh);

// moon lamp light
const lightGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const lightMaterial = new THREE.MeshBasicMaterial({ color: 0xB3E0FF }); 
const lightSphere = new THREE.Mesh(lightGeometry, lightMaterial);

// Moon Lamp
const pointLight = new THREE.PointLight(0xB3E0FF, 15, 10); 
pointLight.position.set(3.8, 1.4, -3); 
pointLight.castShadow = true; 
scene.add(pointLight);
lightSphere.position.copy(pointLight.position);
scene.add(lightSphere);

// cylinder chair
const characterRadius = 0.3;
const characterHeight = 1.5;
const characterSegments = 16;

const characterGeometry = new THREE.CylinderGeometry(characterRadius, characterRadius, characterHeight, characterSegments);
const characterMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); 
const characterMesh = new THREE.Mesh(characterGeometry, characterMaterial);
characterMesh.position.set(3.5, 0.7 - characterHeight / 1.3, -0.5); 
scene.add(characterMesh);


// Floor size
floorMesh.scale.set(1.03, 1.5, 2.1); 


// hemisphere light (light yellow)
const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5); 
scene.add(hemisphereLight);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

//directional light for shadows
const directionalLight = new THREE.DirectionalLight(0xffffff, -0.3);
directionalLight.position.set(5, 5, 5); 
directionalLight.castShadow = true; 
scene.add(directionalLight);


//animate 
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
window.addEventListener('resize', onWindowResize, false);
animate();