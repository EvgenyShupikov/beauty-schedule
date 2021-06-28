import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DaySchedule, WorkingTime } from '../types';
import { ScheduleState } from './types';
import { findPoint } from './utils';

/** Начальное состояние модуля */
const initialState: ScheduleState = {
  isLoading: false,
  items: [],
  error: '',
  showModal: false,
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
    setError: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
    setItems: (state, action: PayloadAction<DaySchedule[]>) => ({
      ...state,
      items: action.payload,
    }),
    toggleDay: (state, action: PayloadAction<DaySchedule>) => ({
      ...state,
      items: state.items
        .filter(item => item.dayName !== action.payload.dayName)
        .concat({
          ...action.payload,
          isActive: !action.payload.isActive,
        })
    }),
    togglePoint: (
      state,
      action: PayloadAction<{ dayName: string, pointName: string }>
    ) => {
      const point = findPoint(
        state,
        action.payload.dayName,
        action.payload.pointName,
      );
      point.isActive = !point.isActive;

      state.items = state.items.concat();
    },
    addWorkTime: (
      state,
      action: PayloadAction<{ dayName: string, pointName: string }>
    ) => {
      const point = findPoint(
        state,
        action.payload.dayName,
        action.payload.pointName,
      );
      point.workingTime.push({
        startTime: '09:00',
        endTime: '10:00',
      });

      state.items = state.items.concat();
    },
    deleteWorkTime: (
      state,
      action: PayloadAction<{ 
        dayName: string, 
        pointName: string,
        index: number,
      }>
    ) => {
      const point = findPoint(
        state,
        action.payload.dayName,
        action.payload.pointName,
      );
      point.workingTime.splice(action.payload.index, 1);

      state.items = state.items.concat();
    },
    changeWorkTime: (
      state,
      action: PayloadAction<{ 
        dayName: string, 
        pointName: string,
        index: number,
        workingTime: WorkingTime,
      }>
    ) => {
      const point = findPoint(
        state,
        action.payload.dayName,
        action.payload.pointName,
      );
      point.workingTime[action.payload.index] = action.payload.workingTime;

      state.items = state.items.concat();
    },
    toggleModal: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showModal: action.payload,
    }),
  }
});

export const scheduleActions = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer;
