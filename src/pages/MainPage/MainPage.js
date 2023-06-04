import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons, pokiSelect} from "../../redux/slices/pokemonsSlice";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {CircularProgress, Pagination} from "@mui/material";

const MainPage = () => {
  const dispatch = useDispatch()
  const {pokemons, load} = useSelector(pokiSelect)
  const [offset, setOffset] = useState(1)
  const limit = 16;

  useEffect(() => {
    dispatch(getPokemons({
      limit,
      offset
    }))
  }, [dispatch, offset])
  return (
    <div>
      <h2>MainPage</h2>
      <div className="container">
        <ul className='ul'>
          {
            !load
              ?
              pokemons?.results?.map(i => <PokemonCard i={i}/>)
              :
              <div>
                <CircularProgress/>
              </div>
          }
        </ul>
        {
          pokemons.count >= limit
          &&
          <Pagination
            page={offset / limit + 1}
            onChange={(_,p) => setOffset((p - 1) * limit)}
            count={Math.ceil(pokemons?.count / limit)}
            color='primary'
          />
        }
      </div>
    </div>
  );
};

export default MainPage;