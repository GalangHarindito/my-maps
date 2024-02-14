import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.label`
  margin-bottom: 0.4rem;
`;

export const SelectInput = styled.select`
  padding: 0.4rem;
  border: 2px solid #e8e8e6;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  width: auto;
  background: white;
  width: 100%;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0.3rem;
    font-size: 0.8rem;

    &:focus {
      border-color: #bababa;
    }
  }
`;
