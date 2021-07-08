import { configureStore, Store, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { MakeStore } from "next-redux-wrapper";

import reducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */

    // @ts-ignore
 const store: MakeStore = (initialState, options): Store => {
  const store: Store = configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware
    ]
  });
  
  sagaMiddleware.run(rootSaga);
  return store;
};


export type RootState = ReturnType<typeof  store.getState>
export { store };
