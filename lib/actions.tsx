"use server";

import Anthropic from "@anthropic-ai/sdk";
// @ts-expect-error/sdk-issue
import { ContentBlock } from "@anthropic-ai/sdk/resources";

import { DUMMY_QUESTIONS_EASY, DUMMY_QUESTIONS_MEDIUM, DUMMY_QUESTIONS_HARD } from "./dummy-questions";

// add error handling -- fall back to dummy responses if API call fails
export async function getQuestionsAnthropic(level: string) {
  
  const anthropic = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: process.env["ANTHROPIC_API_KEY"],
  });
  
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    temperature: 0,
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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  function contentBlockToJson(block: ContentBlock): any {
    return {
      type: block.type,
      text: block.text,
    };
  }
  
  // parsing calls from Claude API and Pro
  // For an array of ContentBlocks
  //* eslint-disable @typescript-eslint/no-explicit-any */
  const handleMultipleBlocks = (blocks: ContentBlock[]): any => {
    // Convert array of ContentBlocks to JSON
    const jsonData = JSON.stringify(blocks.map(block => contentBlockToJson(block)));
    console.log('contentBlockToJSON')
    console.log(jsonData);
    //
    const dataUnparsed = JSON.parse(jsonData);
    console.log('first parse pass')
    console.log(dataUnparsed);
    
    // this fx provided by claude (had to add index[0])
    const jsonString = dataUnparsed[0].text.substring(
      dataUnparsed[0].text.indexOf('['),
      dataUnparsed[0].text.lastIndexOf(']') + 1
    );
    console.log('jsonString');
    console.log(jsonString);

    
  const questions = JSON.parse(jsonString);
  console.log('questionsArray passed to client');
  console.log(questions);

  return questions;

  };

  return handleMultipleBlocks(msg.content)
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getQuestionsDummy(level: string): Promise<any>{
  if (level === 'easy'){
    return DUMMY_QUESTIONS_EASY
  } else if (level === "medium"){
    return DUMMY_QUESTIONS_MEDIUM
  } else {
    return DUMMY_QUESTIONS_HARD
  }
}