import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router';


const Planets = (props) => {
    const {id} = useParams();
    const [apiInfo, setApiInfo] = useState({});
    // const [homeworld, setHomeworld] = useState("")
    const[isErr, setIsErr] = useState(false);
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            setIsErr(false);
            console.log(res.data)
            setApiInfo(res.data);
            console.log(apiInfo)
            // axios
            // .get(res.data.homeworld)
            // .then((homeworldRes) => {
            //     console.log(homeworldRes.data.name);
            //     setHomeworld(homeworldRes.data.name);
            // })
            // .catch((err) => console.log(err))
        })
        .catch((err) => {
            console.log(err);
            setIsErr(true)
            });
    }, [id]);

    if (!isErr){
        return(
            apiInfo?
            <div>
                <h1>Char</h1>
                <h1>{apiInfo.name}</h1>
                <p>Rotation Period : {apiInfo.rotation_period}</p>
                <p>Orbital Period : {apiInfo.orbital_period}</p>
                <p>Diameter : {apiInfo.diameter}</p>
                <p>Climate : {apiInfo.climate}</p>
                <p>Gravity : {apiInfo.gravity}</p>
                {/* <p>Homeworld : {homeworld}</p> */}
            </div>:""
            
            );
        } else {
            return (
                <>
                <img src="https://cdn.mos.cms.futurecdn.net/hrxPKa5MUbRixfxM3UQ9Fo-970-80.jpg.webp" alt=""></img>
                <h2>These aren't the droids you're looking for</h2>
            </>
            );
            
        }
    }

export default Planets
