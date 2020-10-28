import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";
import { ContenteContainer  } from './styles';

export const ContentPlaceholder = React.memo(() => {
  const inverted = useInvertedScale();
  return (
    <ContenteContainer>
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </ContenteContainer>
  );
});
