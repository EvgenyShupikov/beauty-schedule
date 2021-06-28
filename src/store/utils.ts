import { ScheduleState } from "./types";

/**
 * Ищет точку, в которой работает салон
 * @param state состояние модуля
 * @param dayName день недели
 * @param pointName имя точки
 * @returns точка
 */
export const findPoint = (
  state: ScheduleState,
  dayName: string,
  pointName: string,
) => state.items
        .find(item => item.dayName === dayName)!
        .points
        .find(item => item.name === pointName)!;
