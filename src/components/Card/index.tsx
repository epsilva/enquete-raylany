import React, { useRef, useEffect, useState } from 'react';
import { CardContainer, CardContentContainer, CardContent, ButtonClose } from './styles';
import { CardData } from '../types';
import { Image } from './Image';
import { Title } from './Title';
import { useCycle } from "framer-motion";
import { Price } from './Price';
import SideBar from './SideBar';

interface Props extends CardData {
  isSelected: boolean;
}

function Card({
    isSelected,
    id,
    title,
    category,
    backgroundColor,
    price,
    description,
  }: Props) {

    const [isOpen, toggleOpen] = useCycle(false, true);

    const delayRef = useRef(0);
    const offset = useRef({ top: 0, left: 0 });
    const ref = useRef();

    const delayPerPixel = 0.0008;
    const i = id;
    const originOffset = offset;


    useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
    }, [delayPerPixel]);

    return (
        <CardContainer>
            <CardContentContainer >
            <CardContent ref={ref} variants={itemVariants} custom={delayRef} >
                <Image id={id} toggleOpen={toggleOpen}/>
                <Title title={title} category={category} />
                <Price price={price} />
                <SideBar isOpen={isOpen} description={description}/>
            </CardContent>
            </CardContentContainer>
        </CardContainer>
    );
}


const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: delayRef => ({
      opacity: 1,
      scale: 1,
      transition: { delay: delayRef.current }
    })
  };

export default Card;
