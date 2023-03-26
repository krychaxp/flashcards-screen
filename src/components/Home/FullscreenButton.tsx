import { useState } from 'react';

import { IconButton } from '@chakra-ui/react';
import { MdFullscreenExit, MdFullscreen } from 'react-icons/md';

export const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullscreen((prev) => !prev);
  };

  return (
    <IconButton
      variant="outline"
      color="white"
      position="fixed"
      colorScheme="blue"
      bottom={5}
      left={5}
      size="lg"
      aria-label="toggle fullscreen"
      fontSize={30}
      icon={isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
      isRound
      onClick={toggleFullscreen}
      zIndex={5}
    />
  );
};
