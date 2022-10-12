import { users } from './users';
import { channels } from './channels';
import { combineReducers } from 'redux';

export const admin = combineReducers({ users, channels });
