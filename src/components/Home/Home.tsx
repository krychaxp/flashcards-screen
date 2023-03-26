import { Board } from './Board';
import { Controls } from './Controls';
import { FullscreenButton } from './FullscreenButton';
import { OrientationButton } from './OrientationButton';
import { Settings } from './Settings';
import { SettingsButton } from './SettingsButton';
import { Timer } from './Timer';

export const Home = () => {
  return (
    <>
      <Controls />
      <Settings />
      <Board />
      <SettingsButton />
      <Timer />
      <FullscreenButton />
      <OrientationButton />
    </>
  );
};
