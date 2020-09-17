import data from './data/data.json'
import {Quiz} from '../types/types'

const shuffleArray = (array: Quiz[]) =>[...array].sort(() => Math.random() - 0.5)

var dataArray: Quiz[] = shuffleArray(data)

function quizList(difficulty: string): Quiz[]{
    switch (difficulty) {
        case 'easy':
            return dataArray.slice(0,2);
        case 'medium':
            return dataArray.slice(0,4);
        case 'hard':
            return dataArray;
        default:
            return dataArray;
    }
}

export default quizList