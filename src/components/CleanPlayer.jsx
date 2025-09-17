import React from 'react';
import styled from 'styled-components';

const EmbedContainer = styled.div`
  margin: 1.5rem 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 380px; /* Adjusted for better layout */
`;

const CleanPlayer = () => {
  return (
    <EmbedContainer>
      <iframe
        src='https://widgets.sociablekit.com/spotify-podcast/iframe/25600175'
        frameBorder='0'
        width='100%'
        height='100%'
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </EmbedContainer>
  );
};

export default CleanPlayer;