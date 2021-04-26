export interface QuestionObject {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer?: string; // this is where we store what the user answer was
}