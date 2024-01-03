import MongoStore from 'connect-mongo';
import { connectionMongoDb } from '../connectionDataBase.js';

export const mongoStoreOptions = {
    store: MongoStore.create({
        mongoUrl: connectionMongoDb,
        ttl:120,
        crypto:{
            secret:'22324'
        }
    }),
    secret: '13cao22ecg',
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:120000
    }
}