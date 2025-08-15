import express from 'express';
import { client } from '@repo/db/client'

const app = express();
app.use(express.json()); // for JSON bodies

app.get("/", (req, res) => {
    res.send("Hello there!!")
})


app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    console.log(user)

    res.json({
        message: "signup successful",
        id: user.id
    })

})

app.listen(3002)