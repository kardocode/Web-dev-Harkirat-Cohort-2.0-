import express from "express";
import cookieParser from "cookie-Parser"; // parses a very long cookie string and gets you an object
import cors from "cors";
import jwt , { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_Secret = "test123";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors,({
    credentials : true,
    origin : "http://localhost:3000"
}));
 