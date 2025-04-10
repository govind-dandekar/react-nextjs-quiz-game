"use server";

import Anthropic from "@anthropic-ai/sdk";
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { groq } from '@ai-sdk/groq';;
import { generateObject } from 'ai';
import { z } from 'zod';

// import { parseClaudeQuizResponse } from "./util/anthropic-api-parser"

import { DUMMY_QUESTIONS_EASY, DUMMY_QUESTIONS_MEDIUM, DUMMY_QUESTIONS_HARD } from "./dummy-questions";



// vercel implementation
export async function getQuestionsClaudeVercel(level: string){
  try {
    const { object } = await generateObject({
      model: anthropic("claude-3-5-sonnet-20241022"),
      schema: z.object({
        questionsArray: z.array(z.object({question: z.string(), answers: z.array(z.object({text: z.string(), correct: z.boolean()}))}))
      }),
      prompt: "please provide an array containing 10 quiz questions related to the kids tv show \"Bluey.\"  each question should have 4 possible answers, one of which is the correct answer.  the correct answer should be labelled as \"true\" and the incorrect answers should be labelled as \"false\".  out of three possible settings of \"easy\", \"medium\" and \"hard\", the user has requested " + level + "questions.  the position of the correct answer should be randomized.\n "
    })

    return object.questionsArray;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error('Error retrieving data from Claude. Fallback to static dummy questions');
    console.error("Claude error: "  + error.message );
    return getQuestionsDummy(level)
  }
}

export async function getQuestionsGeminiVercel(level: string){
  try {
    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001"),
      schema: z.object({
        questionsArray: z.array(z.object({question: z.string(), answers: z.array(z.object({text: z.string(), correct: z.boolean()}))}))
      }),
      prompt: "please provide an array containing 10 quiz questions related to the kids tv show \"Bluey.\"  each question should have 4 possible answers, one of which is the correct answer.  the correct answer should be labelled as \"true\" and the incorrect answers should be labelled as \"false\".  out of three possible settings of \"easy\", \"medium\" and \"hard\", the user has requested " + level + "questions.  the position of the correct answer should be randomized.\n "
    })

    return object.questionsArray;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error('Error retrieving data from Gemini. Fallback to static dummy questions');
    console.error("Gemini error: "  + error.message );
    return getQuestionsDummy(level)
  }
}

export async function getQuestionsGroqVercel(level: string){
  try {
    const { object } = await generateObject({
      model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
      schema: z.object({
        questionsArray: z.array(z.object({question: z.string(), answers: z.array(z.object({text: z.string(), correct: z.boolean()}))}))
      }),
      prompt: "please provide an array containing 10 quiz questions related to the kids tv show \"Bluey.\"  each question should have 4 possible answers, one of which is the correct answer.  the correct answer should be labelled as \"true\" and the incorrect answers should be labelled as \"false\".  out of three possible settings of \"easy\", \"medium\" and \"hard\", the user has requested " + level + "questions.  the position of the correct answer should be randomized.\n "
    })

    return object.questionsArray;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error('Error retrieving data from Groq. Fallback to static dummy questions');
    console.error("Groq error: "  + error.message );
    return getQuestionsDummy(level)
  }
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
    // log for vercel schema purposes
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
  
  // generated by nextjs docs AI
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000) // delay for testing & UI purposes
  })

  if (level === 'easy'){
    return DUMMY_QUESTIONS_EASY
  } else if (level === "medium"){
    return DUMMY_QUESTIONS_MEDIUM
  } else {
    return DUMMY_QUESTIONS_HARD
  }
}