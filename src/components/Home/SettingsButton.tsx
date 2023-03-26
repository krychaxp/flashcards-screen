import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

import { useSettings } from '@/hooks/useSettings';

export const SettingsButton = () => {
  const { toggleSettings } = useSettings();

  return (
    <IconButton
      variant="outline"
      color="white"
      position="fixed"
      colorScheme="blue"
      top={5}
      right={5}
      size="lg"
      aria-label="Open Menu"
      icon={<HamburgerIcon />}
      isRound
      onClick={toggleSettings}
      zIndex={5}
    />
  );
};
