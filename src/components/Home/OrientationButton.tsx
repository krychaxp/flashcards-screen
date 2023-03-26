import { IconButton } from '@chakra-ui/react';
import { MdVerticalAlignCenter } from 'react-icons/md';

import { useSettings } from '@/hooks/useSettings';

export const OrientationButton = () => {
  const { toggleScreenOrientation, isVerticalScreen } = useSettings();

  return (
    <IconButton
      variant="outline"
      color="white"
      position="fixed"
      colorScheme="blue"
      top={5}
      left={5}
      size="lg"
      aria-label="toggle fullscreen"
      fontSize={30}
      icon={<MdVerticalAlignCenter />}
      sx={{ transform: isVerticalScreen ? 'rotate(90deg)' : undefined }}
      isRound
      onClick={toggleScreenOrientation}
      zIndex={5}
    />
  );
};
