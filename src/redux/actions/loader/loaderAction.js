import { SET_LOADER } from '../types/types';

export const setloader = (value) => {
  return {
    type: SET_LOADER,
    payload: { data: value },
  };
};
