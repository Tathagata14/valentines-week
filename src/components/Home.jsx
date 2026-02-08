import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/rose.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="rose-container">
      <div className="home-wrapper">
        <motion.h1
          className="rose-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Valentine Week 💖
        </motion.h1>

        <div className="home-buttons">
          <motion.button
            className="day-btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/rose-day")}
          >
            🌹 Rose Day
          </motion.button>

          <motion.button
            className="day-btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/propose-day")}
          >
            💍 Propose Day
          </motion.button>
        </div>
      </div>
    </div>
  );
}


export default Home;
