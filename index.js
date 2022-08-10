import { getConfigFromAPI } from './src/utils/getConfigFromAPI.js';
import { CALCULATE_COMMISSION_MAP } from './src/constants/calculateCommissionMap.js';
import { getDataFromFile } from './src/utils/getConfigFromJSON.js';

const calculateCommission = async (data) => {
  const response = await getConfigFromAPI();
  const result = data.map((value) => CALCULATE_COMMISSION_MAP[value.user_type][value.type](
    value.operation.amount,
    response,
    value.date,
    value.user_id,
  ));
  console.log(...result);
}

const JSONFile = getDataFromFile('input.json');

console.log(calculateCommission(JSONFile));
