import { shuffle } from "./help";

export const baseURL="https://opentdb.com/api.php?";

type IQuiz={
    category:string;
    type: string;
    difficulty: string;
    question:string;
    correct_answer: string;
    incorrect_answers: any[];
}

export enum Difficulty{
    Easy = "easy",
    Medium = "medium",
    Hard = "hard"
}

export const fetchQuiz = async(amount:number,difficulty:Difficulty)  =>{
    const endPoint = `${baseURL}amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(endPoint);
    const {results} = await response.json();
    const data= results.map((item:IQuiz)=>{
        return {...item,answers:shuffle(item.correct_answer,...item.incorrect_answers)}
    })
    return data;
}
