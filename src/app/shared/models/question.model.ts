export class Question{
    _id!: string
    label!: string;
    goodAnswer!: string;
    badAnswers!: string[];
    nbGoodAnswer?: number
    nbBadAnswer?: number
    difficulty?: number
}