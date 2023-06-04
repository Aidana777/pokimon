import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPoki, pokSelect} from "../../redux/slices/pokemonSlice";
import {useNavigate, useParams} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";

const AboutPage = () => {
  const dispatch = useDispatch()
  const {poki, load} = useSelector(pokSelect)
  const {id} = useParams()
  const navigate = useNavigate()

  const back = () => navigate(-1)

  useEffect(() => {
    dispatch(getPoki(id))
  },[dispatch, id])
  return (
    <div>
      <div className="container">
      <h2>AboutPage</h2>
        {
          !load
          ?
          <>
            <h2>{poki?.name}</h2>
            <Button onClick={back} variant='contained'>Back</Button>
            <div className="imgs">
              <div>
                <img src={poki?.sprites?.other?.dream_world?.front_default} alt=""/>
              </div>
              <div>
                <img src={poki?.sprites?.other?.home?.front_default} alt=""/>
              </div>
              <div>
                <img src={poki?.sprites?.other?.home?.front_shiny} alt=""/>
              </div>
            </div>
          </>
          :
          <div>
            <CircularProgress/>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutPage;