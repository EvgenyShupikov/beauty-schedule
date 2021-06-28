import { AppState } from './types';

export const scheduleSelectors = {
  /** Селектор флага "Идет загрузка" */
  isLoading: (state: AppState) => state.schedule.isLoading,
  /** Селектор расписания */
  items: (state: AppState) => state.schedule.items,
  /** Селектор ошибки */
  error: (state: AppState) => state.schedule.error,
  /** Селектор флага "Показать модальное окно" */
  showModal: (state: AppState) => state.schedule.showModal,
};