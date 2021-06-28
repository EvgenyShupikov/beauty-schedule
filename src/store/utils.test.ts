import faker from 'faker';

import { ScheduleState } from "./types";
import { findPoint } from "./utils";

describe('utils', () => {
  describe('findPoint', () => {
    it('должна найти точку', () => {
      const dayName = faker.random.word();
      const pointName = faker.random.word();
      const point = {
        isActive: faker.datatype.boolean(),
        name: pointName,
        workingTime: [],
      };

      const state: Partial<ScheduleState> = {
        items: [
          {
            dayName,
            isActive: faker.datatype.boolean(),
            order: faker.datatype.number(),
            points: [point]
          },
          {
            dayName: faker.random.word(),
            isActive: faker.datatype.boolean(),
            order: faker.datatype.number(),
            points: [
              {
                isActive: faker.datatype.boolean(),
                name: faker.random.word(),
                workingTime: [],
              }
            ]
          }
        ]
      };

      expect(findPoint(state, dayName, pointName)).toBe(point);
    })
  })
})
