import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeautySchedule.module.css';
import { scheduleActions } from '../store';
import { PointSchedule } from '../types';
import { Time } from './Time';

/** Пропсы компонента */
type PointProp = {
  dayName: string;
  value: PointSchedule;
}

/**
 * Компонент точка салона
 */
export const Point = React.memo<PointProp>(({ value, dayName }) => {

  const dispatch = useDispatch();

  /** Обработчик переключения */
  const handleToggle = useCallback(
    () => {
      dispatch(scheduleActions.togglePoint({
        dayName,
        pointName: value.name
      }));
    },
    [dayName, value],
  );

  const {
    isActive,
    name,
    workingTime,
  } = value;

  return (
    <li className="list-group-item">
      <div className={styles.point}>

        <div className={styles.point__name}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isActive}
                onClick={handleToggle}
              />
              {name}
            </label>
          </div>
        </div>

        {isActive && (
          <div>
            {workingTime.map((time, index) => (
              <Time
                // TODO на реальный идентификатор
                key={index}
                value={time}
                isLast={index === value.workingTime.length - 1}
                dayName={dayName}
                pointName={name}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </li>
  );
});