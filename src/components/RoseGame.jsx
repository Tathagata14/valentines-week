import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/rose.css";

function RoseGame({ onFinish }) {
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [sure, setSure] = useState(false);

  const handleNo = () => {
    setYesScale((prev) => prev + 0.25);
    setSure(true);
  };

  const handleYes = () => {
    setAccepted(true);
  };

  // Keep success message visible, then close game
  useEffect(() => {
    if (accepted) {
      const timer = setTimeout(() => {
        onFinish();
      }, 15000); 

      return () => clearTimeout(timer);
    }
  }, [accepted, onFinish]);

  // AFTER YES SCREEN
  if (accepted) {
    return (
      <motion.div
        className="game-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Happy Rose Day 🌹
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I knew you’d say YES 💖  
          This rose is forever yours 😌
        </motion.p>
      </motion.div>
    );
  }

  // GAME SCREEN
  return (
    <div className="game-container">
      <h1>Will you accept this rose? 🌹</h1>

      {sure && (
        <motion.p
          className="sure-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Are you sure? 😏
        </motion.p>
      )}

      <div className="game-buttons">
        <motion.button
          className="yes-btn"
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale + 0.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={handleYes}
        >
          YES ❤️
        </motion.button>

        <motion.button
          className="no-btn"
          whileHover={{ scale: 1.05 }}
          onClick={handleNo}
        >
          NO 🙄
        </motion.button>
      </div>
    </div>
  );
}

export default RoseGame;
