import Server from './class/server';

const server = new Server();

server.start(() => {
    console.log(`Servidor corriendo en ${server.host}:${server.port}`);
});