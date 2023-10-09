import React, {useEffect,useState} from 'react';
import Button from '@mui/material/Button';
  
export default function ButtonUsage() {
  const[joke, setJoke] = useState([1])

  useEffect(()=> {
    const fetchData = async() => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    console.log(data)
    setJoke(data.setup)
    }

    fetchData()
  }, [])

  return( <div>
    <Button sx={{marginTop: 5}} variant="contained" onClick={useEffect()}>Tell me a joke</Button>
    <h3>{joke}</h3>
    </div>
  )
}

