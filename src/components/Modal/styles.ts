import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    &:hidden {
    visibility: hidden;
    transition-delay: 0, 0.6s;
    }
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    align-items: center;
    justify-content: center;
`;
