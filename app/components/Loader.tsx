"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <StyledWrapper>
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="floating-emoji"
        style={{ top: '10%', left: '15%' }}
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="floating-emoji"
        style={{ top: '20%', right: '20%' }}
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        className="floating-emoji"
        style={{ bottom: '25%', left: '20%' }}
      >
              </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
        className="floating-emoji"
        style={{ bottom: '15%', right: '15%' }}
      >
        🎀
      </motion.div>

      <div className="main">
        <div className="cat">
          <div className="cat__body">
            <div className="cat__tail" />
          </div>
          <div className="cat__paws">
            <div className="cat__paw cat__paw--left" />
            <div className="cat__paw cat__paw--right" />
          </div>
          <div className="cat__head">
            <div className="cat__ear cat__ear--left" />
            <div className="cat__ear cat__ear--right" />
            <div className="cat__eye cat__eye--left" />
            <div className="cat__eye cat__eye--right" />
            <div className="cat__nose" />
            <div className="cat__mouth" />
            <div className="cat__whiskers-l" />
            <div className="cat__whiskers-r" />
          </div>
        </div>
        
        {/* Sparkle effects around cat */}
        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="sparkle"
          style={{ top: '-20%', left: '10%' }}
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="sparkle"
          style={{ top: '-10%', right: '5%' }}
        >
          ✨
        </motion.div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .floating-emoji {
    position: absolute;
    font-size: 2rem;
    opacity: 0.6;
    pointer-events: none;
  }

  .sparkle {
    position: absolute;
    font-size: 1.2rem;
    pointer-events: none;
  }

  .main {
    position: relative;
    width: 12vmax;
    height: 12vmax;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cat {
    position: relative;
    width: 12vmax;
    height: 10vmax;
    filter: drop-shadow(0 10px 30px rgba(255, 93, 143, 0.3));
  }

  .cat::before {
    content: "";
    position: absolute;
    bottom: -0.5vmax;
    left: 50%;
    transform: translateX(-50%);
    width: 9vmax;
    height: 1.2vmax;
    background: radial-gradient(ellipse, rgba(255, 93, 143, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -10;
    animation: shadow 8s ease-in-out infinite;
  }

  .cat__body {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 9vmax;
    height: 6vmax;
    background: linear-gradient(180deg, #ffb3c1 0%, #ff85a1 50%, #ff5d8f 100%);
    border-radius: 50% 50% 30% 30% / 60% 60% 40% 40%;
    z-index: -1;
    animation: body-bob 8s ease-in-out infinite;
  }

  .cat__paws {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6.5vmax;
    height: 1.8vmax;
    z-index: 2;
    animation: body-bob 8s ease-in-out infinite;
  }

  .cat__paw {
    position: absolute;
    bottom: 0;
    width: 2.4vmax;
    height: 1.5vmax;
    background: linear-gradient(180deg, #ffc8d6 0%, #ffb3c1 100%);
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    box-shadow: 0 2px 10px rgba(255, 93, 143, 0.2);
  }

  .cat__paw--left {
    left: 0;
  }
  .cat__paw--right {
    right: 0;
  }

  .cat__tail {
    position: absolute;
    bottom: 0.6vmax;
    left: -2.5vmax;
    width: 7vmax;
    height: 1.5vmax;
    background: linear-gradient(90deg, #ff5d8f 0%, #ffb3c1 100%);
    border-radius: 1vmax;
    transform-origin: 100% 50%;
    transform: rotate(30deg);
    animation: tail-sway 8s ease-in-out infinite;
  }

  .cat__head {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 7vmax;
    height: 6.5vmax;
    background: linear-gradient(180deg, #fff5f8 0%, #ffe4e9 50%, #ffc8d6 100%);
    border-radius: 50%;
    animation: head-turn 8s ease-in-out infinite;
    box-shadow: 0 5px 20px rgba(255, 93, 143, 0.15);
  }

  .cat__ear {
    position: absolute;
    top: -0.8vmax;
    width: 3vmax;
    height: 3vmax;
    background: linear-gradient(180deg, #ffb3c1 0%, #ff85a1 100%);
    z-index: -1;
  }

  .cat__ear::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background: linear-gradient(180deg, #ffd6e7 0%, #ffc8d6 100%);
  }

  .cat__ear--left {
    left: -0.8vmax;
    border-radius: 5% 70% 5% 50%;
    transform: rotate(-15deg);
    animation: ear-twitch-left 8s ease-in-out infinite;
  }
  .cat__ear--left::before {
    border-radius: 5% 70% 5% 50%;
  }

  .cat__ear--right {
    right: -0.8vmax;
    border-radius: 70% 5% 50% 5%;
    transform: rotate(15deg);
    animation: ear-twitch-right 8s ease-in-out infinite;
  }
  .cat__ear--right::before {
    border-radius: 70% 5% 50% 5%;
  }

  .cat__eye {
    position: absolute;
    top: 2.5vmax;
    width: 1.5vmax;
    height: 1.5vmax;
    background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
    border-radius: 50%;
    animation: blink 8s linear infinite;
  }

  .cat__eye::before {
    content: "";
    position: absolute;
    left: 30%;
    top: 20%;
    width: 0.4vmax;
    height: 0.4vmax;
    background: white;
    border-radius: 50%;
  }

  .cat__eye--left {
    left: 1.2vmax;
  }

  .cat__eye--right {
    right: 1.2vmax;
  }

  .cat__nose {
    position: absolute;
    top: 3.8vmax;
    left: 50%;
    transform: translateX(-50%);
    width: 1vmax;
    height: 0.7vmax;
    background: linear-gradient(180deg, #ff5d8f 0%, #ff85a1 100%);
    border-radius: 30% 30% 50% 50%;
  }

  .cat__mouth {
    position: absolute;
    top: 4.5vmax;
    left: 50%;
    width: 2vmax;
    height: 1vmax;
    transform: translateX(-50%);
    animation: meow 8s ease-in-out infinite;
  }

  .cat__mouth::before,
  .cat__mouth::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    border-style: solid;
    border-color: #2d2d2d;
    border-width: 0 0 0.15vmax 0;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
  }
  .cat__mouth::before {
    left: 0;
    transform: rotate(10deg);
  }
  .cat__mouth::after {
    right: 0;
    transform: rotate(-10deg);
  }

  .cat__whiskers-l,
  .cat__whiskers-r {
    position: absolute;
    top: 4.5vmax;
    width: 3vmax;
    height: 2vmax;
  }

  .cat__whiskers-l {
    left: -0.5vmax;
    transform: rotate(10deg);
  }

  .cat__whiskers-r {
    right: -0.5vmax;
    transform: rotate(-10deg);
  }

  .cat__whiskers-l::before,
  .cat__whiskers-l::after,
  .cat__whiskers-r::before,
  .cat__whiskers-r::after {
    content: "";
    position: absolute;
    height: 0.1vmax;
    background-color: rgba(45, 45, 45, 0.3);
    border-radius: 0.05vmax;
  }

  .cat__whiskers-l::before {
    width: 80%;
    top: 0;
    left: 0;
    transform: rotate(-10deg);
  }
  .cat__whiskers-l::after {
    width: 100%;
    top: 0.8vmax;
    left: 0;
  }

  .cat__whiskers-r::before {
    width: 80%;
    top: 0;
    right: 0;
    transform: rotate(10deg);
  }
  .cat__whiskers-r::after {
    width: 100%;
    top: 0.8vmax;
    right: 0;
  }

  /* Keyframe Animations */
  @keyframes head-turn {
    0%, 100% {
      transform: translateX(-50%) rotate(0deg);
    }
    20% {
      transform: translateX(-55%) rotate(-5deg);
    }
    60% {
      transform: translateX(-45%) rotate(5deg);
    }
    80% {
      transform: translateX(-50%) rotate(0deg);
    }
  }

  @keyframes tail-sway {
    0%, 20%, 100% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-25deg);
    }
  }

  @keyframes blink {
    0%, 38%, 41%, 88%, 91%, 100% {
      transform: scaleY(1);
    }
    40%, 90% {
      transform: scaleY(0.1);
    }
  }

  @keyframes body-bob {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 0.3vmax;
    }
  }

  @keyframes ear-twitch-left {
    0%, 50%, 100% {
      transform: rotate(-15deg);
    }
    55% {
      transform: rotate(-25deg);
    }
    60% {
      transform: rotate(-15deg);
    }
  }

  @keyframes ear-twitch-right {
    0%, 70%, 100% {
      transform: rotate(15deg);
    }
    75% {
      transform: rotate(25deg);
    }
    80% {
      transform: rotate(15deg);
    }
  }

  @keyframes meow {
    0%, 50%, 60%, 100% {
      transform: translateX(-50%) scaleY(1);
    }
    55% {
      transform: translateX(-50%) scaleY(1.3);
    }
  }

  @keyframes shadow {
    0%, 100% {
      width: 9vmax;
      opacity: 0.6;
    }
    50% {
      width: 10vmax;
      opacity: 0.4;
    }
  }
`;

export default Loader;
