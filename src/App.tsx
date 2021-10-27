import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './Redux/hooks/useTypeSelector';
import { movies$ } from './Data/movies';
import ListMovie from './Component/ListMovie/ListMovie';
import FilterMovies from './Component/FilterMovies';
import { ActionType } from './Redux/Movies/actionsTypes';
import Paginations from './Component/Pagination/Pagination';

const App: React.FC<any> = () => {

  const movies = useTypedSelector((state) => state.movies);
  const [filter, setFilter] = useState<string[]>([]);
  const [sliceData, setSliceData] = useState<{beginIndex: number, endIndex: number} | undefined>(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
      const getMovies = async () => {
          const movies = await movies$;
          dispatch({
            type: ActionType.STOCK_MOVIES,
            payload: movies
          });
      }

      getMovies();
  }, [dispatch])

  return (
    <>
      <FilterMovies setFilter={setFilter}/>
      <ListMovie sliceData={sliceData} filter={filter} movies={movies}/>
      <Paginations setSliceData={setSliceData} movies={movies} filter={filter}/>
    </>
  );
}

export default App;
