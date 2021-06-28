import { DaySchedule } from "./types";

/** Мок расписания */
export const mock: DaySchedule[] = [
  {
    order: 1,
    dayName: 'Понедельник',
    isActive: true,
    points: [
      {
        name: 'В Москве',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Студия на Академической',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Перерыв',
        isActive: true,
        workingTime: [
          {
            startTime: '14:00',
            endTime: '15:00',
          }
        ]
      }
    ]
  },
  {
    order: 2,
    dayName: 'Вторник',
    isActive: false,
    points: [
      {
        name: 'В Москве',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Студия на Академической',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Перерыв',
        isActive: true,
        workingTime: [
          {
            startTime: '14:00',
            endTime: '15:00',
          }
        ]
      }
    ]
  },
  {
    order: 3,
    dayName: 'Среда',
    isActive: false,
    points: [
      {
        name: 'В Москве',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Студия на Академической',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Перерыв',
        isActive: true,
        workingTime: [
          {
            startTime: '14:00',
            endTime: '15:00',
          }
        ]
      }
    ]
  },
  {
    order: 4,
    dayName: 'Четверг',
    isActive: true,
    points: [
      {
        name: 'В Москве',
        isActive: false,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Студия на Академической',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '13:00',
          },
          {
            startTime: '15:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Перерыв',
        isActive: false,
        workingTime: [
          {
            startTime: '14:00',
            endTime: '15:00',
          }
        ]
      }
    ]
  },
  {
    order: 5,
    dayName: 'Пятница',
    isActive: false,
    points: [
      {
        name: 'В Москве',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Студия на Академической',
        isActive: true,
        workingTime: [
          {
            startTime: '09:00',
            endTime: '18:00',
          }
        ]
      },
      {
        name: 'Перерыв',
        isActive: true,
        workingTime: [
          {
            startTime: '14:00',
            endTime: '15:00',
          }
        ]
      }
    ]
  },  
];
