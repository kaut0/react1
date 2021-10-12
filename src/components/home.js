import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react'
import AppHeader from "./navbar.js"
import Header from "./header";

const Home = ()=>{

    //url api
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const urlDigimon = "https://digimon-api.vercel.app/api/digimon" 
  //state
  const [api, setApi] = useState(null)

  
  //comsume api
  useEffect(()=>{
    fetch(url).then(res=>{return res.json()}).then(data=>{
      setApi(data)
    })
  }, [])

  console.log(api)
    return(
        <div>
            <AppHeader />
            <Header api={api} />
        </div>
    )
}

export default Home;