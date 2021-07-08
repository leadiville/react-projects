import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Modal from './Modal'
import ModalComponents from './ModalComponents'
import Special from './Special'

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

    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
      return tours

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
      <div>
    {tours.length === 0 && <Special getTours={getTours} setModal = {setModal} />}
      <main>
    <Tours tours={tours} notInterested = {notInterested} />
    </main>
      </div>
   )}
    }
export default App
