/** Интервал время работы */
export type WorkingTime = {
    /** Время начала */
    startTime: string;
    /** Время окончания */
    endTime: string; 
}

/** Расписание в точке */
export type PointSchedule = {
    /** Флаг "Салон работает в этой точке" */
    isActive: boolean;
    /** Имя точки */
    name: string;
    /** Время работы */
    workingTime: WorkingTime[];
}

/** Расписание работы в указанный день */
export type DaySchedule = {
    /** Флаг "Салон работаеит в этот день" */
    isActive: boolean;
    /** Порядок сортировки */
    order: number;
    /** День недели */
    dayName: string;
    /** Точки */
    points: PointSchedule[];
}
