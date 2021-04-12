import mongoose  from 'mongoose';

export default class TestMongoDb {

    private conectionMongoDb;
    private connectOptions = {};
    
    constructor(){
        this.conectionMongoDb = 'mongodb://localhost:27017/test';
        this.connectOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    }

    Conectar() {
        try {
            mongoose.connect(this.conectionMongoDb, this.connectOptions);
            console.log('Conectado a la base MongoDb de TEST');
        } catch (err) {
            throw err
        }
    }
};
