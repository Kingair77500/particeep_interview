import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { ActionType } from '../Redux/Movies/actionsTypes';
import { ReactComponent as DeleteSvg } from './../Images/delete.svg';
import { ReactComponent as DislikeSvg } from './../Images/dislike.svg';
import { ReactComponent as LikeSvg } from './../Images/like.svg';

type PropsDelete = {
    id: string;
}

const DeleteSVG = styled(DeleteSvg) `
    cursor: pointer;
`

export const Delete: React.FC<PropsDelete> = ({ id }) => {
    const dispatch = useDispatch();

    const handleClick = useCallback((event) => {
        event.preventDefault();
        dispatch({
            type: ActionType.DELETE_MOVIES,
            payload: id
        })
    }, [dispatch, id])

    return <DeleteSVG onClick={handleClick} width={'23px'} height={'23px'} color={'black'} role="img" aria-label="Image croix pour supprimer la carte"/>
}

type PropsSvg = {
    width: string;
    height: string;
    color: string;
}

export const Dislike: React.FC<PropsSvg> = ({width, height, color}) => {
    return <DislikeSvg width={width} height={height} color={color} role="img" aria-label="Image croix pour supprimer la carte"/>
}

export const Like: React.FC<PropsSvg> = ({width, height, color}) => {
    return <LikeSvg width={width} height={height} color={color} role="img" aria-label="Image croix pour supprimer la carte"/>
}