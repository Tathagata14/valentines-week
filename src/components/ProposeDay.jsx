import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/rose.css";

function ProposeDay() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [showSure, setShowSure] = useState(false);

  const handleNo = () => {
    setYesSize((prev) => prev + 0.25);
    setShowSure(true);
  };

  if (accepted) {
    return (
      <div className="rose-container">
        <motion.div
          className="reveal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="rose-title">💖 Happy Propose Day 💖</h1>

          <motion.div
            className="big-rose"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            💍
          </motion.div>

          <p className="final-message">
            You just made me the happiest person alive.  
            Thank you for choosing me — today and forever ❤️
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="rose-container">
      {!showQuestion ? (
        <motion.div
          className="love-letter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="final-message">
            <strong>My Love,</strong>
            <br /><br />
            From the moment you came into my life, something quietly but
            beautifully changed inside me. You became my favorite thought,
            my safest place, and the reason behind so many smiles I didn’t
            even realize I was smiling.
            <br /><br />
            With you, even ordinary moments feel special. Your laughter
            feels like home, your presence feels like peace, and your love
            feels like the kind of magic I never believed in until you
            showed me it was real.
            <br /><br />
            Today, on Propose Day, I don’t just want to ask you a question—
            I want to make you a promise. A promise to stand by you in every
            season, to hold your hand through every high and low, to choose
            you every single day.
            <br /><br />
            So here I am, with all my heart, asking you something simple but
            meant forever:
            <br /><br />
            <strong>
              Will you be mine — not just today, but for all the tomorrows
              that wait for us?
            </strong>
            <br /><br />
            Yours,<br />
            Always and forever ❤️
          </p>

          <motion.button
            className="rose-btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowQuestion(true)}
          >
            Answer me 💖
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="reveal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="rose-title">
            Will you be mine forever? 💍
          </h1>

          {showSure && (
            <p className="sure-text">Sure? 😌💞</p>
          )}

          <div className="game-buttons">
            <motion.button
              className="yes-btn"
              style={{ transform: `scale(${yesSize})` }}
              whileHover={{ scale: yesSize + 0.1 }}
              onClick={() => setAccepted(true)}
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
        </motion.div>
      )}
    </div>
  );
}

export default ProposeDay;
