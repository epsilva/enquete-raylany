import styled from 'styled-components';

export const HeaderContainer = styled.header`
    border-bottom: 1px solid var(--divider);
    position: fixed;
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;

    .date {
        color: var(--secondary);
        font-size: 14px;
        text-transform: uppercase;
    }

    .avatar {
        background: var(--divider);
        border-radius: 50%;
        position: absolute;
        bottom: 12px;
        right: 0;
        overflow: hidden;
        margin-right: 20px;
    }

    .avatar,
      .avatar img {
        width: 40px;
        height: 40px;
    }

    .imagem {
        height: 40px;
        margin-right: 8px;
        svg {
            fill: #FFF;
            width: 40px;
            height: 40px;
        }
    }
`;
