import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const People = (props) => {
    const {id} = useParams();
    const [apiInfo, setApiInfo] = useState();
    const [homeworld, setHomeworld] = useState("")
    const [homeworldId, setHomeworldId] = useState("")
    const[isErr, setIsErr] = useState(false);
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            setIsErr(false);
            console.log(res.data)
            setApiInfo(res.data);
            showHomeworld(res.data.homeworld)
            axios
            .get(res.data.homeworld)
            .then((homeworldRes) => {
                console.log(homeworldRes.data.name);
                setHomeworld(homeworldRes.data.name);
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => {
        console.log(err);
        setIsErr(true)
        });
    }, [id]);

    const showHomeworld =(homeworldURL) => {

        if (homeworldURL.charAt(homeworldURL.length -3) === "/"){
            const hwId =homeworldURL.charAt(homeworldURL.length -2);
            setHomeworldId(hwId);
        }else{
            const firstCharId = homeworldURL.charAt(homeworldURL.length -3);
            const secondCharId = homeworldURL.charAt(homeworldURL.length -2);
            const idStr = `${firstCharId}${secondCharId}`
            setHomeworldId(idStr)
        }
    }

    if (!isErr){
        return(
            apiInfo?
            <div>
                <h1>Char</h1>
                <h1>{apiInfo.name}</h1>
                <p>Height : {apiInfo.height}</p>
                <p>Hair Color : {apiInfo.hair_color}</p>
                <p>Eye Color : {apiInfo.eye_color}</p>
                <p>Skin Color : {apiInfo.skin_color}</p>
                <p>Gender : {apiInfo.gender}</p>
                <p>Homeworld : {homeworld}</p>
                <p><Link to={`/planets/${homeworldId}`}>See Homeworld</Link></p>
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

export default People
