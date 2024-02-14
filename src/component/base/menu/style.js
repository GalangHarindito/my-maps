import styled from "styled-components";

export const WrapperBar = styled.li`
  margin: 0.8rem 0;
  list-style-type: none;
  cursor: pointer;

 
`;

export const ChildBar = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  height: 2rem;
  overflow: hidden;
  margin: 0;

  &:hover {
    background-color: #B9D5FF;
    font-weight:700;
  }
  
  &.active {
    background-color: #287FFF;
    font-weight: bold;
    color: #FFF;
  }
`;

export const TitleBar = styled.p`
  margin: 0;
`;

export const Icon = styled.div``;

export const WrapperFeaturesMenu = styled.section`

  display : none;
  animation: display 1s linear;

  &.displayChildren {
    display: block;
  }
`;
