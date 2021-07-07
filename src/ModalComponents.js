import React from 'react'

const ModalComponents = ({clearModal}) => {
    return (
        <div className='modal-components'>
            <h3>Do you want to view our exclusive offers?</h3>
            <section>
            <button className='btn'>yes</button>
            <button className='btn' onClick = {clearModal}>No</button>
            </section>
        </div>
    )
}

export default ModalComponents
