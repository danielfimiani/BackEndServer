
import mySql from 'mysql';

export default class TestMySqlDb {

    private conectionMySql;
    
    constructor(){
        this.conectionMySql = mySql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'test',
            port:3306
        })
    }

    Conectar() {
        this.conectionMySql.connect((err)=>{
            if(err){
                throw err;
            }else{
                console.log('Conectado a la base MySQL de TEST');
            }
        })
    }
};


