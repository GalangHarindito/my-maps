import styled from 'styled-components';

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
   
`

export const WrapperInput = styled.div`
   margin:0;
   display: flex    ;
   flex-direction: column;
   gap: 0.8rem;
   position: relative;
`

export const WrapperSelect = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
`

export const WrapperButton = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
` 

export const WrapperDelete = styled.div`
    position: absolute;
    top: -0.5rem;
    right: 0;
`