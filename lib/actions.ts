"use server";

import { DUMMY_QUESTIONS } from "./dummy-questions";

export async function getQuestions(level: string) {
  console.log('in getQuestions')
  return DUMMY_QUESTIONS;
}
