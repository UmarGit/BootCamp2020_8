import { Profile, Types } from '../types/types'

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

type ProfilePayload = {
    [Types.Create]: {
        id: number,
        name: string,
        email: string,
        avatar: string,
        attempted: boolean,
        quiz: {
            score: number
        }
    };
    [Types.Update]: {
        id: number,
        name: string,
        email: string,
        avatar: string,
        attempted: boolean,
        quiz: {
            score: number
        }
    };
};

export type ProfileActions = ActionMap<ProfilePayload>[keyof ActionMap<
    ProfilePayload
>];

export const ProfileReducer = (
    state: Profile[],
    action: ProfileActions
) => {
    switch (action.type) {
        case Types.Create:
            return [...state, action.payload];
        case Types.Update:
            let arr = [...state]
            arr[0] = action.payload
            state = [...arr]
            return [...state]
        default:
            return state;
    }
};