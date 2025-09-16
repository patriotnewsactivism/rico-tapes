import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;

const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

const EpisodeImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1DB954, #1ed760);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const EpisodeInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.4rem;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    color: #34495e;
    margin: 0;
    line-height: 1.4;
  }
`;

const EmbedContainer = styled.div`
  margin: 1.5rem 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
`;

const PlayButton = styled(ActionButton)`
  background: linear-gradient(135deg, #1DB954, #1ed760);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(29, 185, 84, 0.3);
  }
`;

const LinkButton = styled(ActionButton)`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(231, 76, 60, 0.3);
  }
`;

const CleanPlayer = ({ episodeNumber, episodeTitle, episodeDescription, spotifyUrl, listenUrl }) => {
  return (
    <PlayerContainer>
      <PlayerHeader>
        <EpisodeImage>
          {episodeNumber}
        </EpisodeImage>
        <EpisodeInfo>
          <h3>{episodeTitle}</h3>
          <p>{episodeDescription}</p>
        </EpisodeInfo>
      </PlayerHeader>

      <EmbedContainer>
        <iframe
          src={`${spotifyUrl}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{
            borderRadius: '15px',
            border: 'none'
          }}
        />
      </EmbedContainer>

      <ActionButtons>
        <PlayButton
          href={listenUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶️ Listen on Spotify
        </PlayButton>
        <LinkButton
          href="https://linktr.ee/wtpnews"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 All Resources
        </LinkButton>
      </ActionButtons>
    </PlayerContainer>
  );
};

export default CleanPlayer;