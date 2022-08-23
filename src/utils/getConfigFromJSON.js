import fs from 'fs';

export const getDataFromFile = (pathToJSON) => {
  const fileJSON = fs.readFileSync(pathToJSON);
  try {
    if (JSON.parse(fileJSON)) {
      return JSON.parse(fileJSON);
    }
  } catch (err) {
    console.error('Please select JSON files only!');
    process.exit();
  }

  return {};
};
