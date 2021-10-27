import { Movies } from './index';

export enum ActionType {
    GET_MOVIES = 'GET_MOVIES',
    STOCK_MOVIES = 'STOCK_MOVIES',
    DELETE_MOVIES = 'DELETE_MOVIES',
    LIKE_DISLIKE = 'LIKE_DISLIKE'
}

type actionGetMovies = {
    type: ActionType.GET_MOVIES;
}

type actionStockMovies = {
    type: ActionType.STOCK_MOVIES;
    payload: Movies;
}

type actionDeleteMovies = {
    type: ActionType.DELETE_MOVIES;
    payload: string;
}

type actionLikeDislikeMovies = {
    type: ActionType.LIKE_DISLIKE;
    payload: { myLike: boolean, myDislike: boolean, id: string };
}

export type Action = actionGetMovies | actionStockMovies | actionDeleteMovies | actionLikeDislikeMovies;