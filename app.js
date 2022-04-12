import express from "express";
import Distance from "./src/controllers/Distance.js";
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("servidor em http://localhost:3000")
})

Distance.router(app);