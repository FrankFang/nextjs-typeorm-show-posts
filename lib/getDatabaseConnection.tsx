import {createConnection} from 'typeorm';

const promise = (async function () {
  console.log('创建connection.')
  return await createConnection();
})();


export const getDatabaseConnection = async () => {
  return promise;
};


