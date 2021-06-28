import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { scheduleReducer } from './ducks';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(watcherSaga);