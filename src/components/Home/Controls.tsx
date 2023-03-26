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
      top="50%"
      left="50%"
      sx={{ transform: 'translate(-50%, -50%)' }}
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
