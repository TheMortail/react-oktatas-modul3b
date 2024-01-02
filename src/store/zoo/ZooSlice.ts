import { createSlice } from '@reduxjs/toolkit';
import { AddAnimalAction, Animal, ZooState, DeleteAnimalAction } from './types';

export const initialState: ZooState = {
  animals: [{ id: 1, text: 'kiskutya' }],
};

const zooSlice = createSlice({
  name: 'zoo',
  initialState,
  reducers: {
    addAnimal: (state, action: AddAnimalAction) => {
      const newAnimal: Animal = {
        id: state.animals.length + 1,
        text: action.payload.text,
      };
      state.animals.push(newAnimal);
    },
    deleteAnimal: (state, action: DeleteAnimalAction) => {
      state.animals = state.animals.filter(
        (animal) => animal.id !== action.payload.id,
      );
    },
  },
});

export const { addAnimal, deleteAnimal } = zooSlice.actions;
export const ZooReducer = zooSlice.reducer;
