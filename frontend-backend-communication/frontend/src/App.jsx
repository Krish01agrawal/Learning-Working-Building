import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/jokes')
    .then((response)=>{
      console.log(response.data);
      setJokes(response.data);
    })
    .catch(()=>{
      console.log("Error fetching jokes");
    })
  }, []);

  return (
    <>
      <h1>Hello World Krish</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h2>{joke.joke}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
