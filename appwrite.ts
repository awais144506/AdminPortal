import { Client, Account, ID,AppwriteException } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e346356ddeac62c8ca');

    
    
export const login = async (email:string, password:string)=>{
    try{
        const account = new Account(client)
        return account.createEmailSession(email,password)
    }
    catch (error){
        const appwriteError = error as AppwriteException
        throw new Error (appwriteError.message)
    }
}
