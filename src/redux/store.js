/*
  |============================
  | Before
  |============================
*/
// import { legacy_createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = legacy_createStore(rootReducer, enhancer);
/*
  |============================
  | After
  |============================
*/
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';

export const store = configureStore({
  reducer: contactsReducer,
});
