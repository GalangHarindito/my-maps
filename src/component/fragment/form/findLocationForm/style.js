import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WrapperInput = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

export const WrapperSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const WrapperListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  align-items: center;
  cursor: default;
`;

export const ListItem = styled.p`
  margin: 0;
`;

export const WrapperButtonList = styled.div`
    display: flex;
    justify-content: space-around;
`;
