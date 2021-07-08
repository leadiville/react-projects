import React from 'react';
import Tour from './Tour';
import { useState } from 'react';

const Tours = ({tours, notInterested}) => {
  const [header, setHeader] = useState(true);

  return (
    <main>
    {tours.length > 0 ? <div className='title'>
    <h2>{header && 'Tours'}</h2>
    <div className='underline'></div>
    </div> : ""}
    {tours.map((eachTour) => 
      <Tour clearTour= {notInterested} key={eachTour.id} {...eachTour}/>
    )}
    </main>
  )
};

export default Tours;
