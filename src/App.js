// import './App.css';
import './assets/style.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Header from './components/header';

function App() {
  //url api
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const urlDigimon = "https://digimon-api.vercel.app/api/digimon" 
  //state
  const [name, setName] = useState('Bahirudin')
  const [api, setApi] = useState(null)

  
  //comsume api
  useEffect(()=>{
    fetch(url).then(res=>{return res.json()}).then(data=>{
      setApi(data)
    })
  }, [])

  // const click = (e) =>{
  //   e.preventDefault()
  //   setName(name + "Mustakin")  
  // }

  console.log(api)
  return (
      <div>
        <Navbar />
        <div>
            {api && <Header name={name} midName = "Makan Nasi" api={api} />}
        </div>
        
      </div>
    );
}

export default App;
