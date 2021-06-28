import { mock } from "./mock";
import { DaySchedule } from "./types";

/**
 * Запрашивает расписание по API
 * @returns {DaySchedule[]} расписание салона
 */
export const getSchedule = async () => {
    return await mock;
}

/**
 * Отправляет в API запрос на сохранение расписания
 * @param schedule расписание салона
 * @returns {FakeApiResponse} результат сохранения
 */
export const saveSchedule = async (schedule: DaySchedule[]) => {
    return await schedule;
}
