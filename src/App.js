// import './App.css';
import { useState, useEffect } from 'react';
import './assets/style.css'
import Header from './components/header';
import Home from './components/home';
import AppHeader from './components/navbar'


function App() {

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

  // console.log(api.results)
  return (
      <div className='App'>
        {/* Header */}
        <AppHeader api = {api} />
        <div className='Content'>
            {/* Disini Isi */}
            {/* <Home /> */}
            <div className='corausel'>
              {api && <Header api={api} />}
            </div>

        </div>
      </div>
    );
}

export default App;
