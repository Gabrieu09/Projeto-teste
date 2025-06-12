import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/App.css";

const LoveMessage = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const startTime = 21; // segundos
  const endTime = 180;   // segundos

  const handlePlay = () => {
    const audio = audioRef.current;
    audio.currentTime = startTime;
    audio.play();
    setPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= endTime) {
        audio.currentTime = startTime;
        audio.play();
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <motion.div
      className="message-box"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <audio ref={audioRef} src="/musica.mp3" />

      {!playing && (
  <button className="botao-play-fixed" onClick={handlePlay}>
    ❤️ Clique para ouvir ❤️
  </button>
)}

      <img src="/casal.jpg" alt="Casal" className="casal-img" />

      <h1 className="titulo">Para o amor da minha vida</h1>

      <p className="mensagem">
        Nunca fui bom com palavras, voce sabe disso, mas hoje quero tentar expressar um pouco do que sinto por você. <br />
        <p></p>
        Amo investir cada segundo do meu tempo com você, voce é o motivo da minha alegria e dos cabelos brancos.<br />     
        Você é a minha melhor amiga, minha parceira, minha companheira de todas as horas. <br />
        Quanto mais me mostro, marrento, independente, gosto de fazer as coisas sozinho, mais voce me mostra que é a minha parceira,
         e que sempre estara ao meu lado me apoiando. <br />
         <p></p>
         Viver a vida com voce é sem dúvida a coisa mais prazerosa que existe, amo partilhar a vida com voce e obrigado por 
         me fazer parte da sua.<br />
          <p></p>

        <br />
        te amo do tamanho do seu estresse ❤️
       <br />
     
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

      </p>
    </motion.div>
  );
};

export default LoveMessage;