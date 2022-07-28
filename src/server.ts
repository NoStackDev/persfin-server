// const express = require('express')
// const { ApolloServer } = require('apollo-server-express')
import express from "express"
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/typeDefs";
import mongoose from "mongoose";


const startServer = async (): Promise<void> => {
    const app = express()
    const apolloServer = new ApolloServer({typeDefs, resolvers})

    await apolloServer.start()
    await mongoose.connect('mongodb://127.0.0.1:27017/persfin')

    apolloServer.applyMiddleware({app})
}

startServer()