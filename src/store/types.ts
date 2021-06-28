import { DaySchedule } from "../types";

/** Состояние модуля */
export type ScheduleState = {
  /** Флаг "Идет загрузка" */
  isLoading: boolean;
  /** Расписание салона */
  items: DaySchedule[];
  /** Текст ошибки */
  error: string;
  /** Флаг "Показыть модальное окно" */
  showModal: boolean;
};

/** Состояние приложения */
export type AppState = {
  /** Модуль расписание */
  schedule: ScheduleState;
}