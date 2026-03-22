import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"

//app config
dotenv.config()
const app = express()
const port = process.env.PORT || 8088
mongoose.set('strictQuery', true);

//middlewares

app.use(cors({
    origin: ["http://localhost:3000", "http://3.107.52.207:3000"]
}))
app.use(express.json())


//db config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("DB Connected")
    }
})

app.get("/api/get-product", (req, res) => {
    let data = [{
        id: 1,
        name: "product 3"
    },
    {
        id: 2,
        name: "product 2"
    }]
    res.send(data);
})


//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, "0.0.0.0", () => console.log(`Listening on localhost:${port}`))