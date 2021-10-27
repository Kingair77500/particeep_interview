import React, { useCallback } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { Like, Dislike } from '../../Svg/svg';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../Redux/Movies/actionsTypes';

type PropsToggleLike = {
    likes: number,
    dislikes: number,
    myLike: boolean,
    myDislike: boolean,
    id: string,
}

const ToggleGroup = styled(ToggleButtonGroup) `
    display: flex;
    margin-top: ${rem(10)};
`

const Description = styled.span `
    margin-left: ${rem(10)};
`

const ToggleLike: React.FC<PropsToggleLike> = ({likes, dislikes, myLike, myDislike, id}) => {

    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {

        const dispatchData = ((likes: number, dislikes: number, myLike: boolean, myDislike: boolean, id: string, type: ActionType) => {
            dispatch({
                type: type,
                payload: { likes: likes, dislikes: dislikes, myLike: myLike, myDislike: myDislike, id: id }
            })
        })

        if (event === 1) {
            if (myDislike) {
                dispatchData(likes + 1, dislikes - 1, !myLike, false, id, ActionType.LIKE_DISLIKE)
            } else {
                dispatchData(likes + 1, dislikes, !myLike, false, id, ActionType.LIKE_DISLIKE)
            }
        } else {
            if (myLike) {
                dispatchData(likes - 1, dislikes + 1, false, !myDislike, id, ActionType.LIKE_DISLIKE)
            } else {
                dispatchData(likes, dislikes, false, !myDislike, id, ActionType.LIKE_DISLIKE)
            }
        }
    }, [dispatch, id, dislikes, likes, myDislike, myLike])

    return (
        <ToggleGroup onChange={handleChange} type="radio" name="options">
            <ToggleButton id={`like-${id}`} variant="secondary" value={1}>
                <Like width={'23px'} height={'23px'} color={myLike ? 'red' : 'white'}/>
                <Description>Like</Description>
            </ToggleButton>
            <ToggleButton id={`dislike-${id}`} variant="secondary" value={2}>
                <Dislike width={'23px'} height={'23px'} color={myDislike ? 'red' : 'white'}/>
                <Description>DisLike</Description>
            </ToggleButton>
        </ToggleGroup>
    )
}

export default ToggleLike;