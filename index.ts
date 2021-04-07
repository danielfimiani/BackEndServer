import Server from './class/server';

const server = new Server();
server.start(() => {
    console.log(`Server running on ${server.host}:${server.port}`);
});