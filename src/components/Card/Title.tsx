import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { TitleContainer } from './styles';

export const Title = ({ title, category }) => {
  const inverted = useInvertedScale();
  const x = 15;
  const y = x;

  return (
    <TitleContainer
      initial={false}
      animate={{ x, y }}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <span className="category">{category}</span>
      <h2>{title}</h2>
    </TitleContainer>
  );
};

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
