import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeautySchedule.module.css';
import { scheduleActions } from '../store';
import { WorkingTime } from '../types';

const inputClassName = `form-control ${styles.time__input}`;
const iconClassNameAdd = `fas fa-plus ${styles.time__button_add}`;
const iconClassNameDelete = `fas fa-times ${styles.time__button_delete}`;

/** Пропсы компонента */
type TimeProp = {
  /** День недели */
  dayName: string;
  /** Точка */
  pointName: string;
  /** Индекс текущего интервала работы */
  index: number;
  /** Интервал работы */
  value: WorkingTime;
  /** Это последний интервал */
  isLast: boolean;
}

/**
 * Компонент "Расписание работы"
 * 
 * @returns {JSX.Element} - реакт компонент
 */
export const Time = React.memo<TimeProp>(({
  dayName,
  pointName,
  index,
  value,
  isLast,
}) => {

  const dispatch = useDispatch();

  const iconClassName = isLast ? iconClassNameAdd : iconClassNameDelete;

  /** Обработчик клика по кнопке */
  const handleClick = useCallback(
    () => {
      if (isLast) {
        dispatch(scheduleActions.addWorkTime({ dayName, pointName }));
      }
      else {
        dispatch(scheduleActions.deleteWorkTime({ dayName, pointName, index }));
      }
    },
    [isLast, dayName, pointName, index],
  );

  return (
    <div className={styles.time}>
      с
      <input
        type="time"
        className={inputClassName}
        placeholder="ЧЧ:ММ"
        value={value.startTime}
        onChange={(event) => dispatch(scheduleActions.changeWorkTime({ 
          dayName, 
          pointName, 
          index,
          workingTime: {
            startTime: event.target.value,
            endTime: value.endTime,
          }
        }))}
      />

      до
      <input
        type="time"
        className={inputClassName}
        placeholder="ЧЧ:ММ"
        value={value.endTime}
        onChange={(event) => dispatch(scheduleActions.changeWorkTime({ 
          dayName, 
          pointName, 
          index,
          workingTime: {
            startTime: value.startTime,
            endTime: event.target.value,
          }
        }))}
      />

      <i
        className={iconClassName}
        onClick={handleClick}
      />
    </div>
  );
});