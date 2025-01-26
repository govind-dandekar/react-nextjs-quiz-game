"use server";

import { DUMMY_QUESTIONS } from "./dummy-questions";

export async function getQuestions(level: string) {
  return DUMMY_QUESTIONS;
}
