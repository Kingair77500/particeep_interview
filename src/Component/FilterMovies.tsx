import React, { useCallback, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';
import { rem } from 'polished';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';

type PropsMovie = {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    myLike: boolean;
    myDislike: boolean;
}

const FormGroup = styled(Form.Group) `
    margin: ${rem(10)} ${rem(10)} ${rem(0)} ${rem(10)};
`

const FormLabel = styled(Form.Label) `
    font-weight: bold;
`

type PropsListMovie = { 
    setFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const animatedComponents = makeAnimated();

const init = (movies: PropsMovie[] | []) => {
    return movies?.map((element: PropsMovie) => element.category)
        .filter((element, key, array) => array.indexOf(element) === key)
        .map((element) => { return { value: element, label: element }});
}

const FilterMovies: React.FC<PropsListMovie> = ({ setFilter }) => {

    const movies = useTypedSelector((state) => state.movies);
    const [categorySelected, setCategorySelected] = useState<{value: string, label: string}[] | []>([]);

    useEffect(() => {
            const filterRed = init(movies);
            console.log(filterRed)
            setCategorySelected((prevItem: {value: string, label: string}[] | []) =>
                filterRed.map(
                    (element: {value: string, label: string}) => {
                        console.log(element.value);
                        return prevItem.filter(
                            (elementSelected) => {
                                if (elementSelected !== undefined)
                                    if (element.value === elementSelected.value)
                                        return elementSelected.value
                                return []
                            })[0];
                    }
                )
            )
    }, [movies])

    const handleChange = useCallback((newValue: any) => {
        setCategorySelected(newValue);
        setFilter(newValue.map((element: {value: string, label: string}) => element.value));
    }, [setFilter]);

    return (
        <FormGroup>
            <FormLabel>Filtre</FormLabel>
            <Select
                name="filter"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                isClearable
                defaultValue={[]}
                options={init(movies)}
                onChange={(newValue: any, actionMeta: any) => handleChange(newValue)}
                value={categorySelected || null}
            />
        </FormGroup>
    )
}

export default FilterMovies;