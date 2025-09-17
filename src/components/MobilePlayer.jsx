import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlayerWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
    border-radius: 15px;
  }
`;

const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const EpisodeImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const EpisodeInfo = styled.div`
  flex: 1;
  min-width: 0;

  h4 {
    font-size: 1rem;
    color: #ecf0f1;
    margin: 0 0 0.25rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 0.85rem;
    color: #bdc3c7;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ControlButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ecf0f1;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
`;

const ProgressBar = styled.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-bottom: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #1DB954, #1ed760);
  border-radius: 2px;
  width: 0%;
  transition: width 0.1s ease;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #bdc3c7;
`;

const MobilePlayer = ({ episodeNumber, episodeTitle, spotifyUrl }) => {
  return (
    <PlayerWrapper>
      <PlayerHeader>
        <EpisodeImage>
          {episodeNumber}
        </EpisodeImage>
        <EpisodeInfo>
          <h4>{episodeTitle}</h4>
          <p>Episode {episodeNumber}</p>
        </EpisodeInfo>
      </PlayerHeader>

      <div 
        className='sk-ww-spotify-podcast' 
        data-embed-id='25600175'
        style={{ 
          borderRadius: '12px',
          overflow: 'hidden',
          minHeight: '152px'
        }}
      />
      
      <Controls>
        <ControlButton
          as="a"
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ background: 'linear-gradient(135deg, #1DB954, #1ed760)' }}
        >
          ▶️
        </ControlButton>
        <ControlButton
          as="a"
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          📱
        </ControlButton>
      </Controls>

      <ProgressBar>
        <ProgressFill />
      </ProgressBar>
      <TimeDisplay>
        <span>0:00</span>
        <span>Spotify Player</span>
      </TimeDisplay>
    </PlayerWrapper>
  );
};

export default MobilePlayer;