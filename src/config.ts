import PocketBase from 'pocketbase';

const url = '127.0.0.1:8090';
const httpProtocol = 'http';

//export const backUrl = `${httpProtocol}://${url}`;

export const pb = new PocketBase(`${httpProtocol}://${url}`);
