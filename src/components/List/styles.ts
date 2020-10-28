import styled from 'styled-components';

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    list-style: none;
    padding:  0 10%;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;
