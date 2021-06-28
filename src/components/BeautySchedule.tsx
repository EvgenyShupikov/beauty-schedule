import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './BeautySchedule.module.css';
import { Day } from './Day';
import { apiActions, scheduleSelectors } from '../store';
import { ModalJson } from './ModalJson';

/**
 * Компонент "Расписание работы"
 * 
 * @returns {JSX.Element} - реакт компонент
 */
export const BeautySchedule: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(scheduleSelectors.items);
  const isLoading = useSelector(scheduleSelectors.isLoading);

  useEffect(() => {
    dispatch(apiActions.loadSchedule());
  }, []);

  /** Обработчик клика сохранить */
  const handleClickSave = useCallback(
    () => {
      dispatch(apiActions.saveSchedule());
    },
    [],
  );

  const sortedDays = useMemo(() =>
    items
      .concat()
      .sort((day1, day2) => day1.order - day2.order)
    , [items]);

  return (
    <>
      {sortedDays.map(daySchedule => (
        <Day
          key={daySchedule.dayName}
          value={daySchedule}
        />))}

      <button 
        disabled={isLoading}
        className="btn btn-primary"
        onClick={handleClickSave}
      >
        Сохранить
      </button>

      <ModalJson />
    </>
  );
}