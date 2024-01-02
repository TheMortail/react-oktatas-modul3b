import { PayloadAction } from '@reduxjs/toolkit';

export type Animal = {
  id: number;
  text: string;
};

export type AddAnimalAction = PayloadAction<{ text: string }>;
export type DeleteAnimalAction = PayloadAction<{ id: number }>;

export type ZooState = {
  animals: Animal[];
};
