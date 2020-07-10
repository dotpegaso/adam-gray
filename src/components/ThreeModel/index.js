/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import model3D from '../../resources/three/hella_slingshots.fbx'

const ThreeElement = ({height,width, id, model}) => {
  
  const object = model

	let container; let controls
	let camera; let scene; let renderer; let light
  let mixer
  
  function onWindowResize() {
		camera.aspect = width / height 
		camera.updateProjectionMatrix()
		renderer.setSize(width / height )
  }
  
  function animate() {
		controls.update()
		requestAnimationFrame( animate )
		renderer.render( scene, camera )
	}

	function init() {
		container = document.createElement( 'div' )
		document.getElementById(id).appendChild( container )
		camera = new THREE.PerspectiveCamera( 45, width / height , 1, 2000)
		camera.position.z = 300
		camera.position.x = 0
		camera.position.y = 100

		camera.focus = 40

		scene = new THREE.Scene()

		light = new THREE.HemisphereLight( 0xffffff, 0x444444 )
		light.position.set( 0, 200, 0 )
		scene.add( light )

		light = new THREE.DirectionalLight( 0xffffff )
		light.position.set( 0, 200, 100 )
		light.castShadow = true
		light.shadow.camera.top = 180
		light.shadow.camera.bottom = - 100
		light.shadow.camera.left = - 120
		light.shadow.camera.right = 120
		scene.add( light )

		// model
		const loader = new FBXLoader()
		loader.load(object, loadedObject => {
			mixer = new THREE.AnimationMixer(loadedObject)
			const action = mixer.clipAction(loadedObject.animations[ 0 ])
			action.play()
			loadedObject.position.y = -90
			loadedObject.traverse(( child ) => {
				if ( child.isMesh ) {
					child.castShadow = true
					child.receiveShadow = true
				}
			} )
			scene.add( loadedObject )
		} )
		renderer = new THREE.WebGLRenderer({ alpha:true})
		renderer.setPixelRatio( window.devicePixelRatio )
		renderer.setSize(width , height)
		container.appendChild( renderer.domElement )
		controls = new OrbitControls( camera, renderer.domElement )
		controls.autoRotate = true
		controls.enabled = false
		controls.update()
		window.addEventListener( 'resize', onWindowResize, false )
  }
  
  useEffect(() => {
    // eslint-disable-next-line
    init()
    // eslint-disable-next-line
    animate()
    // eslint-disable-next-line
  }, [])

  return (
    <div id={id} className="containerThree" />
  )
}

export default ThreeElement
