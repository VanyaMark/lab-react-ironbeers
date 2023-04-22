import React from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from '../components/Header';

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState(null)

    const url = `https://ih-beers-api2.herokuapp.com/beers/random`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setRandomBeer(res.data)
                console.log(randomBeer)
            })
    }, [])



  return (
    <div>
    <Header />
        {randomBeer && 
        <div>
            <img src={randomBeer.image_url} style={{width: 100}} alt="beer" />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>}
    </div>
  )
}


export default RandomBeer




