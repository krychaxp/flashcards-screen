import { Flex, IconButton } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';

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
      {isPlay ? <FaPause /> : <FaPlay />}
    </IconButton>
  );
};
