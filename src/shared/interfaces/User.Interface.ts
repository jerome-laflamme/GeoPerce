import type { MarkerInterface } from '../interfaces/Marker.Interface';

export interface UserInterface {
  _id: string;
  name: string,
  local:{
    email: string;
    password: string;
  };
  createdAt: Date,
  updatedAt: Date,
  markers?: MarkerInterface[];
}

export type UserFormInterface = Partial<UserInterface>;

export interface SigninFormInterface {
  local:{
    password: string;
    email: string;
  }
}

export interface UserInterfaceSignUp {
  name: string,
  local:{
    email: string;
    password: string;
  };
}