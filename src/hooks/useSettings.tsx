import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { useBoolean } from '@chakra-ui/react';
import { useLocalStorage } from 'usehooks-ts';

type SettingsContextProps = {
  settingsIsOpen: boolean;
  toggleSettings: () => void;
  wordsToDisplay: string[];
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  refreshTime: number;
  setRefreshTime: React.Dispatch<React.SetStateAction<number>>;
  currentProgress: number;
  toggleScreenOrientation: () => void;
  isVerticalScreen: boolean;
  togglePlay: () => void;
  isPlay: boolean;
};

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

const timerRefreshTime = 20; // milliseconds

export const defaultText = `word1;word2\nanother section;explanation`;

export type ScreenOrientation = 'landscape' | 'portrait';

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [text, setText] = useLocalStorage('user-text', defaultText);
  const [refreshTime, setRefreshTime] = useLocalStorage('user-refreshTime', 10);
  const [settingsIsOpen, setSettingsIsOpen] = useBoolean(false);
  const [currentProgress, setCurrentProgress] = useState(100);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVerticalScreen, setIsVerticalScreen] = useLocalStorage(
    'user-isVerticalScreen',
    false,
  );

  const words = useMemo(
    () =>
      text
        .trim()
        .split('\n')
        .map((v) => v.trim().split(';')),
    [text],
  );

  const toggleScreenOrientation = () => setIsVerticalScreen((prev) => !prev);
  const togglePlay = () => setIsPlay((prev) => !prev);

  const amountOfWords = words.length;

  useEffect(() => {
    if (isPlay) {
      const interval = setInterval(() => {
        setCurrentProgress(
          (prev) => prev - timerRefreshTime / (refreshTime * 10),
        );
      }, timerRefreshTime);

      return () => clearInterval(interval);
    }
  }, [isPlay, refreshTime]);

  useEffect(() => {
    if (currentProgress <= 0 && isPlay) {
      const newIndex = Math.floor(Math.random() * amountOfWords);
      setCurrentWordIndex(newIndex);
      setCurrentProgress(100);
    }
  }, [currentProgress, isPlay, amountOfWords]);

  useEffect(() => {
    setIsPlay(false);
  }, [settingsIsOpen]);

  const wordsToDisplay = useMemo(
    () => words[currentWordIndex],
    [words, currentWordIndex],
  );

  return (
    <SettingsContext.Provider
      value={{
        settingsIsOpen,
        toggleSettings: setSettingsIsOpen.toggle,
        wordsToDisplay,
        text,
        setText,
        refreshTime,
        setRefreshTime,
        currentProgress,
        toggleScreenOrientation,
        isVerticalScreen,
        togglePlay,
        isPlay,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsContext');
  }

  return context;
};
