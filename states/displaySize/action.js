const ACTION_TYPE = {
  SET_DISPLAY_SIZE: 'SET_DISPLAY_SIZE'
};

function setDisplaySizeActionCreator(displaySize) {
  return {
    type: ACTION_TYPE.SET_DISPLAY_SIZE,
    payload: { displaySize }
  };
}

export { ACTION_TYPE, setDisplaySizeActionCreator };
