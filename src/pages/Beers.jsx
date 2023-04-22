import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Link } from "react-router-dom";


const Beers = () => {

    const [beers, setBeers] = useState([])
    const [searchText, setSearchText] =useState('');

    

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(res => {
                setBeers(res.data)
                console.log("res.data", res.data)
            })
        }, [])

        const refreshFilteredBeers = (searchText) => {
            if (searchText === "") {
                setBeers(beers)
            }
            else {
                const filteredBeers = beers.filter(beer => beer.name.toUpperCase().startsWith(searchText.toUpperCase()))
                setBeers(filteredBeers)
            }
        }

    /*    useEffect(() => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
                .then(res => {
                    setBeers(res.data)
                })
            }, [searchText]) */

    const handleChange = (e) => {
        setSearchText(e.target.value)
        refreshFilteredBeers(e.target.value)

        console.log(e.target.value)
        console.log('filtered', beers)
    } 
  return (
    <div>
        <Header />
        <div>
        <div>
            <input value={searchText} onChange={handleChange} />
        </div>
            {beers.map(beer => (
                <div key={beer._id}>
                    <img style={{width: 50}} src={beer.image_url} alt="beer" />
                    <div>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p><b>Created by:</b> {beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Get a Specific Beer</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Beers