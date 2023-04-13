import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'

import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/', async ( req, res ) => (
    res.status(200).send(' hello ')
))

app.post('/', async (req, res) => {
    try {
        const { message } = req.body
//         console.log(message)
        res.status(200).send(message)
        const response = await openai.createImage({
            prompt: message,
            n: 4,
            size: "1024x1024",
        });
        console.log(response.data)
        res.json({
            // data: response.data.data[0]
            message: response.data.data,
        })
    } catch (error) {
        console.log('something went wrong ',error)
    }
})



app.listen(5000, () => console.log('Server is running on port http://localhost:5000'))

