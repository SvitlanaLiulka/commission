import { getConfigFromAPI } from './src/utils/getConfigFromAPI.js';
import { CALCULATE_COMMISSION_MAP } from './src/constants/calculateCommissionMap.js';
import { getDataFromFile } from './src/utils/getConfigFromJSON.js';

const calculateCommission = async (pathToJSON) => {
  const commissionConfig = await getConfigFromAPI().catch((error) => console.error(error.message));
  const JSONFile = getDataFromFile(pathToJSON);
  const finalCommissions = JSONFile.map(({operation, date, user_id, user_type,type}) => (
    CALCULATE_COMMISSION_MAP[user_type][type](
      operation.amount,
      commissionConfig,
      date,
      user_id,
  )));

  console.log(...finalCommissions);
}

console.log(calculateCommission('input.json'));
