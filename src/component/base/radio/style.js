import styled, { keyframes } from "styled-components";

export const RadioButton = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
  font-size: 1rem;
`;

const popIn = keyframes`
from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5) ;
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) ;
  }
`;

export const ItemRadio = styled.div`
  border: 1px solid;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${RadioLabel}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${RadioButton}:checked + &::after {
    display: block;
    border: solid #263238;
    border-radius: 1em;
    background-color: #263238;
    width: 0.3em;
    height: 0.3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${RadioButton}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;
