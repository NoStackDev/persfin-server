import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import mongoose from "mongoose";
import typeDefs from "./models/typeDefs";
import morgan from "morgan";
import resolvers from "./resolvers";

const listen = async (PORT: number): Promise<void> => {
  try {
    const app = express();
    const httpServer = http.createServer(app);

    app.use(morgan("common"));

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({ app });

    return new Promise((resolve, reject) => {
      httpServer.listen(PORT).once("listening", resolve).once("error", reject);
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

const main = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/persfin");
    await listen(4000);
    console.log("🚀 Server is ready at http://localhost:4000/graphql");
  } catch (err) {
    console.error("💀 Error starting the node server", err);
  }
};

main();
