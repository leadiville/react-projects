import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'




const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true);

   
  const notInterested = (tourItem) => {
    setTours(tours.filter((currentTour) => 
      currentTour.id !== tourItem
    )  )
  }

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      return setTours(tours);
      
    } 
    catch (error) {
      setLoading(false);
      console.log('fetching request failed from server');
    }
  }

  useEffect(() => {
    getTours();
  }, [])

  if(tours.length === 0) {
    return (
      <main>
      <h2>No more Tour</h2>
      <button className='btn'>Refresh</button>
      </main>
    )
  }

  if(loading) { return <Loading />} else { 
    return (
    <main>
  
    <Tours tours={tours} notInterested = {notInterested} />
    
    </main>
   )}
    }
export default App
