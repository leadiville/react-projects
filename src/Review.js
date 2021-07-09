import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, image, job, text} = people[index];

  const avoidError = (indexNo) => {
    if(indexNo < 0) {
      return people.length - 1;
    }  
    if(indexNo === people.length) {
      return 0;
    }
    return indexNo
  }

  const showPrev = () => {
  let prev = index - 1;
  return setIndex(avoidError(prev))
 }

  const showRandom = () => {
    let random = Math.floor(Math.random() * people.length);
    if(random === index) {
      random = index + 1;
    }
    return setIndex(avoidError(random));
  } 

 const showNext = () => {
   let next = index + 1;
   return setIndex(avoidError(next));
 }
 
  return (
   <article className='review'>
   <div className='img-container'>
   <img alt={name} src={image} className='person-img'/>
   <span className='quote-icon'><FaQuoteRight /></span>
   </div>
   <h4 className='author'>{name}</h4>
   <p className='job'>{job}</p>
   <p className='info'>{text}</p>
   <div className='button-container'>
   <button className='prev-btn' onClick ={showPrev}><FaChevronLeft /></button>
   <button className='next-btn' onClick={showNext}><FaChevronRight /></button>
   </div>
   <button className='random-btn' onClick={showRandom}>suprise me</button>
   </article>
  )
}

export default Review;
