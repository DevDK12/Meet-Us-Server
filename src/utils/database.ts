import mongoose from "mongoose";





export const pingDB = () => {
    const readyState = mongoose.connection.readyState;

    if (readyState === 1 || readyState === 2) {
        console.log('DB is connected');
    } else {
        console.log('DB is not connected');
    }
}





const mongoConnect = async (url: string, dbName: string, server: () => void) => {
    try {
        if (url === '') {
            throw new Error('MONGO_URI is not defined or empty');
        }
        await mongoose.connect(url, {
            dbName,
        });

        pingDB();

        console.log(`DB connected to ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`);

        server();
    }
    catch (err) {
        console.log('Connection to Mongodb failed', err)
    }

}


export default mongoConnect;