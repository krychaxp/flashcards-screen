import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { defaultText, useSettings } from '@/hooks/useSettings';

export const Settings = () => {
  const {
    settingsIsOpen,
    toggleSettings,
    text,
    setText,
    refreshTime,
    setRefreshTime,
  } = useSettings();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const labelStyles = {
    mt: '2',
    fontSize: 'sm',
    transform: 'translateX(-50%)',
  };

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={settingsIsOpen}
      onClose={toggleSettings}
      isCentered
      size="6xl"
    >
      <ModalOverlay backdropBlur="2px" />
      <ModalContent aria-labelledby="settings">
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="1rem">Refresh cards (in seconds): {refreshTime}</Text>
          <Slider
            onChange={(val) => setRefreshTime(val)}
            mx="auto"
            mb={2}
            min={1}
            max={60}
            value={refreshTime}
          >
            <SliderMark value={1} {...labelStyles}>
              1
            </SliderMark>
            <SliderMark value={30} {...labelStyles}>
              30
            </SliderMark>
            <SliderMark value={60} {...labelStyles}>
              60
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Divider my={5} />
          <Text mb="1rem">Words: (separate by ";" and new lines)</Text>
          <Textarea
            value={text}
            onChange={onChange}
            placeholder={defaultText}
            w="full"
            rows={8}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={toggleSettings}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
