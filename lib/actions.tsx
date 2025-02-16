"use server";

import Anthropic from "@anthropic-ai/sdk";

import { parseClaudeQuizResponse } from "./util/anthropic-api-parser"

import { DUMMY_QUESTIONS_EASY, DUMMY_QUESTIONS_MEDIUM, DUMMY_QUESTIONS_HARD } from "./dummy-questions";

// implement gemini logic
export async function getQuestionsGemini(level: string){
  const {
    GoogleGenerativeAI
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "make it fun for kids\n",
  });
  
  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "please generate a JSON object with an array of 10 quiz questions about the kid's tv show \"bluey\". each question should have four possible answers.  each answer should be flagged as correct: true or correct: false.  out of \"easy\", \"medium\" and \"hard\" questions, the user has selected \"easy\" questions"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Alright! Get ready for a Bluey quiz that's easier than riding a featherwand! Here comes the super fun JSON object full of easy peasy lemon squeezy questions about your favorite Heelers:\n\n```json\n{\n  \"quizTitle\": \"Bluey Bonanza: Easy Peasy Quiz!\",\n  \"questions\": [\n    {\n      \"question\": \"What kind of dog is Bluey?\",\n      \"answers\": [\n        {\"text\": \"A Beagle\", \"correct\": false},\n        {\"text\": \"A Blue Heeler\", \"correct\": true},\n        {\"text\": \"A Dalmatian\", \"correct\": false},\n        {\"text\": \"A Poodle\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"Who is Bluey's little sister?\",\n      \"answers\": [\n        {\"text\": \"Muffin\", \"correct\": false},\n        {\"text\": \"Coco\", \"correct\": false},\n        {\"text\": \"Honey\", \"correct\": false},\n        {\"text\": \"Bingo\", \"correct\": true}\n      ]\n    },\n    {\n      \"question\": \"What's the name of Bluey's mum?\",\n      \"answers\": [\n        {\"text\": \"Chilli\", \"correct\": true},\n        {\"text\": \"Honey\", \"correct\": false},\n        {\"text\": \"Lucky's Mum\", \"correct\": false},\n        {\"text\": \"Mia\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"What is Bandit's (Dad's) job?\",\n      \"answers\": [\n        {\"text\": \"Teacher\", \"correct\": false},\n        {\"text\": \"Archaeologist\", \"correct\": true},\n        {\"text\": \"Doctor\", \"correct\": false},\n        {\"text\": \"Chef\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"In 'Keepy Uppy', what do they NOT want to touch the ground?\",\n      \"answers\": [\n        {\"text\": \"A Book\", \"correct\": false},\n        {\"text\": \"A Pillow\", \"correct\": false},\n        {\"text\": \"A Balloon\", \"correct\": true},\n        {\"text\": \"A Shoe\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"What game does Bluey often play with her dad where he pretends to be old?\",\n      \"answers\": [\n        {\"text\": \"Grannies\", \"correct\": true},\n        {\"text\": \"Keepy Uppy\", \"correct\": false},\n        {\"text\": \"The Floor is Lava\", \"correct\": false},\n        {\"text\": \"Charades\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"What color is Bingo?\",\n      \"answers\": [\n        {\"text\": \"Blue\", \"correct\": false},\n        {\"text\": \"Orange\", \"correct\": true},\n        {\"text\": \"Green\", \"correct\": false},\n        {\"text\": \"Purple\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"What is Lucky's Dad always doing?\",\n      \"answers\": [\n        {\"text\": \"Mowing the lawn\", \"correct\": true},\n        {\"text\": \"Cooking\", \"correct\": false},\n        {\"text\": \"Sleeping\", \"correct\": false},\n        {\"text\": \"Playing Games\", \"correct\": false}\n      ]\n    },\n    {\n      \"question\": \"What kind of pet does Judo have?\",\n      \"answers\": [\n        {\"text\": \"A Cat\", \"correct\": false},\n        {\"text\": \"A Hamster\", \"correct\": false},\n        {\"text\": \"A Spider\", \"correct\": false},\n        {\"text\": \"None\", \"correct\": true}\n      ]\n    },\n     {\n      \"question\": \"What game do Bluey and Bingo love playing with Chattermax?\",\n      \"answers\": [\n        {\"text\": \"The floor is lava\", \"correct\": false},\n        {\"text\": \"Hotel\", \"correct\": false},\n        {\"text\": \"Dance mode\", \"correct\": true},\n        {\"text\": \"Charades\", \"correct\": false}\n      ]\n    }\n  ]\n}\n```\n\nHave fun quizzing!  You're going to do great! Now, ready to play and become a Bluey expert?! Woo hoo! 🎉\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("please generate a JSON object with an array of 10 quiz questions about the kid's tv show \"bluey\". each question should have four possible answers.  each answer should be flagged as correct: true or correct: false.  out of \"easy\", \"medium\" and \"hard\" questions, the user has selected" + level + " questions");
    console.log(JSON.parse(result.response.text()).questions);
    return(JSON.parse(result.response.text()).questions);
  }
  
  console.log('run');
  return run();
}


export async function getQuestionsAnthropic(level: string) {
  try {
    const anthropic = new Anthropic({
      apiKey: process.env["ANTHROPIC_API_KEY"],
    });
    
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 8192,
      temperature: 1.0,
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "please provide an array containing 10 quiz questions related to the kids tv show \"Bluey.\"  each question should have 4 possible answers, one of which is the correct answer.  the correct answer should be labelled as \"true\" and the incorrect answers should be labelled as \"false\".  out of three possible settings of \"easy\", \"medium\" and \"hard\", the user has requested " + level + "questions.  the position of the correct answer should be randomized.\n "
            }
          ]
        }
      ]
    });
    // @ts-expect-error/sdk-error
    return parseClaudeQuizResponse(msg)
/* eslint-disable @typescript-eslint/no-explicit-any */
} catch (error: any) {
  console.error('Error retrieving data from Claude. Fallback to static dummy questions');
  console.error("Claude error: "  + error.message )
  return getQuestionsDummy(level)
}

}
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getQuestionsDummy(level: string): Promise<any>{
  // simulate API delay for "isPending" testing
  // Simulate an asynchronous operation with setTimeout
  // generated by nextjs docs AI
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000) // delay for testing
  })

  if (level === 'easy'){
    return DUMMY_QUESTIONS_EASY
  } else if (level === "medium"){
    return DUMMY_QUESTIONS_MEDIUM
  } else {
    return DUMMY_QUESTIONS_HARD
  }
}