import { MongoClient } from "mongodb";

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kf3u6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db(process.env.DB_NAME);
