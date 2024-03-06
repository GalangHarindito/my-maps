import styled from "styled-components";

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  background-color: #ea4c89;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;

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

  &.transparent{
    background-color: transparent;
    color: ${props => props.color ? props.color : "#000"};;
  }

`;
