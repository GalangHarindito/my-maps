import styled from "styled-components";

export const Wrapper = styled.section`
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:500;
  background-color: #EFEFEF;
  padding:0.1rem;
`;


export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
`

export const Copyright = styled.div`
  font-size: 1rem;
`;

export const Extra = styled.div`
  font-size: 0.8rem;
`;
