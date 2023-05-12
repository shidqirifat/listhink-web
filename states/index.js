import { configureStore } from '@reduxjs/toolkit';
import displaySizeReducer from './displaySize/reducer';

const store = configureStore({
  reducer: {
    displaySize: displaySizeReducer
  }
});

export default store;
