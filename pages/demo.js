import React from "react";
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: green;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const OrangeButton = styled(Button)`
  color: orange;
  border-color: red;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`;

const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: red;
  font-size: 1em;
  border: 2px solid red;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


// Define our button, but with the use of props.theme this time
const Message = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  background-color: ivory
  border: 2px solid ${props => props.theme.main};
`;

Message.defaultProps = {
  theme: {
    main: "black"
  }
}

// Define what props.theme will look like
const themeBlue = {
  main: "blue"
};

const themeRed = {
  main: "red"
};



const demo = () => {
return (
<div>
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
  <Button>Normal</Button>
  <Button primary>Primary</Button>
  <OrangeButton as="a" href="/">Orange</OrangeButton>
  <div>
    <Input placeholder="A small text input" size="5px" />
    <br />
    <Input placeholder="A bigger text input" size="10px" />
  </div>

  <div>
    <Message>Normal</Message>
    <ThemeProvider theme={themeBlue}>
      <Message>Theme Blue</Message>
    </ThemeProvider>
    <ThemeProvider theme={themeRed}>
      <Message>Theme Red</Message>
    </ThemeProvider>
  </div>
</div>
);
}

export default demo
