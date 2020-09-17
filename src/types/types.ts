
export type Quiz = {
    question: string,
    option: string[],
    correct: string
}

export type Profile = {
    id: number,
    name: string,
    email: string,
    avatar: string, 
    attempted: boolean,
    quiz: {
        score: number
    }
}

export enum Types {
    Create = "CREATE_Profile",
    Update = "UPDATE_Profile",
}