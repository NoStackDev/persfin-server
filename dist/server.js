var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import mongoose from "mongoose";
import typeDefs from "./models/typeDefs";
import morgan from "morgan";
import resolvers from "./resolvers";
const listen = (PORT) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express();
        const httpServer = http.createServer(app);
        app.use(morgan("common"));
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        });
        yield server.start();
        server.applyMiddleware({ app });
        return new Promise((resolve, reject) => {
            httpServer.listen(PORT).once("listening", resolve).once("error", reject);
        });
    }
    catch (err) {
        console.log(err.message);
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect("mongodb://127.0.0.1:27017/persfin");
        yield listen(4000);
        console.log("🚀 Server is ready at http://localhost:4000/graphql");
    }
    catch (err) {
        console.error("💀 Error starting the node server", err);
    }
});
main();
