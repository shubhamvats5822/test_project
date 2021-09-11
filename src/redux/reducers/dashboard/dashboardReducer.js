import { SET_SKU_DATA } from '../../actions/types/types';

const initState = {
  sku: [],
};

const DashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SKU_DATA:
      return { ...state, sku: action.payload.data };
    default:
      return { ...state };
  }
};

export default DashboardReducer;
