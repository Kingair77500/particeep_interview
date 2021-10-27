import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import SelectNumberByPage from './SelectNumberByPage';
import CurrentPage from './CurrentPage';

type PropsMovie = {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    myLike: boolean;
    myDislike: boolean;    
}

type PropsPaginations = {
    setSliceData: React.Dispatch<React.SetStateAction<{
        beginIndex: number;
        endIndex: number;
    } | undefined>>;
    movies: PropsMovie[] | [];
    filter: string[];
}

const PaginationComponent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: ${rem(10)};
    margin-right: ${rem(10)};
`

const Paginations: React.FC<PropsPaginations> = ({ setSliceData, movies, filter }) => {

    const lengthMovies = filter.length !== 0 ? filter.map((elementFilter) => movies.filter(
        (element) => elementFilter === element.category)
    ).flat().length : movies.length;
    const [limitByPage, setLimitByPage] = useState(12);
    const [page, setPage] = useState(lengthMovies / limitByPage);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPage(Math.ceil(lengthMovies / limitByPage));
        setCurrentPage((currentPage) => {
            const getCurrentPage = Math.ceil(lengthMovies / limitByPage);
            if (getCurrentPage >= currentPage)
                return currentPage;
            return 1;
        });
    }, [lengthMovies, limitByPage])

    return (
        <PaginationComponent>
            <CurrentPage setSliceData={setSliceData} setCurrentPage={setCurrentPage} currentPage={currentPage} page={page} limitByPage={limitByPage} />
            <SelectNumberByPage setLimitByPage={setLimitByPage} setPage={setPage} setCurrentPage={setCurrentPage} limitByPage={limitByPage} lengthMovies={lengthMovies} />
        </PaginationComponent>
    )
}

export default Paginations;