import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
`;

const PlayerTitle = styled.h3`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PlayerDescription = styled.p`
  color: #bdc3c7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const PlayButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #1DB954, #1ed760);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(29, 185, 84, 0.3);
  margin: 0.5rem;
`;

const EmbedContainer = styled.div`
  margin: 1rem 0;
  border-radius: 12px;
  overflow: hidden;
`;

const CustomPlayer = ({ episodeTitle, episodeDescription }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContainer>
      <PlayerTitle>{episodeTitle}</PlayerTitle>
      <PlayerDescription>{episodeDescription}</PlayerDescription>
      
      <EmbedContainer>
        <iframe
          src="https://open.spotify.com/embed/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA&utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </EmbedContainer>
      
      <div style={{ marginTop: '1rem' }}>
        <PlayButton
          href="https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open in Spotify
        </PlayButton>
      </div>
    </PlayerContainer>
  );
};

export default CustomPlayer;