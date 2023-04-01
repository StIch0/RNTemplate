import { useAppSelector } from '../hooks';

const useColorsScheme = () =>
  useAppSelector(({ theme: { colorScheme } }) => colorScheme);

export { useColorsScheme };
