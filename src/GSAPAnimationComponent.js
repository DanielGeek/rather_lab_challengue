import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GSAPAnimationComponent = () => {
    useEffect(() => {
        gsap.fromTo(".my-element", { x: 0 }, { x: 100, duration: 1 });
    }, []);

    return <div className="my-element">Animate Me</div>;
};


export default GSAPAnimationComponent;
