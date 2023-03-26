import { Flex, IconButton } from '@chakra-ui/react';

import { useSettings } from '@/hooks/useSettings';

export const Controls = () => {
  const { togglePlay, isPlay } = useSettings();

  return (
    <IconButton
      variant="outline"
      color="white"
      position="fixed"
      colorScheme="blue"
      bottom={5}
      right={5}
      size="lg"
      aria-label="Pause/Ressume"
      isRound
      onClick={togglePlay}
      zIndex={5}
    >
      {isPlay ? (
        <Flex gap={1}>
          <Flex w={1} h={4} bg="white" />
          <Flex w={1} h={4} bg="white" />
        </Flex>
      ) : (
        <Flex
          w={3}
          h={4}
          bg="white"
          clipPath="polygon(0 0, 0 100%,100% 50%)"
          ml={1}
        />
      )}
    </IconButton>
  );
};
