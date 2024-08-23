import React, { useRef } from 'react';
import './MouseHoverEffect.css';

const MouseHoverEffect = () => {
  const cardsContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = Array.from(cardsContainerRef.current.querySelectorAll('.card-Effect'));

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <div id="cards" ref={cardsContainerRef} onMouseMove={handleMouseMove}>
      <div className="bg-red">Card-Effect 1</div>
      <div className="card-Effect">Card-Effect 2</div>
      <div className="card-Effect">Card-Effect 3</div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default MouseHoverEffect;
