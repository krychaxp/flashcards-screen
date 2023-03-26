import { Progress } from '@chakra-ui/react';

import { useSettings } from '@/hooks/useSettings';

export const Timer = () => {
  const { currentProgress } = useSettings();

  return (
    <Progress
      value={currentProgress}
      position="fixed"
      top="50%"
      left={0}
      right={0}
    />
  );
};
