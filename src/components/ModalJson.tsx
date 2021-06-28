import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { scheduleSelectors, scheduleActions } from '../store';

/**
 * Компонент "Модальное окно с JSON"
 * 
 * @returns {JSX.Element} - реакт компонент
 */
export const ModalJson: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(scheduleSelectors.items);
  const showModal = useSelector(scheduleSelectors.showModal);

  const handleClickClose = useCallback(
    () => {
      dispatch(scheduleActions.toggleModal(false));
    },
    [],
  );

  if (!showModal) {
    return null;
  }

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Расписание успешно сохранено
              </h5>
              <button 
                onClick={handleClickClose}
                className="btn-close"
              />
            </div>
            <div className="modal-body">
              <pre>
                {JSON.stringify(items, null, '  ')}
              </pre>
            </div>
            <div className="modal-footer">
              <button 
                onClick={handleClickClose}
                className="btn btn-primary"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}