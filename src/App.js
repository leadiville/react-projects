import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Modal from './Modal'
import ModalComponents from './ModalComponents'

const url = 'https://course-api.com/react-tours-project'




const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

   
  const notInterested = (tourItem) => {
    setTours(tours.filter((currentTour) => 
      currentTour.id !== tourItem
    )  )
  }

  //fetching and assigning value to data array
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
  
  // fetching data 
  useEffect(() => {
    getTours();
  }, [])

//decided to do the conditioning here just to speed up
  if(tours.length === 0) {
    return (
      <main>
      <h3 className='exclusive'>looking for something special...
      <button onClick = {() => {
        getTours()
        setModal(true)}}>exclusive offers</button>
    </h3>
      <br />
      <h2>Don't like any of our choices!</h2>
      <button className='btn' onClick = {() => 
        getTours()
      }>Refresh</button>
      </main>
    )
  }

  //set up modal conditon 
  if(modal) {
    return (
      <div>
      <main>
      <Modal clearModal = {() => setModal(false)}/>
      <ModalComponents clearModal = {() => setModal(false)}/></main>
      </div>
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
