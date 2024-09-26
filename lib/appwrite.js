import { Client, Account, ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'http://cloud.appwrite.io/v1',
    platform: 'com.emperor.solcare',
    projectId: '66d2b8940014fa053d02',
    databaseId: '66d2ba510030c850809e',
    userCollectionId: '66d2ba760027d3e7a342',
    storageId: '66d2bc7e000696a20cd0'
}

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'John Doe')
    .then(function (response) {
      console.log(response);
    }, function (err) {
      console.log(err);
    })

}
