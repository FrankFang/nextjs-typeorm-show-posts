import {createConnection, getConnectionManager} from 'typeorm';
import 'reflect-metadata';
import {Post} from 'src/entity/Post';
import {User} from 'src/entity/User';
import {Comment} from 'src/entity/Comment';
import config from 'ormconfig.json';

const create = async () => {
  // @ts-ignore
  return createConnection({
    ...config,
    entities: [Post, User, Comment]
  });
};

const promise = (async function () {
  const manager = getConnectionManager();
  if (!manager.has('default')) {
    return create();
  } else {
    const current = manager.get('default');
    if (current.isConnected) {
      return current;
    } else {
      return create();
    }
  }
})();


export const getDatabaseConnection = async () => {
  return promise;
};


