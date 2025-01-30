"use server";

import Anthropic from "@anthropic-ai/sdk";

import { parseClaudeQuizResponse } from "./util/anthropic-api-parser"

import { DUMMY_QUESTIONS_EASY, DUMMY_QUESTIONS_MEDIUM, DUMMY_QUESTIONS_HARD } from "./dummy-questions";

export async function getQuestionsAnthropic(level: string) {
  
  try {
    const anthropic = new Anthropic({
      // defaults to process.env["ANTHROPIC_API_KEY"]
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
    }, 5000) // 5 second delay
  })

  if (level === 'easy'){
    return DUMMY_QUESTIONS_EASY
  } else if (level === "medium"){
    return DUMMY_QUESTIONS_MEDIUM
  } else {
    return DUMMY_QUESTIONS_HARD
  }
}