import { Client, Account, Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_END_POINT_URL)
    .setProject(import.meta.env.VITE_PROJECT_ID);


export const account = new Account(client)
export const databases = new Databases(client)