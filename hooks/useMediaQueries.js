import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplaySizeActionCreator } from 'states/displaySize/action';

const checkDisplaySize = (widthWindow) => {
  const width = {
    small: false,
    medium: false,
    large: false,
    extraLarge: false
  };

  if (widthWindow > 1280) return { ...width, extraLarge: true };
  if (widthWindow > 1024) return { ...width, large: true };
  if (widthWindow > 640) return { ...width, medium: true };
  return { ...width, small: true };
};

export default function useMediaQueries() {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      const width = checkDisplaySize(window.innerWidth);
      dispatch(setDisplaySizeActionCreator(width));
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
}
