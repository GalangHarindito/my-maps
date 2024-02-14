import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.div`
    margin-bottom: 0.4rem;

`

export const InputText = styled.input`
    height: 1rem;
    padding:0.4rem;
    border: 2px solid #e8e8e6;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;

    &:focus{
        border-color: #bababa;
    }
`