import Server from './class/server';
<<<<<<< HEAD

const server = new Server();

server.start(() => {
    console.log(`Servidor corriendo en ${server.host}:${server.port}`);
});
=======
import userRoute from './routes/usuarios';
import TestMySqlDb from './class/dbMysql';
import TestMongoDb from './class/dbMongoDb';

//Instanciamos el server
const server = new Server();
server.start(() => {
    console.log(`Server running on ${server.host}:${server.port}`);
});

//Rutas de la app
server.app.use('/users',userRoute);

//Conexion MySql
const BaseTestMySql = new TestMySqlDb();
BaseTestMySql.Conectar();

//Conexion MongoDb
const BaseTestMongodb = new TestMongoDb(); 
BaseTestMongodb.Conectar();


>>>>>>> dev
