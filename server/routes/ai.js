const OpenAI = require("openai")

const client = new OpenAI({
apiKey: process.env.OPENAI_KEY
})

async function generateWorld(prompt){

const completion = await client.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You create imaginative alien planets."},
{role:"user",content:prompt}
]

})

return completion.choices[0].message.content

}

module.exports = generateWorld