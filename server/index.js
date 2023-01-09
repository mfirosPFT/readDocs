const {Configuration, OpenAIApi} = require("openai")
const express = require('express')

const configuration = new Configuration (
    {
        organization: "org-1GXFuurQPV6raG5zHEnJ6rMx",
        apiKey: "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"
    }
);
const openai = new OpenAIApi(configuration);


const app = express()
const port = 3080
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.post('/send-message2', async (req, res) => {
    // console.log(req.body)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test!",
        max_tokens: 7,
        temperature: 0
    })
    console.log(response.data.choices[0].text)
    res.json(
        {
            data: response.data.choices[0].text
        }
    )
    }
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)

// add cors and body-parser



