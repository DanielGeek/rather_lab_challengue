import React from 'react';
import './index.css'; // Global styles
import ThreeDModel from './ThreeDModel'; // Your Three.js component
import MyLottieAnimation from './MyLottieAnimation'; // Your Lottie component
import GSAPAnimationComponent from './GSAPAnimationComponent'; // Example component for GSAP animations
import Modal from './Modal'; // Example Framer Motion modal component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Showcase</h1>
      </header>
      <main>
        {/* Three.js 3D Model Viewer */}
        <section>
          <h2>3D Model</h2>
          <ThreeDModel />
        </section>

        {/* Framer Motion Modal Example */}
        <section>
          <h2>Interactive Modal</h2>
          <Modal />
        </section>

        {/* GSAP Animation Example */}
        <section>
          <h2>GSAP Animation</h2>
          <GSAPAnimationComponent />
        </section>

        {/* Lottie Animation Example */}
        <section>
          <h2>Lottie Animation</h2>
          <MyLottieAnimation />
        </section>
      </main>
    </div>
  );
}

export default App;
