import { setloader } from '../../loader/loaderAction';
import { api } from '../../../../api/api';
import { setSkuData } from '../../dashboard/dashboardAction';
import { store } from '../../../storeConfig/store';
export const getSku = async (value) => {
  store.dispatch(setloader(true));
  // api called to get sku data
  await api(
    `api/demo_api_inventory/1.0/sku/search?sku_name=${value}`,
    {},
    'get'
  )
    .then((res) => {
      if (res.status === 400) {
        console.log('error');
      } else {
        // updating store once data retrived
        store.dispatch(setSkuData(res.data.sku));
      }
      store.dispatch(setloader(false));
    })
    .catch((err) => {
      console.log('Some internal error occured! Try again!');
    });
};
