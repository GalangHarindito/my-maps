import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  width: 18rem;
  height: 100vh;
  z-index: 410;
  background-color: #EFEFEF;
  transition: 0.2s linear;

  &.closedBar {
    width: 2.9rem;
  }
`;

export const SectionTitle = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  visibility: visible;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: visibility 0.1s linear;

  &.hideTitle {
    visibility: hidden;
  }
`;
export const Title = styled.h2`
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;    
  margin: 0;
  overflow: hidden;
  white-space: wrap;


  &.breakParagh {
    white-space: nowrap;
  }
`
export const Devider = styled.div`
  visibility: visible;
  border-bottom: 2px solid black;
  margin: 0 1.2rem;
  overflow: hidden;
  transition: visibility 0.1s easy-out;

  &.hideDevider {
    visibility: hidden;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: -2rem;
  top: 0;
`;


