import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { Like, Dislike } from '../../Svg/svg';

type PropsRatio = {
    numberLike: number;
    numberDislike: number;
}

const RatioProgresse = styled.div `
    padding: ${rem(10)} ${rem(10)};

    & > h2 {
        font-weight: bold;
    }
`

const Progresse = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top ${rem(10)};
`

const Bar = styled.div `
    align-self: center;
    overflow: auto;
    width: ${rem(150)};
    height: ${rem(10)};
    border-radius: ${rem(10)};
    margin: ${rem(0)} ${rem(10)};
`

const BarLike = styled.span <{pourcent: number}>`
    display: inline-block;
    width: ${(props) => `${props.pourcent}%`};
    height: ${rem(15)};
    background-color: #36E600;
    border-radius: ${(props) => props.pourcent === 100 ? `${rem(5)}` : `${rem(5)} ${rem(0)} ${rem(0)} ${rem(5)}`};
`

const BarDislike = styled.div <{pourcent: number}>`
    display: inline-block;
    height: ${rem(15)};
    width: ${(props) => `${props.pourcent}%`};
    background-color: red;
    border-radius: ${(props) => props.pourcent === 1 ? `0 50% 50% 0` : `${rem(0)} ${rem(5)} ${rem(5)} ${rem(0)}`};
`

const Ratio: React.FC<PropsRatio> = ({numberLike, numberDislike}) => {

    const total = numberLike + numberDislike;
    const PourcentLike = Math.floor(numberLike / total * 100);
    const PourcentDislike = 100 - PourcentLike;

    return (
        <RatioProgresse>
            <h2>Ratio :</h2>
            <Progresse>
                <span>{numberLike}<Like width={'15px'} height={'15px'} color={'black'}/></span>
                <Bar><BarLike pourcent={PourcentLike}/><BarDislike pourcent={PourcentDislike}/></Bar>
                <span>{numberDislike}<Dislike width={'15px'} height={'15px'} color={'black'}/></span>    
            </Progresse>
        </RatioProgresse>
    )
}

export default Ratio;