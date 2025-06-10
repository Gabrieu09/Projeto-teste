import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/App.css";

const LoveMessage = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  return (
    <motion.div
      className="message-box"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <audio ref={audioRef} src="/musica.mp3" loop />

      {!playing && (
        <button className="botao-play" onClick={handlePlay}>
          ❤️ Clique para ouvir
        </button>
      )}

      <img src="/casal.jpg" alt="Casal" className="casal-img" />

      <h1 className="titulo">Para o amor da minha vida</h1>

      <p className="mensagem">
        Cada dia contigo é um capítulo de amor na história da minha vida. <br />
        Você é o meu porto seguro, minha alegria e minha inspiração. <br />
        Te amo com todo meu coração ❤️
        s
        

        a



        a
      </p>
    </motion.div>
  );
};

export default LoveMessage;