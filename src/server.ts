import { Server } from "http";
import app from "./app.js";
import { baseUrl, mongoUri, port } from "./config/config.js";

import mongoConnect from "./utils/database.js";




const server = new Server(app);






mongoConnect(mongoUri, 'meet_us', () => {
    server.listen(port, () => {
        console.log(`Server listening on ${baseUrl}/${port}/api/v1`);
    })
});