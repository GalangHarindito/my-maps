import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 4rem;
    padding: 0.5rem;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;

  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  display: flex;
  justify-content: center;
  align-items: center;

  &.primary{
    background-color: #0769FD;
  }
  &.secondary{
    background-color: #B0BBCD;
  }

  &:hover{
    box-shadow: 0px 7px 20px -7px rgba(0,0,0,0.72);
  }
`;
