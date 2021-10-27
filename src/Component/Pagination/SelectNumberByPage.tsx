import React, { useCallback } from 'react';
import { rem } from 'polished';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

type PropsSelectNumberByPage = {
    setLimitByPage: React.Dispatch<React.SetStateAction<number>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    limitByPage: number;
    lengthMovies: number;
}

const FormGroup = styled(Form.Group)`
    width: ${rem(80)};
`

const options = [
    { value: 4, label: '4' },
    { value: 8, label: '8' },
    { value: 12, label: '12' },
]

const animatedComponents = makeAnimated();

const SelectNumberByPage: React.FC<PropsSelectNumberByPage> = ({setLimitByPage, setPage, setCurrentPage, limitByPage, lengthMovies}) => {

    const handleChangeSelect = useCallback((newValue: any, actionMeta: any) => {
        setLimitByPage(newValue.value);
        setPage(Math.ceil(lengthMovies / newValue.value));
        setCurrentPage(1);
    }, [setLimitByPage, setPage, setCurrentPage, lengthMovies]);

    return (
        <FormGroup>
            <Select
                name="filter"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={{value: limitByPage, label: `${limitByPage}`}}
                options={options}
                onChange={handleChangeSelect}                    
            />
        </FormGroup>
    )
}

export default SelectNumberByPage;