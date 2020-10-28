import * as React from "react";
import { motion } from "framer-motion";
import { DescriptionContainer } from './styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Description = ({description}) => (
  <DescriptionContainer variants={variants}>
        <span>{description}</span>
        <div className="button-add-car">
            Adicionar ao carrinho
        </div>
  </DescriptionContainer>
);

const itemIds = [0, 1, 2, 3, 4];

export default Description;
