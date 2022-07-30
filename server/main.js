// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../app/api/collections/ContactsCollection';
import '../app/api/methods/ContactsMethods';
import '../app/api/publications/ContactsPublication';
import '../infra/CustomError';

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  Migrations.migrateTo('latest');
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);
});
