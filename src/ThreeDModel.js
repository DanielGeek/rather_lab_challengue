import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const ThreeDModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 5;

        // Sphere geometry
        const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });
        const sphere = new THREE.Mesh(sphereGeometry, material);
        scene.add(sphere);

        // Bloom effect
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0;
        bloomPass.strength = 2; // Intensity of the bloom
        bloomPass.radius = 1;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        let step = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            // Animation logic
            step += 0.01;
            const scale = (Math.sin(step) + 1) / 2 + 0.5;
            sphere.scale.set(scale, scale, scale); // Animate scale

            // Add more transformation logic here
            // sphere.rotation.x += 0.01; // If you want to rotate the sphere

            composer.render();
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            // Clean up
            material.dispose();
            sphereGeometry.dispose();
            scene.remove(sphere);
        };
    }, []);

    return (
        <div className="container">
            <div ref={mountRef} className="three-canvas" />
        </div>
    );
};

export default ThreeDModel;
