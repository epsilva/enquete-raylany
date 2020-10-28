import styled from 'styled-components';
import { motion } from "framer-motion";

export const CardContainer = styled.li`
    position: relative;
    padding: 25px;
    height: 460px;
    flex: 0 0 40%;
    max-width: 40%;

    :nth-child(4n + 1),
    :nth-child(4n + 4) {
        flex: 0 0 60%;
        max-width: 60%;
    }


@media only screen and (max-width: 800px) {
        flex: 0 0 50%;
        max-width: 50%;

        :nth-child(4n + 1),
        :nth-child(4n + 4) {
            flex: 0 0 50%;
            max-width: 50%;
        }
  }

  @media only screen and (max-width: 600px) {

        flex: 1 0 100%;
        max-width: 100%;
        padding-left: 8px;
        padding-right: 8px;

        :nth-child(4n + 1),
        :nth-child(4n + 4) {
            flex: 1 0 100%;
            max-width: 100%;
        }

  }
`;

export const CardContentContainer = styled.div`
    width: max-content%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.01);
    }
`;

export const CardImageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 420px;
    width: 100vw;
    transform: translateZ(0);
    cursor: pointer;
`;

export const CardContent = styled(motion.div)`
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: #1c1c1e;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

export const TitleContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 300px;

    .category {
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
    }
`;

export const ContenteContainer = styled(motion.div)`
    padding: 460px 35px 35px 35px;
    max-width: 700px;
    width: 90vw;
`;

export const ButtonClose = styled.div`
    position: absolute;
    top: 15px;
    left: 91%;
    max-width: 300px;
    cursor: pointer;
    background: red;
    padding: 4px;
    border-radius: 8px;
`;

export const PriceContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 300px;
`;

export const SidebarContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 300px;
    transition: all .2s ease-in-out;
    background: #1e1e1e;
`;

export const DescriptionContainer = styled(motion.div)`
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .button-add-car {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #106fc1;
        border-radius: 8px;
        cursor: pointer;
    }
`;
