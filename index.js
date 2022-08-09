import { dataFromAPI } from './src/utils/dataFromAPI.js';
import { USERS_TYPE } from './src/constants/usersType.js';
import { DATA_FROM_JSON } from './src/constants/dataFromJSON.js';

const calculateCommission = async (data) => {
  const response = await dataFromAPI();
  data.forEach((value) => USERS_TYPE[value.user_type][value.type](
    value.operation.amount,
    response,
    value.date,
    value.user_id,
  ));
}
console.log(calculateCommission(DATA_FROM_JSON));
