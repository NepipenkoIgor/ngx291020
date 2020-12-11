import { createFeatureSelector } from '@ngrx/store';
import { IUser } from '../reducers/user.reducer';


export const selectUser = createFeatureSelector<IUser>('user');
