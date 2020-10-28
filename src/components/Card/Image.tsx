import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { CardImageContainer } from './styles';

export const Image = ({
  id,
  toggleOpen
}) => {
  const inverted = useInvertedScale();

  return (
    <CardImageContainer
      style={{ ...inverted, originX: 0, originY: 0 }}
      onClick={() => toggleOpen()}
    >
      <motion.img
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
      />
    </CardImageContainer>
  );
};
