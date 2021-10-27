import React, { memo } from 'react';
import { rem } from 'polished';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Delete } from '../../Svg/svg';
import ToggleLike from './ToggleLike';
import Ratio from './Ratio';
import Category from './Category';

type PropsElementMovies = {
    dataMovie: {
        id: string;
        title: string;
        category: string;
        likes: number;
        dislikes: number;
        myLike: boolean;
        myDislike: boolean;
    }
}

const CardContenaire = styled(Card) `
    flex: 0 0 auto;
    margin-top: ${rem(15)};
    width: 20%;

    @media (min-width: 1001px) and (max-width: 1400px) {
        flex: 0 0 auto;
        min-width: 25%;
    }
    @media (min-width: 801px) and (max-width: 1000px) {
        flex: 0 0 auto;
        min-width: 33.33%;
    }
    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`

const CardBody = styled(Card.Body) `
    padding: ${rem(0)};
`

const CardTitle = styled(Card.Title) `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${rem(10)} ${rem(0)};
    padding: ${rem(0)} ${rem(5)};
    font-weight: bold;
`

const CardFooter = styled(Card.Footer) `
    padding: ${rem(15)} ${rem(0)} ${rem(0)} ${rem(0)};
`

const ElementMovies: React.FC<PropsElementMovies> = memo(({ dataMovie }) => {
    return (
        <CardContenaire>
            <CardBody>
                <CardTitle>{dataMovie.title} <Delete id={dataMovie.id}/></CardTitle>
                <CardFooter>
                    <Category category={dataMovie.category}/>
                    <Ratio numberLike={dataMovie.likes} numberDislike={dataMovie.dislikes} />
                    <ToggleLike likes={dataMovie.likes} dislikes={dataMovie.dislikes} myLike={dataMovie.myLike} myDislike={dataMovie.myDislike} id={dataMovie.id}/>
                </CardFooter>
            </CardBody>
        </CardContenaire>
    )
})

export default ElementMovies;