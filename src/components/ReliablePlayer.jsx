import React, { useState, useEffect } from 'react';
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

const PlayerCard = styled.div`
  background: rgba(29, 185, 84, 0.1);
  border: 1px solid rgba(29, 185, 84, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem 0;
  text-align: center;
`;

const ReliablePlayer = ({ episodeTitle, episodeDescription }) => {
  const [useSociableKit, setUseSociableKit] = useState(true);

  return (
    <PlayerContainer>
      <PlayerTitle>{episodeTitle}</PlayerTitle>
      <PlayerDescription>{episodeDescription}</PlayerDescription>
      
      {useSociableKit ? (
        <div 
          className='sk-ww-spotify-podcast' 
          data-embed-id='25600175'
          style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            minHeight: '200px'
          }}
        />
      ) : (
        <PlayerCard>
          <h4 style={{ color: '#1DB954', marginBottom: '1rem' }}>
            Episode 1: The RICO Tapes
          </h4>
          <p style={{ color: '#bdc3c7', marginBottom: '1.5rem' }}>
            Listen to the groundbreaking investigation into Bradley Foust's story
          </p>
        </PlayerCard>
      )}
      
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <PlayButton
          href="https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Listen on Spotify
        </PlayButton>
        
        <PlayButton
          href="https://linktr.ee/wtpnews"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Episodes
        </PlayButton>
      </div>
    </PlayerContainer>
  );
};

export default ReliablePlayer;