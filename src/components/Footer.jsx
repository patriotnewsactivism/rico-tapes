import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  padding: 3rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #bdc3c7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const LinkTreeButton = styled(motion.a)`
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

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Title>Stay Connected</Title>
        <Description>
          Access all our resources, evidence, key articles, and support our investigation through donations.
        </Description>
        
        <LinkTreeButton
          href="https://linktr.ee/wtpnews"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 All Links & Resources
        </LinkTreeButton>
        
        <SocialLinks>
          <LinkTreeButton
            href="https://linktr.ee/wtpnews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)', fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
          >
            Evidence & Articles
          </LinkTreeButton>
          <LinkTreeButton
            href="https://linktr.ee/wtpnews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)', fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
          >
            Support & Donate
          </LinkTreeButton>
        </SocialLinks>
        
        <p style={{ color: '#7f8c8d', marginTop: '2rem', fontSize: '0.9rem' }}>
          The RICO Tapes Podcast © 2025 - All Rights Reserved
        </p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;