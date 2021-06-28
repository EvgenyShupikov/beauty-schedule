import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeautySchedule.module.css';
import { scheduleActions } from '../store';
import { DaySchedule } from '../types';
import { Point } from './Point';

/** Пропсы компонента */
type DayProp = {
  /** Расписание в указанный день */
  value: DaySchedule;
}

/**
 * Компонент "Расписание работы"
 * 
 * @returns {JSX.Element} - реакт компонент
 */
export const Day = React.memo<DayProp>(({ value }) => {

  const dispatch = useDispatch();

  const {
    dayName,
    isActive,
    points,
  } = value;

  const handleToggle = useCallback(
    () => {
      dispatch(scheduleActions.toggleDay(value))
    },
    [value],
  );

  return (
    <div className="card mb-3">
      <div className="card-header">

        <div className={styles.day__title}>
          <div className={styles.day__name}>
            {dayName}
          </div>
          <div className="form-check form-switch">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isActive}
                onClick={handleToggle}
              />
            </label>
          </div>
        </div>
      </div>

      {isActive && (
        <ul className="list-group list-group-flush">
          {points.map(point => (
            <Point
              key={dayName}
              dayName={dayName}
              value={point} 
            />
          ))}
        </ul>
      )}
    </div>
  );
})