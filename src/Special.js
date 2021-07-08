import React from 'react'

const Special = ({getTours, setModal}) => {
    return (
        
        <main>
        <div>
        <h2 style={{textAlign:'center'}}>no more Tours</h2>
        <div className='underline'>
        </div>
        </div>
        <br />
        <h3 className='exclusive'>looking for special offers?
       <button className='' onClick = {() => {
        getTours()
        setModal(true)
       }}>exclusive</button>
       </h3>
       <button className='btn' onClick = {() => {
         getTours()
        }}>go back</button>
        </main>
        
    )
}

export default Special
