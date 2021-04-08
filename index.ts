import Server from './class/server';
import userRoute from './routes/usuarios';
import TestMySqlDb from './class/dbMysql';

//Instanciamos el server
const server = new Server();
server.start(() => {
    console.log(`Server running on ${server.host}:${server.port}`);
});

//Rutas de la app
server.app.use('/users',userRoute);

//Conexion
const BaseTest = new TestMySqlDb();
BaseTest.Conectar();


