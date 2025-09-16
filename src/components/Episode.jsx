import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EpisodeContainer = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const EpisodeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const EpisodeHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  border-bottom: 3px solid #34495e;
  padding-bottom: 2rem;
`;

const EpisodeNumber = styled.div`
  font-size: 1rem;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const EpisodeTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 700;
`;

const EpisodeSubtitle = styled.p`
  font-size: 1.2rem;
  color: #34495e;
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
`;

const DescriptionSection = styled.div`
  margin: 2.5rem 0;
`;

const DescriptionTitle = styled.h2`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-left: 4px solid #e74c3c;
  padding-left: 1rem;
`;

const DescriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  text-align: justify;
  margin-bottom: 1.5rem;
`;

const HighlightQuote = styled.div`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  box-shadow: 0 10px 25px rgba(231, 76, 60, 0.3);
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    top: -10px;
    left: 20px;
    opacity: 0.3;
  }
`;

const ThemesSection = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border-left: 5px solid #3498db;
`;

const ThemesTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ThemeTag = styled.span`
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #ecf0f1;
`;

const ListenButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(231, 76, 60, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;

const SpotifyEmbed = styled.iframe`
  border-radius: 12px;
  width: 100%;
  height: 352px;
  margin-top: 2rem;
  border: none;
`;

const Episode = () => {
  return (
    <EpisodeContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <EpisodeCard
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <EpisodeHeader>
          <EpisodeNumber>Episode 1</EpisodeNumber>
          <EpisodeTitle>Camp Devil Dog and The First Domino</EpisodeTitle>
          <EpisodeSubtitle>The night that changed everything and the search for truth that cost everything</EpisodeSubtitle>
        </EpisodeHeader>

        <DescriptionSection>
          <DescriptionTitle>Episode Description</DescriptionTitle>
          <DescriptionText>
            The night that changed everything started with the sound of gunfire where there shouldn't have been any. At Marine Corps training base "Camp Devil Dog" in 2008, what happened to Lance Corporal Bradley Foust was officially labeled a "training accident" — but the narrator knows what he saw and heard.
          </DescriptionText>
          
          <HighlightQuote>
            That was the first time I saw how truth could be edited — how the 'official truth' could be made to serve an agenda.
          </HighlightQuote>

          <DescriptionText>
            When the military machine rewrites reality to protect itself, one Marine's search for truth begins a journey that will span nearly a decade and cost him everything. From a covered-up suicide at a remote training facility to the political battlegrounds of Oxford, Mississippi, this is the story of how questioning the official narrative can make you a target.
          </DescriptionText>

          <DescriptionText>
            What starts as a Freedom of Information Act request about a fellow Marine's death becomes a collision course with small-town politics, corrupt officials, and a system designed to silence dissent. By 2017, the stakes have escalated from seeking truth about the past to fighting for the right to speak out in the present.
          </DescriptionText>

          <DescriptionText>
            The first domino falls in 2008 with Lance Corporal Foust's death and the institutional cover-up that follows. By May 2017, when a sheriff's deputy arrests a veteran for exercising his First Amendment rights, the whole tower comes crashing down. This is a David vs. Goliath story of truth-seeking, institutional corruption, and the price of refusing to stay silent.
          </DescriptionText>

          <DescriptionText>
            From military barracks to Mississippi courtrooms, from FOIA battles to family destruction, Episode 1 sets the stage for a decade-long fight against forces that would rather rewrite history than face uncomfortable truths.
          </DescriptionText>
        </DescriptionSection>

        <ThemesSection>
          <ThemesTitle>Key Themes</ThemesTitle>
          <ThemeTag>Military Cover-ups</ThemeTag>
          <ThemeTag>PTSD & Veterans</ThemeTag>
          <ThemeTag>Government Corruption</ThemeTag>
          <ThemeTag>First Amendment Rights</ThemeTag>
          <ThemeTag>Small-town Politics</ThemeTag>
          <ThemeTag>Truth vs. Power</ThemeTag>
          <ThemeTag>FOIA Battles</ThemeTag>
          <ThemeTag>Institutional Retaliation</ThemeTag>
        </ThemesSection>

        <CTASection>
          <ListenButton
            href="https://open.spotify.com/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: '1rem', marginBottom: '1rem' }}
          >
            Listen on Spotify
          </ListenButton>
          <ListenButton
            href="https://linktr.ee/wtpnews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'linear-gradient(135deg, #1DB954, #1ed760)' }}
          >
            All Links & Resources
          </ListenButton>
        </CTASection>

        <SpotifyEmbed 
          src="https://open.spotify.com/embed/episode/4OLsIS8NizTFt9x1O3NfsF?si=QE-BTnhESCGnbI5s9EzbbA&utm_source=generator"
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
      </EpisodeCard>
    </EpisodeContainer>
  );
};

export default Episode;