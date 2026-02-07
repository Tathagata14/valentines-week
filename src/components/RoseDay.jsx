import { useState } from "react";
import { motion } from "framer-motion";
import RoseGame from "./RoseGame";
import "../styles/rose.css";

function RoseDay() {
  const [revealed, setRevealed] = useState(false);
  const [burst, setBurst] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  const handleClick = () => {
    setRevealed(true);
    setBurst(true);

    // stop burst after animation
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <div className="rose-container">
      {/* Floating hearts (background) */}
      <div className="heart">❤️</div>
      <div className="heart">💖</div>
      <div className="heart">💘</div>

      {/* INTRO */}
      {!revealed && (
        <div className="intro">
          <motion.h1
            className="rose-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I have something special for you 💌
          </motion.h1>

          <motion.button
            className="rose-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
          >
            Click Here ❤️
          </motion.button>
        </div>
      )}

      {/* REVEAL / GAME */}
      {revealed && (
        <>
          {!playGame ? (
            <div className="reveal">
              <motion.div
                className="big-rose"
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.3, ease: "backOut" }}
              >
                🌹
              </motion.div>
<motion.p
  className="final-message"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9, duration: 1 }}
>
  My love,
  <br /><br />
  On this Rose Day, I want to give you more than just a rose—I want to give you my words, because they come straight from my heart.
  <br /><br />
  Just like a rose, you bring color to my life, fragrance to my days, and warmth to my soul. Every time I think of you, my heart smiles a little more. Your presence makes ordinary moments feel special, and your love makes me feel like the luckiest person alive.
  <br /><br />
  This rose is a small symbol of what you mean to me—beautiful, precious, and impossible to replace. I promise to cherish you, care for you, and stand by you, not just today, but every day we share together.
  <br /><br />
  Thank you for being you, for loving me the way you do, and for making my world brighter just by being in it.
  <br /><br />
  <strong>Happy Rose Day, my beautiful rose. 🌹</strong>
  <br />
  Forever yours,
</motion.p>


              <motion.button
                className="rose-btn"
                whileHover={{ scale: 1.1 }}
                onClick={() => setPlayGame(true)}
              >
                Give Your Answer
              </motion.button>
            </div>
          ) : (
            <RoseGame onFinish={() => setPlayGame(false)} />
          )}
        </>
      )}

      {/* HEART BURST */}
      {burst && (
        <div className="heart-burst">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="burst-heart"
              style={{
                "--angle": `${(360 / 20) * i}deg`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default RoseDay;
