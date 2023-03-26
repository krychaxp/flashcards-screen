import { CircularProgress } from '@chakra-ui/react';

import { useSettings } from '@/hooks/useSettings';

export const Timer = () => {
  const { currentProgress, isVerticalScreen } = useSettings();

  return (
    <CircularProgress
      value={currentProgress}
      position="fixed"
      top="50%"
      left="50%"
      size={20}
      sx={{
        transform: 'translate(-50%, -50%)',
        '& circle': { transition: '0s' },
      }}
    />
  );
};
