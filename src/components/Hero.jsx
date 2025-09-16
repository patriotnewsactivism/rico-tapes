import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CleanPlayer from './CleanPlayer';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('/images/hero-main.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(231, 76, 60, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(231, 76, 60, 0.1) 0%, transparent 50%);
`;

const Content = styled.div`
  text-align: center;
  z-index: 10;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #ecf0f1;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(231, 76, 60, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #ecf0f1;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundPattern />
      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The RICO Tapes
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A decade-long investigation into institutional corruption, military cover-ups, and the price of truth
        </Subtitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <CleanPlayer
            episodeNumber={1}
            episodeTitle="Camp Devil Dog and The First Domino"
            episodeDescription="The night that changed everything and the search for truth that cost everything"
            spotifyUrl="https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA"
          />
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CTAButton
              href="https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open in Spotify
            </CTAButton>
            <CTAButton
              href="https://linktr.ee/wtpnews"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #1DB954, #1ed760)' }}
            >
              All Resources & Links
            </CTAButton>
          </div>
        </div>
      </Content>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        ↓ Scroll for episodes
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;