import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

type PropsCategory = {
    category: string;
}

const CategoryComponent = styled.div `
    margin: ${rem(10)} ${rem(10)};

    & > h2 {
        font-weight: bold;
        padding-bottom: ${rem(5)};
    }

    & > p {
        margin-left: ${rem(10)};
    }
`

const Category: React.FC<PropsCategory> = ({ category }) => {
    return (
        <CategoryComponent>
            <h2>Catégorie :</h2>
            <p>{category}</p>
        </CategoryComponent>
    )
}

export default Category;