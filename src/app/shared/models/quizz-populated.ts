import { Question } from "./question.model";

export class QuizzPopulated{
    _id!: string;
    title!: string;
    questions!: Question[];
}