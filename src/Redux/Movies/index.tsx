import { Action, ActionType } from './actionsTypes';

export type Movies = {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    myLike: boolean,
    myDislike: boolean;
}[] | [];

type State = {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    myLike: boolean,
    myDislike: boolean;
}[] | [];

const initialState: Movies | [] = [];

export const moviesReducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.STOCK_MOVIES:
            const newDataMovies = action.payload.map((element) => { 
                return {...element, myLike: false, myDislike: false}
            });
            return newDataMovies
        case ActionType.DELETE_MOVIES:
            return state.filter((element) => element.id !== action.payload);
        case ActionType.LIKE_DISLIKE:
            return state.map((element) => element.id === action.payload.id ? {...element, ...action.payload } : element)
        default:
            return state;
    }
}