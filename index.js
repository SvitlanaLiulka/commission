import { getConfigFromAPI } from './src/utils/getConfigFromAPI.js';
import { CALCULATE_COMMISSION_MAP } from './src/constants/calculateCommissionMap.js';
import { getDataFromFile } from './src/utils/getConfigFromJSON.js';

const calculateCommission = async (pathToJSON) => {
  const commissionConfig = await getConfigFromAPI().catch((error) => console.error(error.message));
  const data = getDataFromFile(pathToJSON);
  const finalCommissions = data
    .map(({ operation, date, type, user_type: userType, user_id: userId }) => (
      CALCULATE_COMMISSION_MAP[userType][type](
        operation.amount,
        commissionConfig,
        date,
        userId,
      )
    ));

  console.log(finalCommissions.join('\n'));
};

console.log(calculateCommission(process.argv[2]));
