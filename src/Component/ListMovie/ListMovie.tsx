import React from 'react';
import styled from 'styled-components';
import { em, rem } from 'polished';
import ElementMovies from '../CardMovie/ElementMovie';

type PropsMovie = {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    myLike: boolean;
    myDislike: boolean;    
}

type PropsListMovie = {
    sliceData: {beginIndex: number, endIndex: number} | undefined;
    filter: string[];
    movies: PropsMovie[] | [];
};

const List = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0;
`

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${rem(30)} ${rem(10)} ${rem(0)} ${rem(10)};
    flex-wrap: wrap;

    & > h1 {
        padding-right: ${rem(10)};
        font-weight: bold;
        font-size: ${em(20)};
    }

    & > span {
        flex: 1;
        display: inline-block;
        align-self: center;
        height: ${rem(1)};
        background-color: black;
    }
`

const ListMovie: React.FC<PropsListMovie> = ({ sliceData, filter, movies }) => {

    const moviesSort = filter.map((elementFilter) => movies.filter(
        (element) => elementFilter === element.category)
    ).flat();

    if (movies.length === 0) {
        return <p>IL n'y a plus de carte</p>;
    }
    return (
        <>
            {
                filter.length !== 0 ? <Filter>
                    {
                        moviesSort.slice(sliceData?.beginIndex, sliceData?.endIndex).map((element: PropsMovie) => {
                            return (
                                <ElementMovies key={element.id} dataMovie={element} />
                            )
                        })
                    }
                </Filter>
                : <List>
                   {
                       movies.slice(sliceData?.beginIndex, sliceData?.endIndex).map((element: PropsMovie) => {
                            return <ElementMovies key={element.id} dataMovie={element} />
                        })
                   } 
                </List>
            }
        </>
    )
}

export default ListMovie;