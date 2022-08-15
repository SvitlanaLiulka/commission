import { getConfigFromAPI } from './src/utils/getConfigFromAPI.js';
import { CALCULATE_COMMISSION_MAP } from './src/constants/calculateCommissionMap.js';
import { getDataFromFile } from './src/utils/getConfigFromJSON.js';

const calculateCommission = async (pathToJSON) => {
  const commissionConfig = await getConfigFromAPI().catch((error) => console.error(error.message));
  const data = getDataFromFile(pathToJSON);
  const finalCommissions = data.map(({operation, date, user_id, user_type,type}) => (
    CALCULATE_COMMISSION_MAP[user_type][type](
      operation.amount,
      commissionConfig,
      date,
      user_id,
  )));

  console.log(finalCommissions.join('\n'));
}
console.log(calculateCommission(process.argv[2]));
