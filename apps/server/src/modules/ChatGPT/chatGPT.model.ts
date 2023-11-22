import openai from './openai'


export async function createChatCompletion(prompt: string) {

  // Old
  // const chatCompletion = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: [{role: "user", content: "Hello world"}],
    // });
    // console.log(chatCompletion.data.choices[0].message);
    
    // New

const prompt2 = `List 10 words about this topic: ${prompt}`

console.log('here')

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt2}],
    });
    console.log(chatCompletion.choices[0].message);
  
    return chatCompletion.choices[0].message
  }