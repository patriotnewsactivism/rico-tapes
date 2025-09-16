import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CleanPlayer from './CleanPlayer';

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ecf0f1;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const EpisodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EpisodeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const EpisodeNumber = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const EpisodeTitle = styled.h3`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const EpisodeDescription = styled.p`
  color: #bdc3c7;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: stretch;
`;

const ListenButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
  }
`;

const LinkTreeButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #1DB954, #1ed760);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(29, 185, 84, 0.3);
  }
`;

const EpisodeList = () => {
  const episodes = [
    {
      number: 1,
      title: "Camp Devil Dog and The First Domino",
      description: "The night that changed everything started with the sound of gunfire where there shouldn't have been any. A decade-long investigation begins with a military cover-up.",
      embedUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID",
      listenUrl: "https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA"
    },
    {
      number: 2,
      title: "Coming Soon",
      description: "The investigation deepens as new evidence emerges about the institutional mechanisms that protect powerful interests.",
      embedUrl: "#coming-soon",
      listenUrl: "#coming-soon"
    },
    {
      number: 3,
      title: "Coming Soon",
      description: "The legal battle intensifies as the fight for transparency collides with a system designed to maintain secrecy.",
      embedUrl: "#coming-soon",
      listenUrl: "#coming-soon"
    }
  ];

  return (
    <Container id="episodes">
      <Title>Episodes</Title>
      <EpisodeGrid>
        {episodes.map((episode, index) => (
          <EpisodeCard
            key={episode.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <EpisodeNumber>Episode {episode.number}</EpisodeNumber>
            <EpisodeTitle>{episode.title}</EpisodeTitle>
            <EpisodeDescription>{episode.description}</EpisodeDescription>
            
            {episode.number === 1 && (
               <CleanPlayer
                 episodeNumber={episode.number}
                 episodeTitle={episode.title}
                 episodeDescription={episode.description}
                 spotifyUrl={episode.embedUrl}
                 listenUrl={episode.listenUrl}
               />
            )}
            
            <ButtonGroup>
              {episode.listenUrl !== "#coming-soon" ? (
                <ListenButton
                  href={episode.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Listen on Spotify
                </ListenButton>
              ) : (
                <ListenButton
                  style={{ cursor: 'default', background: '#7f8c8d' }}
                >
                  Coming Soon
                </ListenButton>
              )}
              <LinkTreeButton
                href="https://linktr.ee/wtpnews"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Resources
              </LinkTreeButton>
            </ButtonGroup>
          </EpisodeCard>
        ))}
      </EpisodeGrid>
    </Container>
  );
};

export default EpisodeList;
