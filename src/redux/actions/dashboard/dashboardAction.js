import { SET_SKU_DATA } from '../types/types';

export const setSkuData = (value) => {
  return {
    type: SET_SKU_DATA,
    payload: { data: value },
  };
};
