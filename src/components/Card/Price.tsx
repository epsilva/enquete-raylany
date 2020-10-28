import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { PriceContainer } from './styles';

export const Price = ({ price }) => {
  const inverted = useInvertedScale();
  const x = 15;
  const y = 360;

  return (
    <PriceContainer
      initial={false}
      animate={{ x, y }}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <h1>R$ {price}</h1>
    </PriceContainer>
  );
};

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
