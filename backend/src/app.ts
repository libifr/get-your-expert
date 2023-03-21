import express from "express";
import authController from "./6-controllers/auth-controller";
import homeController from "./6-controllers/home-controller";


// Create express server
const server = express()

// Tell the server to use json
server.use(express.json())

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Tell the server to listen to any router written in our controller:
server.use("/api", authController);
server.use("/", homeController);


// Running server
server.listen(3001,()=>console.log("Listening on http://localhost:3001"))