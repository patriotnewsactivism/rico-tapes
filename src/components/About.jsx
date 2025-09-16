import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  padding: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: #e74c3c;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const Section = styled(motion.div)`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
  border-left: 4px solid #e74c3c;
  padding-left: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  text-align: justify;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: #e74c3c;
  font-weight: 600;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About The RICO Tapes
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          When Government Accountability Becomes a Federal Crime
        </Subtitle>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Text>
            The RICO Tapes is an investigative podcast series that exposes one of the most documented cases of federal retaliation in modern American history. What began as a routine Freedom of Information Act request about Marine training deaths at Camp Lejeune evolved into an eight-year odyssey revealing a criminal conspiracy that reaches the highest levels of federal law enforcement.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionTitle>The Bradley Foust Investigation</SectionTitle>
          <Text>
            In 2017, investigative journalist Matt Reardon uncovered disturbing evidence surrounding the death of Marine Private First Class Bradley Adam Foust, who died "accidentally in training" at Camp Lejeune in 2008. Reardon's FOIA requests revealed that the U.S. Marine Corps had systematically altered standard operating procedures and concealed critical details about how young Marines were dying during combat training. When Reardon threatened legal action against the USMC for FOIA violations, he unknowingly triggered what federal prosecutors would later characterize as a racketeering enterprise.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <SectionTitle>The 24-Hour Timeline</SectionTitle>
          <Text>
            Through newly obtained government emails and documents, The RICO Tapes reconstructs the explosive 24-hour period in May 2017 when Reardon's final notice to sue the Marine Corps was followed by his arrest on fabricated charges. The temporal proximity—less than one day between protected First Amendment activity and punitive law enforcement action—provides what legal experts call "prima facie evidence" of coordinated retaliation.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <SectionTitle>The Enterprise Revealed</SectionTitle>
          <Text>
            What makes this case unprecedented is not just the retaliation itself, but how thoroughly it has been documented. FOIA responses obtained years later reveal federal coordination between the Department of Justice, U.S. Marshals Service, and local Mississippi law enforcement. The podcast series methodically exposes how this multi-jurisdictional conspiracy operated as a RICO enterprise, using the tools of law enforcement as weapons of intimidation.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <SectionTitle>Legal Framework and Precedent</SectionTitle>
          <Text>
            Each episode of The RICO Tapes dissects the complex legal framework underlying the case, from First Amendment retaliation claims under <Highlight>42 U.S.C. § 1983</Highlight> to the federal racketeering statutes that make such conspiracies prosecutable crimes. We examine how Reardon's experience mirrors historical patterns of federal-local coordination used to silence dissent, from COINTELPRO to modern surveillance programs targeting activists and journalists.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <SectionTitle>Documentary Evidence</SectionTitle>
          <Text>
            Unlike typical true crime podcasts that rely on interviews and speculation, The RICO Tapes is built on a foundation of government documents, federal court filings, and official correspondence obtained through years of FOIA litigation. Every episode is meticulously sourced, with primary documents available to listeners who want to examine the evidence themselves.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <SectionTitle>What's at Stake</SectionTitle>
          <Text>
            This isn't just the story of one man's fight against government corruption—it's a cautionary tale about what happens when the very agencies tasked with protecting constitutional rights become the agents of their destruction. The RICO Tapes exposes how easily the machinery of law enforcement can be weaponized against citizens who dare to demand transparency and accountability.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <SectionTitle>Host and Producer</SectionTitle>
          <Text>
            The series is produced with extensive input from Matt Reardon himself, along with civil rights attorneys, former federal prosecutors, and transparency advocates who understand the broader implications of this case for American democracy.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <Text>
            <em>The RICO Tapes reveals that sometimes the most effective way to expose a criminal conspiracy is to simply let the conspirators tell their own story—through their emails, their coordinated actions, and their documented attempts to silence the truth.</em>
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <Text>
            <strong>New episodes release weekly</strong>, with each installment building the case that federal law enforcement operated as a criminal enterprise to retaliate against a citizen's exercise of his constitutional rights.
          </Text>
        </Section>
      </Content>
    </AboutContainer>
  );
};

export default About;