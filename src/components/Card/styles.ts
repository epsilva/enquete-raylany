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
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
`;

export const CardImageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 420px;
    width: 100vw;
    transform: translateZ(0);
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
