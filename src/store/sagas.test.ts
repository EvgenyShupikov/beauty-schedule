import { call, put } from 'redux-saga/effects';
import faker from 'faker';

import * as sagas from './sagas';
import { scheduleActions } from './ducks';
import * as api from '../api';


describe('Саги', () => {
  describe('fetchSchedule', () => {
    it('должен обработать ошибку', () => {
      const error = new Error(faker.random.word());

      const generator = sagas.fetchSchedule();

      expect(generator.next().value).toEqual(
        put(scheduleActions.setIsLoading(true)),
      );

      expect(generator.throw(error).value).toEqual(
        put(scheduleActions.setError(error.message)),
      );

      expect(generator.next().value).toEqual(
        put(scheduleActions.setIsLoading(false)),
      );

      expect(generator.next().done).toBeTruthy();
    });

    it('должен загрузить расписание и положить его в стор', () => {
      const schedule = {
        day: faker.random.word(),
        order: faker.datatype.number(),
      };

      const generator = sagas.fetchSchedule();

      expect(generator.next().value).toEqual(
        put(scheduleActions.setIsLoading(true)),
      );

      expect(generator.next().value).toEqual(
        call(api.getSchedule),
      );

      expect(generator.next(schedule).value).toEqual(
        put(scheduleActions.setItems(schedule)),
      );

      expect(generator.next().value).toEqual(
        put(scheduleActions.setIsLoading(false)),
      );

      expect(generator.next().done).toBeTruthy();
    });
  })
});