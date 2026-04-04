const OpenAI=require("openai")

const client=new OpenAI({

apiKey:process.env.OPENAI_KEY

})

async function generateLore(name){

const completion=await client.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You create lore for alien planets."},
{role:"user",content:"Create lore for planet "+name}
]

})

return completion.choices[0].message.content

}

module.exports=generateLore