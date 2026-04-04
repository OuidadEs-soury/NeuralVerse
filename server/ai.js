const OpenAI = require("openai")

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})

async function generateLore(name){

    try{

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages:[
                {role:"system",content:"You create lore for alien planets."},
                {role:"user",content:`Create lore for the planet ${name}`}
            ]
        })

        return completion.choices[0].message.content

    }catch(error){

        console.log("AI ERROR:",error)

        return "A mysterious planet full of unknown alien life."

    }

}

module.exports = generateLore