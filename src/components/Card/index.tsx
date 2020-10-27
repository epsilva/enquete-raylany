import React, { memo } from 'react';
import { CardContainer, CardContentContainer, CardContent } from './styles';
import { CardData } from '../types';
import { Image } from './Image';



export const Card = memo(
({
    id,
    title,
    category,
    pointOfInterest,
    backgroundColor
}: CardData) => {
    return (
    <CardContainer>
        <CardContentContainer>
          <CardContent>
            <Image
              id={id}
              backgroundColor={backgroundColor}
            />
          </CardContent>
        </CardContentContainer>
    </CardContainer>
    );
}
);

export default Card;
