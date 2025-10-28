import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [i, setI] = useState(0);
  const str =
    "Are you ready to learn and increase your English vocabulary using our flashcard website, which has been carefully designed not only to introduce you to a wide range of useful words and phrases drawn from everyday conversations, academic writing, and professional contexts, but also to help you remember them more effectively through interactive repetition, smart categorization, and adaptive quizzes that adjust to your progress, while simultaneously providing you with engaging examples, pronunciation guides, and contextual sentences so that each new word becomes part of your active knowledge, allowing you to express yourself more clearly, understand more complex materials with confidence, and steadily expand your linguistic skills in a way that feels enjoyable, rewarding, and motivating, ultimately supporting your journey toward fluency, accuracy, and long-term mastery of English communication.";
  const s = str.split(" ");
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prevFlipped) => !prevFlipped);

      setTimeout(() => {
        setI((prevI) => (prevI + 1) % s.length);
      }, 380);
    }, 1000); // Flip every 1s

    return () => clearInterval(interval);
  }, [s.length]);

  //Are you ready to learn and increase your English vocabulary using our flashcard website, which has been carefully designed not only to introduce you to a wide range of useful words and phrases drawn from everyday conversations, academic writing, and professional contexts, but also to help you remember them more effectively through interactive repetition, smart categorization, and adaptive quizzes that adjust to your progress, while simultaneously providing you with engaging examples, pronunciation guides, and contextual sentences so that each new word becomes part of your active knowledge, allowing you to express yourself more clearly, understand more complex materials with confidence, and steadily expand your linguistic skills in a way that feels enjoyable, rewarding, and motivating, ultimately supporting your journey toward fluency, accuracy, and long-term mastery of English communication.

  return (
    <>
      <div className="flex min-h-screen items-center justify-between bg-gray-100">
        <div className="w-100 flex-col">
          <div className="mb-10 rounded-r-2xl bg-[#6dddea] p-10">Button 1</div>
          <div className="mb-10 rounded-r-2xl bg-[#ff8dbb] p-10">Button 2</div>
          <div className="mb-10 rounded-r-2xl bg-[#6dddea] p-10">Button 3</div>
        </div>
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, rotateY: 0 }}
            animate={{ opacity: 1, rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flip-card"
          >
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
          </motion.div>
        </div>
        <div className="w-100 flex-col">
          <div className="mb-10 rounded-l-2xl bg-[#6dddea] p-10">Button 1</div>
          <div className="mb-10 rounded-l-2xl bg-[#ff8dbb] p-10">Button 2</div>
          <div className="mb-10 rounded-l-2xl bg-[#6dddea] p-10">Button 3</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
