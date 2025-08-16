import express from 'express'
import cors from 'cors'

import noteRoute from './routes/noteRoute.js'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'https://authtest-1.onrender.com/']
}))
app.use('/notes', noteRoute)

app.get('/', (req, res) => {
    res.send("home page")
})

app.listen(3000, () =>{
    console.log("listening on port 3000")
})


