import React, {useEffect, useState} from 'react';
import style from './css/pokemonCard.module.css'
import axios from "axios";
import {Link} from "react-router-dom";

const PokemonCard = ({i}) => {
  const [img, setImg] = useState('')

  const getImg = async () => {
    const {data} = await axios.get(i?.url)
    return setImg(data?.sprites?.other?.dream_world?.front_default)
  }


  useEffect(() => {
    getImg()
  }, [i?.url])
  return (
    <li className={style.li}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={`/about/${i?.name}`}>
        <div className={style.img}>
          <img src={img} alt=""/>
        </div>
        <h2>{i?.name}</h2>
      </Link>
    </li>
  );
};

export default PokemonCard;