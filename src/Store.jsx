import { configureStore } from '@reduxjs/toolkit';
import {Counterslice} from './Counterslice';

const Store = configureStore({
  reducer: {
    counter: Counterslice.reducer,
  },
});

export default Store;
