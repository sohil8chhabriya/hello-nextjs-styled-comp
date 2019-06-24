import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Zilla Slab", serif;
  letter-spacing: 0.15rem;
  font-size: 2em;
  text-align: center;
`

const StyledContainer = styled.div`
  padding: 3em;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`

const profile = (props) => {
  return (
    <StyledContainer>
      <StyledText>TESTING TEXT</StyledText>
    </StyledContainer>
  );
}

export default profile;
