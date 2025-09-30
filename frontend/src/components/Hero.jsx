import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {

  const [i, setI] = useState(0);
  const str = "Are you ready to learn and increase your English vocabulary using our flashcard website, which has been carefully designed not only to introduce you to a wide range of useful words and phrases drawn from everyday conversations, academic writing, and professional contexts, but also to help you remember them more effectively through interactive repetition, smart categorization, and adaptive quizzes that adjust to your progress, while simultaneously providing you with engaging examples, pronunciation guides, and contextual sentences so that each new word becomes part of your active knowledge, allowing you to express yourself more clearly, understand more complex materials with confidence, and steadily expand your linguistic skills in a way that feels enjoyable, rewarding, and motivating, ultimately supporting your journey toward fluency, accuracy, and long-term mastery of English communication.";
  const s = str.split(" ");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setI((i + 1) % s.length);
    }, 200);
  };

  //Are you ready to learn and increase your English vocabulary using our flashcard website, which has been carefully designed not only to introduce you to a wide range of useful words and phrases drawn from everyday conversations, academic writing, and professional contexts, but also to help you remember them more effectively through interactive repetition, smart categorization, and adaptive quizzes that adjust to your progress, while simultaneously providing you with engaging examples, pronunciation guides, and contextual sentences so that each new word becomes part of your active knowledge, allowing you to express yourself more clearly, understand more complex materials with confidence, and steadily expand your linguistic skills in a way that feels enjoyable, rewarding, and motivating, ultimately supporting your journey toward fluency, accuracy, and long-term mastery of English communication.

  return (
    <div className="hero-container" onClick={handleClick}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Duo</h2>
            <p>{s[i]}</p>
          </div>
          <div className="flip-card-back">
            <h2>Axiom</h2>
            <p>{s[i]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
