import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

import * as api from '../api';
import { scheduleActions } from './ducks';
import { scheduleSelectors } from './selectors';

/** Экшены API */
export const apiActions = {
  loadSchedule: createAction('loadSchedule'),
  saveSchedule: createAction('saveSchedule'),
};

/** Сага-воркеер для загрузки расписания */
export function* fetchSchedule(): SagaIterator {
  try {
    yield put(scheduleActions.setIsLoading(true));

    const schedule = yield call(api.getSchedule);

    yield put(scheduleActions.setItems(schedule));
  } catch (e) {
    yield put(scheduleActions.setError(e.message));
  }
  finally {
    yield put(scheduleActions.setIsLoading(false));
  }
}

/** Сага-воркеер для сохранения расписания */
export function* sendSchedule(): SagaIterator {
  try {
    yield put(scheduleActions.setIsLoading(true));    

    const schedule = yield select(scheduleSelectors.items);

    yield call(api.saveSchedule, [schedule]);

    yield put(scheduleActions.toggleModal(true));
  } catch (e) {
    yield put(scheduleActions.setError(e.message));
  }
  finally {
    yield put(scheduleActions.setIsLoading(false));
  }
}

/** Сага вотчер */
export function* watcherSaga() {
  yield takeEvery(apiActions.loadSchedule, fetchSchedule);
  yield takeEvery(apiActions.saveSchedule, sendSchedule);
}

