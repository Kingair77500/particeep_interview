import React, { useState, useEffect, useCallback } from 'react';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import { rem } from 'polished';

type PropsCurrentPage = {
    setSliceData: React.Dispatch<React.SetStateAction<{
        beginIndex: number;
        endIndex: number;
    } | undefined>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number,
    page: number,
    limitByPage: number
}

const PaginationItem = styled(Pagination.Item) `
    margin-bottom: ${rem(10)};
`

const CurrentPage: React.FC<PropsCurrentPage> = ({ setSliceData, setCurrentPage, currentPage, page, limitByPage }) => {

    const [items, setItems] = useState<JSX.Element[]>([])

    const goToPage = useCallback((event) => {
        if (event !== null)
            setCurrentPage(Number(event.target.textContent));
    }, [setCurrentPage])

    useEffect(() => {
        for (let number = 1; number <= page; number++) {
            setItems((prevItems) => {
                return [
                    ...prevItems,
                    <PaginationItem onClick={goToPage} key={number} active={number === currentPage}>
                        {number}
                    </PaginationItem>    
                ]
            })
        }
        const startIndex = currentPage * limitByPage - limitByPage;
        const endIndex = startIndex + limitByPage;    
        setSliceData({beginIndex: startIndex, endIndex: endIndex})
        return () => {
            setItems([]);
        }
    }, [page, limitByPage, currentPage, goToPage, setSliceData])

    return (
        <Pagination size="sm">
            {
                items
            }
        </Pagination>
    );
}

export default CurrentPage;