import React from 'react';
import Tour from './Tour';
const Tours = ({tours, notInterested}) => {
  return (
    <section>
    <div className='title'>
    <h2>Tours</h2>
      <div className='underline'></div>
    </div>
    {tours.map((eachTour) => 
      <Tour clearTour= {notInterested} key={eachTour.id} {...eachTour}/>
    )}
    </section>
  )
};

export default Tours;
