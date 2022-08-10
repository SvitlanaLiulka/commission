import fs from 'fs';

export const getDataFromFile = (pathToJSON) => {
  const fileJSON = fs.readFileSync(pathToJSON);
   return JSON.parse(fileJSON);
};
