import { Flex } from '@chakra-ui/react';

import { useSettings } from '@/hooks/useSettings';

export const Board = () => {
  const { isVerticalScreen, wordsToDisplay } = useSettings();

  const [word1, word2] = wordsToDisplay;

  return (
    <Flex
      w="full"
      h="full"
      position="fixed"
      fontSize="5xl"
      direction={isVerticalScreen ? 'row' : 'column'}
      gap={1}
      color="white"
      bg="black"
    >
      <Flex flex={1} alignItems="center" justifyContent="center">
        {word1}
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="center">
        {word2}
      </Flex>
    </Flex>
  );
};
