import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxPok = (props) => {
    const [ poki, setPoki ] = useState([]);

    const showPoki = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => setPoki(res.data.results))
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <div className="container-fluid text-center mt-5">
            <button onClick={showPoki} className="btn btn-primary">Axios Fetch Pokemons</button>
            <ul className="mt-5 list-unstyled">
                {poki.map((p, i) => {
                    return(
                        <li key={i}>{p.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AxPok;