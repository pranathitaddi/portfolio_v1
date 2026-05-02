"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Match the background color to the Tailwind theme config (#0a0a0a)
    scene.background = new THREE.Color('#0a0a0a');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Star Generation ---
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const posArray = new Float32Array(starCount * 3);
    
    // Create a large field of stars
    for(let i = 0; i < starCount * 3; i++) {
        // Spread stars in a wide range: -200 to +200 on X/Z, -400 to +200 on Y
        posArray[i] = (Math.random() - 0.5) * 400; 
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const starMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true, // Makes stars smaller when further away
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });
    
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    // Initial camera position
    camera.position.z = 50;
    camera.position.y = 0;

    // --- Interaction Logic ---
    let scrollY = window.scrollY;
    
    const handleScroll = () => {
        scrollY = window.scrollY;
    };
    
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    const animate = () => {
        requestAnimationFrame(animate);

        // Ambient rotation for life
        starMesh.rotation.y += 0.0002;
        starMesh.rotation.x += 0.0001;

        // Scroll "Follow" Effect
        // We move the camera down (negative Y) as the user scrolls down.
        // The factor 0.05 determines how "fast" we travel through the universe relative to scroll.
        const targetY = -scrollY * 0.05;
        
        // Smooth interpolation for the camera movement could be added here, 
        // but direct mapping feels more responsive for "scroll with me".
        camera.position.y = targetY;

        renderer.render(scene, camera);
    };

    animate();

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        starGeometry.dispose();
        starMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true" 
    />
  );
};

export default StarBackground;