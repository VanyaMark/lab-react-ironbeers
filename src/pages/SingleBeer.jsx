import React from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react'

const SingleBeer = () => {
    const { id } = useParams();
    const [foundBeer, setFoundBeer] = useState(null)

    const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setFoundBeer(res.data)
                console.log(foundBeer)
            })
    }, [])



  return (
    <div>
        {foundBeer && 
        <div>
            <img src={foundBeer.image_url} style={{width: 100}} alt="beer" />
            <h2>{foundBeer.name}</h2>
            <p>{foundBeer.tagline}</p>
            <p>{foundBeer.first_brewed}</p>
            <p>{foundBeer.attenuation_level}</p>
            <p>{foundBeer.description}</p>
            <p>{foundBeer.contributed_by}</p>
        </div>}
    </div>
  )
}

export default SingleBeer

