import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("3d-container").appendChild(renderer.domElement);
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      "/assets/models/otto_clean_v2.fbx",
      (object) => {
        if (window.innerWidth < 640) {
          object.scale.set(0.009, 0.012, 0.01);
        } else {
          object.scale.set(0.01, 0.013, 0.01);
        }
        scene.add(object);
        function animate() {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
          object.rotation.y += 0.01;
        }
        animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    const light = new THREE.AmbientLight(0x251bf2); // soft white light
    scene.add(light);

    var loader = new THREE.ObjectLoader();
    // load a resource
    loader.load(
      // resource URL
      "/assets/models/lighting.json",
      // Function when resource is loaded
      function (loadedScene) {
        scene.add(loadedScene);
      }
    );

    camera.position.z = 290;

    // Add event listener to resize renderer when window size changes
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Return cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className="align-middle " ref={mountRef} id="3d-container" />;
};

export default ThreeScene;
