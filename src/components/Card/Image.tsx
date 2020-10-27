import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import { CardImageContainer } from './styles';

export const Image = ({
  id,
  backgroundColor
}) => {
  const inverted = useInvertedScale();

  return (
    <CardImageContainer
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        transition={closeSpring}
      />
    </CardImageContainer>
  );
};
