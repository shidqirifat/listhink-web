import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [isPopUp, setIsPopUp] = useState(initialValue);

  const onActive = () => setIsPopUp(true);
  const onInactive = () => setIsPopUp(false);
  const onToggle = () => setIsPopUp((prev) => !prev);

  return { isPopUp, onActive, onInactive, onToggle };
}
