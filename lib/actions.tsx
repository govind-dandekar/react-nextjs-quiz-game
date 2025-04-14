"use server";
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { groq } from '@ai-sdk/groq';;
import { generateObject, LanguageModelV1 } from 'ai';
import { z } from 'zod';

// import { parseClaudeQuizResponse } from "./util/anthropic-api-parser"

import { DUMMY_QUESTIONS_EASY, DUMMY_QUESTIONS_MEDIUM, DUMMY_QUESTIONS_HARD } from "./dummy-questions";

const aiPromptStart = "please provide an array containing 10 quiz questions related to the kids tv show \"Bluey.\"  each question should have 4 possible answers, one of which is the correct answer.  the correct answer should be labelled as \"true\" and the incorrect answers should be labelled as \"false\".  out of three possible settings of \"easy\", \"medium\" and \"hard\", the user has requested "
const aiPromptEnd = "questions.  the position of the correct answer should be randomized.\n "

// vercel implementation
export async function getQuestionsVercel(level: string, selectedModel: string){
  let apiModel: LanguageModelV1 = anthropic("claude-3-5-sonnet-20241022");

  if (selectedModel === 'gemini'){
    apiModel = google("gemini-2.0-flash-001")
  } else if (selectedModel === 'llama') {
    apiModel = groq("meta-llama/llama-4-scout-17b-16e-instruct")
  } else if (selectedModel === 'deepseek'){
    apiModel = groq("deepseek-r1-distill-llama-70b")
  } 

  try {
    const { object } = await generateObject({
      model: apiModel,
      schema: z.object({
        questionsArray: z.array(z.object({question: z.string(), answers: z.array(z.object({text: z.string(), correct: z.boolean()}))}))
      }),
      prompt: aiPromptStart + level + aiPromptEnd
    })

    return object.questionsArray;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error('Error retrieving data from ' + selectedModel +  ". Fallback to static dummy questions");
    console.error(selectedModel +  " error: "  + error.message );
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