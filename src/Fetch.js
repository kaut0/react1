import { useState, useEffect } from "react";

const Fetch = (url) => {
//   const url = "https://pokeapi.co/api/v2/pokemon/"
//   const urlDigimon = "https://digimon-api.vercel.app/api/digimon" 
  //state
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  //comsume api
  useEffect(()=>{
    fetch(url).then(res=>{
      if(!res.ok){
        throw Error('Cant fetch the data')
      }  
      return res.json()
    }).then(data=>{
      setData(data)
      setLoading(false)
    }).catch(err=>{
      // console.log(err.message)
      setError(err.message)
      setLoading(false)
    })
  }, [])

  return {data, loading, error}
}
 
export default Fetch;